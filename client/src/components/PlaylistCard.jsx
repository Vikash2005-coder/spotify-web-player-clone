import { useNavigate } from "react-router-dom";

function PlaylistCard({title, image, playlistId}){
    const navigate=useNavigate();

    return (
        <div 
            onClick={() => navigate(`/playlist/${playlistId}`)}
            className="bg=spotifyGray p-4 rounded-lg hover:bg-[#282828] curso-pointer transition">
            
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