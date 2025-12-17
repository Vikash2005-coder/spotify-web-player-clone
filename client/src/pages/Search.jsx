import { useState } from "react";
import { songs } from "../data/songs"
import SongRow from "../components/SongRow"

function Search(){
    const [query,setQuery]=useState("");

    const filteredSongs=songs.filter((song) =>
        song.title.toLowerCase().includes(query.toLowerCase()) ||
        song.artist.toLowerCase().includes(query.toLowerCase()) ||
        song.language.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="space-y-6">

            {/* Search Input */}
            <div>
                <input 
                    type="text"
                    placeholder="What do you want to listen to??"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full p-3 rounded-md bg-[#2a2a2a] text-white outline-none placeholder-gray-400 focus:ring-2 focus:ring-green-500"
                />
            </div>

            {/* Results */}
            <div>
                <h2 className="text-lg font-semibold mb-3">
                    {query? "Search Results": "Browse All"}
                </h2>

                {filteredSongs.length>0? (
                    <div className="space-y-1">
                        {filteredSongs.map((song,index)=>(
                            <SongRow 
                                key={song.id}
                                song={song}
                                index={index}
                            />
                        ))}
                    </div>
                ):(
                    <p className="text-gray-400">No Songs found</p>
                )}
            </div>
        </div>
    )
}

export default Search;