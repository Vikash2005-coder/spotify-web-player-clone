import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { usePlayer } from "../context/PlayerContext";
import { useEffect, useState } from "react";

function Player(){
    const[currentTime,setCurrentTime]=useState(0);
    const[duration, setDuration]=useState(0)

    const {
        audioRef,
        currentSong,
        isPlaying,
        setIsPlaying,
        nextSong,
        prevSong,
    } =usePlayer();
   useEffect(() =>{
        if(!currentSong) return;

        audioRef.current.src=currentSong.audioUrl;

        if (isPlaying){
            audioRef.current.play();
        }
        else{
            audioRef.current.pause();
        }
    },[isPlaying, currentSong, audioRef]);
    const togglePlay = () =>{
        setIsPlaying(prev => !prev);
    };
    
    useEffect(() => {
        const audio=audioRef.current;
        const updateTime = () =>{
            setCurrentTime(audio.currentTime);
            setDuration(audio.duration||0);
        }
        

        audio.addEventListener("timeupdate",updateTime);
        audio.addEventListener("loadmetadata",updateTime);
        return () =>{
            audio.removeEventListener("timeupdate",updateTime);
            audio.removeEventListener("loadmetadata",updateTime);
        };
    },[audioRef]);

    useEffect(() =>{
        const audio=audioRef.current;
        audio.onended=nextSong;
    },[audioRef,nextSong]);

    const handleSeek =(e) => {
        const audio=audioRef.current;
        const seekTime=Number(e.target.value);
        audio.currentTime=seekTime;
        setCurrentTime(seekTime);
    };

    const formatTime = (time) =>{
        if (isNaN(time)) return "0:00";
        const minutes=Math.floor(time/60);
        const seconds=Math.floor(time%60).toString().padStart(2,"0");
        return `${minutes}:${seconds}`;
    }
    return(
        <div className="h-20 w-full bg-[#181818] border-t border-gray-700 flex items-center px-6">

            {/* Song Info */}
            <div className="flex items-center gap-4 w-64 flex-shrink-0">
                <img 
                    src={currentSong.imageUrl}
                    alt={currentSong.title}
                    className="w-12 h-12 rounded"
                />
                <div>
                    <p className="text-sm">{currentSong.title}</p>
                    <p className="text-xs text-gray-400">{currentSong.artist}</p>
                </div>
            </div>

            {/* Controls */}
            <div className="flex flex-col items-center justify-center flex-1">
                <div className="flex items-center gap-4 mb-0.5">
                    <SkipBack onClick={prevSong} className="cursor-pointer text-gray-300 hover:text-white"/>
                    <button 
                        onClick={togglePlay}
                        className="bg-white text-black rounded-full p-2">
                            {isPlaying?<Pause size={18}/> : <Play size={18}/>}
                    </button>
                    <SkipForward onClick={nextSong} className="cursor-pointer text-gray-300 hover:text-white"/>
                </div>

                <div className="flex items-center gap-2 w-full max-w-md text-xs text-gray-400">
                    <span>{formatTime(currentTime)}</span>

                    <input 
                        type="range"
                        min="0"
                        max={duration}
                        value={currentTime}
                        onChange={handleSeek}
                        className="flex-1 accent-white"
                    />
                    <span>{formatTime(duration)}</span>
                </div>"
            </div>

            {/* Volume */}
            <div className="flex items-center justify-end gap-2 w-48 flex-shrink-0">
                <Volume2 />
                <div className="w-24 h-1 bg-gray-600 rounded">
                    <div className="w-1/2 h-full bg-white rounded"></div>
                </div>
            </div>
        </div>
    )
}

export default Player;
