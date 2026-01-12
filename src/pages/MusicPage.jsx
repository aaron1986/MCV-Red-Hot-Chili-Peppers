import { useEffect, useState } from "react";
import { fetchMusic } from "../Controllers/music.controller.js";
import MusicView from "../Views/MusicView.jsx";

export default function MusicPage() {
  const [music, setMusic] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMusic().then(({ music, error }) => {
      setMusic(music);
      setError(error);
    });
  }, []);

  return <MusicView music={music} error={error} />;
}
