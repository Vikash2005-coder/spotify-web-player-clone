import { NavLink } from "react-router-dom";
import { Home, Search, Library } from "lucide-react";

function Sidebar() {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-4 px-3 py-2 rounded-md cursor-pointer
     ${isActive ? "bg-[#282828] text-white" : "text-gray-400 hover:text-white"}`;

  return (
    <div className="w-60 bg-black p-5 flex flex-col gap-6">

      <h1 className="text-2xl font-bold text-white">Spotify</h1>

      <nav className="flex flex-col gap-2">
        <NavLink to="/" className={linkClass}>
          <Home size={20} />
          <span>Home</span>
        </NavLink>

        <NavLink to="/search" className={linkClass}>
          <Search size={20} />
          <span>Search</span>
        </NavLink>

        <NavLink to="/library" className={linkClass}>
          <Library size={20} />
          <span>Your Library</span>
        </NavLink>
      </nav>

      <div className="border-t border-gray-700 pt-4 text-sm text-gray-400">
        <NavLink to="/liked" className={linkClass}>
          ❤️ Liked Songs
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
