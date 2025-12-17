import { useNavigate } from "react-router-dom";
import { playlists } from "../data/playlists";
import { usePlayer } from "../context/PlayerContext";

function Library() {
  const navigate = useNavigate();
  const { likedSongs } = usePlayer();

  return (
    <div className="space-y-8">

      {/* Page Title */}
      <h1 className="text-2xl font-bold">Your Library</h1>

      {/* Liked Songs Card */}
      <div
        onClick={() => navigate("/liked")}
        className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r 
                   from-purple-600 to-indigo-600 cursor-pointer hover:opacity-90"
      >
        <div className="text-3xl">❤️</div>
        <div>
          <h2 className="text-lg font-semibold">Liked Songs</h2>
          <p className="text-sm text-gray-200">
            {likedSongs.length} liked songs
          </p>
        </div>
      </div>

      {/* Playlists Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Your Playlists</h2>

        {playlists.length === 0 ? (
          <p className="text-gray-400">No playlists yet</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {playlists.map((playlist) => (
              <div
                key={playlist.id}
                onClick={() => navigate(`/playlist/${playlist.id}`)}
                className="bg-spotifyGray p-4 rounded-lg cursor-pointer
                           hover:bg-[#282828] transition"
              >
                <img
                  src={playlist.image}
                  alt={playlist.name}
                  className="rounded-md mb-3"
                />
                <h3 className="font-semibold">{playlist.name}</h3>
                <p className="text-sm text-gray-400">
                  {playlist.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}

export default Library;
