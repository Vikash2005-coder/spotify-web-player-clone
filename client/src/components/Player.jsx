import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { usePlayer } from "../context/PlayerContext";
import { useEffect } from "react";

function Player(){
    const {
        audioRef,
        currentSong,
        isPlaying,
        setIsPlaying,
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
    return(
        <div className="h-20 bg-[#181818] border-t border-gray-700 flex items-center px-4">

            {/* Song Info */}
            <div className="flex items-center gap-4 w-1/3">
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
            <div className="flex flex-col items-center gap-2 w-1/3">
                <div className="flex items-center gap-4">
                    <SkipBack />
                    <button 
                        onClick={togglePlay}
                        className="bg-white text-black rounded-full p-2">
                            {isPlaying?<Pause size={18}/> : <Play size={18}/>}
                    </button>
                    <SkipForward />
                </div>

                <div className="w-full h-1 bg-gray-600 rounded">
                    <div className="w-1/3 h-full bg-white rounded"></div>
                </div>
            </div>

            {/* Volume */}
            <div className="flex items-center justify-end gap-2 w-1/3">
                <Volume2 />
                <div className="w-24 h-1 bg-gray-600 rounded">
                    <div className="w-1/2 h-full bg-white rounded"></div>
                </div>
            </div>
        </div>
    )
}

export default Player;
