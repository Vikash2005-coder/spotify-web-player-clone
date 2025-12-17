import { useParams } from "react-router-dom";
import { playlists } from "../data/playlists";
import { songs } from "../data/songs";
import SongRow from "../components/SongRow";

function Playlist() {
  const { id } = useParams();

  // Find playlist by id
  const playlist = playlists.find((p) => p.id === id);

  // Fallback if playlist not found
  if (!playlist) {
    return (
      <p className="text-gray-400 text-lg">
        Playlist not found
      </p>
    );
  }

  return (
    <div className="space-y-10">

      {/* ================= PLAYLIST HEADER ================= */}
      <div className="flex items-center gap-10">

        {/* Playlist Image */}
        <img
          src={playlist.image}
          alt={playlist.name}
          className="w-52 h-52 rounded-lg shadow-lg"
        />

        {/* Playlist Info */}
        <div className="flex flex-col gap-3">
          <p className="uppercase text-xs tracking-widest text-gray-400">
            Playlist
          </p>

          <h1 className="text-5xl font-extrabold leading-tight">
            {playlist.name}
          </h1>

          <p className="text-gray-400 max-w-xl">
            {playlist.description}
          </p>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-700/50" />

      {/* ================= SONG LIST ================= */}
      <div className="space-y-1">
        {playlist.songIndexes.map((songIndex) => (
          <SongRow
            key={songIndex}
            song={songs[songIndex]}
            index={songIndex}
          />
        ))}
      </div>

    </div>
  );
}

export default Playlist;
