function PlaylistCard({ title, image }){
    return(
        <div className="bg-spotifyGray p-4 rounded-lg hover:bg-[#282828] cursor-pointer transition">
            <img
                src={image}
                alt={title}
                className="rounded-md mb-4"
            />

            <h3 className="text-white font-semibold">{title}</h3>
            <p className="text-gray-400 text-sm">Playlist</p>            
        </div>
    )
}
export default PlaylistCard;