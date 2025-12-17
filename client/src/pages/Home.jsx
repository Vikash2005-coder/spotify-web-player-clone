import PlaylistCard from "../components/PlaylistCard";
import { songs } from "../data/songs";
// const playlists=[
//     {
//         title:"Chill Beats",
//         image:"https://picsum.photos/200?1"
//     },
//     {
//         title:"Focus Flow",
//         image:"https://picsum.photos/200?2"
//     },
//     {
//         title: "Daily Mix",
//         image: "https://picsum.photos/200?3"
//     },
//     {
//         title: "Workout Hits",
//         image: "https://picsum.photos/200?4"
//     }
// ];

function Home(){
    return(
        <div>
            <h1 className="text-2xl font-bold mb-6">Recently Played</h1>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {songs.map((song,index) => (
                    <PlaylistCard
                        key={song.id}
                        title={song.title}
                        image={song.imageUrl}
                        songIndex={index}
                    />
                ))}
            </div>
        </div>
    )
}

export default Home;