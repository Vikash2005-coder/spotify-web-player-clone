import { useParams } from "react-router-dom";

function Playlist() {
  const { id } = useParams();
  return <h1 className="text-2xl font-bold">Playlist {id}</h1>;
}

export default Playlist;
