import { Home, Search, Library } from "lucide-react";
function Sidebar(){
    return(
        <div className="w-60 bg-black p-5 flex flex-col gap-6 h-full">
            {/* Logo */}
            <h1 className="text-2xl font-bold text-white">
                Spotify
            </h1>

            {/* Navigation */}
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-gray-300 hover:text-white cursor-pointer">
                    <Home size={20}/>
                    <span>Home</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 hover:text-white cursor-pointer">
                    <Search size={20} />
                    <span>Search</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 hover:text-white cursor-pointer">
                    <Library size={20}/>
                    <span>Your Library</span>
                </div>
            </div>

            {/* Divider */}
            <hr className="border-gray-700"/>

            {/* Playlists */}
            <div className="text-gray-400 text-sm">
                <p className="hover:text-white cursor-pointer">Liked Songs</p>
                <p className="hover:text-white cursor-pointer">My Playlist #1</p>
                <p className="hover:text-white cursor-pointer">Chill Beats</p>
            </div>
        </div>
    )
}

export default Sidebar;