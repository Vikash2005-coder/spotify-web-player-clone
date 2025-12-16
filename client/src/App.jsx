import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Player from "./components/Player";
function App() {
  return (
    <div className="h-screen overflow-hidden bg-black">
      {/* Top Section */}
      <div className="flex h-[calc(100vh-80px)]">
        <Sidebar/>
        {/* Main Content Scrolls */}
        <div className="flex-1 bg-spotifyGray overflow-y-auto px-6 py-4">
          <Home />
        </div>
      </div>

      {/* Bottom Player */}
      <Player />
            
    </div>
  )
}

export default App;
