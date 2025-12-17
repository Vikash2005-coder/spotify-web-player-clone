import { Play } from "lucide-react";
import { usePlayer } from "../context/PlayerContext";

function SongRow({song, index}){
    const {
        currentIndex,
        setCurrentIndex,
        setIsPlaying,
    } = usePlayer();

    const isActive=currentIndex===index;

    const handlePlay = () => {
        setCurrentIndex(index);
        setIsPlaying(true);
    };

    return (
        <div 
            onClick={handlePlay}
            className={`flex items-center gap-4 p-3 rounded cursor-pointer
                ${isActive ? "bg-[#2a2a2a]" : "hover:bg-[#1f1f1f]"}`}
                >
            {/* Index / Play */ }
            <div className="w-6 text-gray-400 text-sm">
                {isActive ? "▶" : index+1 }
            </div>

            {/* Image */}
            <img 
                src={song.imageUrl}
                alt={song.title}
                className="w-10 h-10 rounded"
            />

            {/*Title & Artist */}
            <div className="flex-1">
                <p className={`text-sm ${isActive ? "text-green-500" : "text-white"}`}>
                    {song.title}
                </p>
                <p className="text-xs text-gray-400">
                    {song.artist} • {song.langage}
                </p>
            </div>

            {/* Play Icon */}
            <Play size={16} className="text-gray-400"/>
        </div>
    )
}

export default SongRow;
