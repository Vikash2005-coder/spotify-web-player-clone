import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
function App() {
  return (
    <div className="h-screen flex">
      <Sidebar/>

      <div className="flex-1 bg-spotifyGray p-6 overflow-y-auto">
        <Home />
      </div>
    </div>
  )
}

export default App;
