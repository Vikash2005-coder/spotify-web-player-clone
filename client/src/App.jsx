import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="h-screen flex">
      {/* SideBar */}
      <div className="w-60 bg-black p-4">
        Sidebar
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-spotifyGray p-4">
        Main Content
      </div>
    </div>
  )
}

export default App
