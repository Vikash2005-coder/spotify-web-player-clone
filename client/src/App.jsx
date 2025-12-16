import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from "./components/Sidebar"
function App() {
  return (
    <div className="h-screen flex">
      <Sidebar/>

      {/* Main Content */}
      <div className="flex-1 bg-spotifyGray p-4">
        Main Content
      </div>
    </div>
  )
}

export default App;
