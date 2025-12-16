import { createContext, useContext, useRef, useState } from "react";
import { songs } from "../data/songs";

const PlayerContext=createContext();

export function PlayerProvider({children}){
    const audioRef = useRef(new Audio());
    const [currentSong,setCurrentSong]= useState(songs[0]);
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <PlayerContext.Provider
            value={{
                audioRef,
                currentSong,
                setCurrentSong,
                isPlaying,
                setIsPlaying,
                setIsPlaying,
            }}
        >
            {children}
        </PlayerContext.Provider>
    );
}
export function usePlayer() {
    return useContext(PlayerContext);
}