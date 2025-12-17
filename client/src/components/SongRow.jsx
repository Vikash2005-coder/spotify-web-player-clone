import { Play, Heart } from "lucide-react";
import { usePlayer } from "../context/PlayerContext";

function SongRow({ song, index }) {
  const {
    currentIndex,
    setCurrentIndex,
    setIsPlaying,
    likedSongs,
    toggleLike,
  } = usePlayer();

  const isActive = currentIndex === index;
  const isLiked = likedSongs.includes(song.id);

  const handlePlay = () => {
    setCurrentIndex(index);
    setIsPlaying(true);
  };

  const handleLike = (e) => {
    e.stopPropagation(); // prevent play
    toggleLike(song.id);
  };

  return (
    <div
      onClick={handlePlay}
      className={`flex items-center gap-4 p-3 rounded cursor-pointer
        ${isActive ? "bg-[#2a2a2a]" : "hover:bg-[#1f1f1f]"}`}
    >
      {/* Index / Play */}
      <div className="w-6 text-gray-400 text-sm">
        {isActive ? "▶" : index + 1}
      </div>

      {/* Image */}
      <img
        src={song.imageUrl}
        alt={song.title}
        className="w-10 h-10 rounded"
      />

      {/* Title & Artist */}
      <div className="flex-1">
        <p className={`text-sm ${isActive ? "text-green-500" : "text-white"}`}>
          {song.title}
        </p>
        <p className="text-xs text-gray-400">
          {song.artist} • {song.language}
        </p>
      </div>

      {/* Like Button */}
      <button onClick={handleLike}>
        <Heart
          size={18}
          className={isLiked ? "text-green-500 fill-green-500" : "text-gray-400"}
        />
      </button>
    </div>
  );
}

export default SongRow;
