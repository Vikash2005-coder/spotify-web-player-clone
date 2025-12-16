import PlaylistCard from "../components/PlaylistCard";
const playlists=[
    {
        title:"Chill Beats",
        image:"https://picsum.photos/200?1"
    },
    {
        title:"Focus Flow",
        image:"https://picsum.photos/200?2"
    },
    {
        title: "Daily Mix",
        image: "https://picsum.photos/200?3"
    },
    {
        title: "Workout Hits",
        image: "https://picsum.photos/200?4"
    }
];

function Home(){
    return(
        <div>
            <h1 className="text-2xl font-bold mb-6">Recently Played</h1>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {playlists.map((p,index) => (
                    <PlaylistCard
                        key={index}
                        title={p.title}
                        image={p.image}
                    />
                ))}
            </div>
        </div>
    )
}

export default Home;