import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Library from "./pages/Library";
import Playlist from "./pages/Playlist";
import Liked from "./pages/Liked";

function App() {
  return (
    <BrowserRouter>
      <div className="h-screen overflow-hidden bg-black">

        {/* Top Section */}
        <div className="flex h-[calc(100vh-80px)]">
          <Sidebar />

          {/* Main Content (changes with route) */}
          <div className="flex-1 bg-spotifyGray overflow-y-auto px-6 py-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/library" element={<Library />} />
              <Route path="/liked" element={<Liked />} />
              <Route path="/playlist/:id" element={<Playlist />} />
            </Routes>
          </div>
        </div>

        {/* Bottom Player (always visible) */}
        <Player />

      </div>
    </BrowserRouter>
  );
}

export default App;
