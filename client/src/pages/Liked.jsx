import { songs } from "../data/songs";
import SongRow from "../components/SongRow";
import { usePlayer } from "../context/PlayerContext";

function Liked() {
  const { likedSongs } = usePlayer();

  const likedSongList = songs.filter((song) =>
    likedSongs.includes(song.id)
  );

  if (likedSongList.length === 0) {
    return (
      <p className="text-gray-400 text-lg">
        No liked songs yet ❤️
      </p>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Liked Songs</h1>

      <div className="space-y-1">
        {likedSongList.map((song, index) => (
          <SongRow
            key={song.id}
            song={song}
            index={songs.indexOf(song)}
          />
        ))}
      </div>
    </div>
  );
}

export default Liked;
