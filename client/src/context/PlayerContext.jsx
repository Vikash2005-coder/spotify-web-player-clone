import { createContext, useContext, useRef, useState } from "react";
import { songs } from "../data/songs";

const PlayerContext=createContext();

export function PlayerProvider({children}){
    const audioRef = useRef(new Audio());
    const [currentIndex,setCurrentIndex]=useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const currentSong=songs[currentIndex];

    const nextSong = () =>{
        setCurrentIndex((prev) => (prev+1)%songs.length);
        setIsPlaying(true);
    }
    const prevSong = () =>{
        setCurrentIndex((prev) =>
        prev===0?songs.length-1:prev-1);
        setIsPlaying(true);
    }
    return (
        <PlayerContext.Provider
            value={{
                audioRef,
                songs,
                currentIndex,
                currentSong,
                setCurrentIndex,
                isPlaying,
                setIsPlaying,
                setIsPlaying,
                nextSong,
                prevSong,
            }}
        >
            {children}
        </PlayerContext.Provider>
    );
}
export function usePlayer() {
    return useContext(PlayerContext);
}