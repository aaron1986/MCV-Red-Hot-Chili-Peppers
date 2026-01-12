import { useEffect, useMemo, useState } from "react";
import { fetchMusic } from "../Controllers/music.controller.js";
import MusicView from "../Views/MusicView.jsx";

export default function MusicPage({ searchTerm }) {
  const [music, setMusic] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMusic() {
      setLoading(true);

      const { music, error } = await fetchMusic();

      if (error) setError(error);
      else setMusic(music);

      setLoading(false);
    }

    loadMusic();
  }, []);

  const filteredMusic = useMemo(() => {
    if (!searchTerm) return music;

    const term = searchTerm.toLowerCase();

    return music.filter(item => {
      const searchableText = `
        ${item.title}
        ${item.release_type.replace("_", " ")}
        ${item.year_released}
      `.toLowerCase();

      return searchableText.includes(term);
    });
  }, [music, searchTerm]);

  if (loading) return <p>Loading music…</p>;

  return (
    <MusicView
      music={filteredMusic}
      error={error}
    />
  );
}
