import PlaylistCard from "../components/PlaylistCard";
import { songs } from "../data/songs";
import SongRow from "../components/SongRow";
import { playlists } from "../data/playlists";

function Home() {
  return (
    <div className="space-y-10">

      {/* Recently Played */}
      <div>
        <h1 className="text-2xl font-bold mb-6">Recently Played</h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {playlists.map((playlist) => (
            <PlaylistCard
              key={playlist.id}
              title={playlist.title}
              image={playlist.imageUrl}
              playlistId={playlist.id}
            />
          ))}
        </div>
      </div>

      {/* Song List */}
      <div>
        <h2 className="text-xl font-semibold mb-4">All Songs</h2>

        <div className="space-y-1">
          {songs.map((song, index) => (
            <SongRow
              key={song.id}
              song={song}
              index={index}
            />
          ))}
        </div>
      </div>

    </div>
  );
}

export default Home;