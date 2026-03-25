"use client";
import { useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState("");
  const [tone, setTone] = useState("");
  const [setting, setSetting] = useState("");
  const [story, setStory] = useState("");
  const [episode, setEpisode] = useState(1);

  const generateAnime = async () => {
    const res = await fetch("/api/generate", {
      method: "POST",
      body: JSON.stringify({
        mode: "generate",
        theme,
        tone,
        setting,
      }),
    });

    const data = await res.json();
    setStory(data.result);
    setEpisode(1);
  };

  const nextEpisode = async () => {
    const res = await fetch("/api/generate", {
      method: "POST",
      body: JSON.stringify({
        mode: "continue",
        previous_output: story,
        episode_number: episode + 1,
      }),
    });

    const data = await res.json();
    setStory((prev) => prev + "\n\n" + data.result);
    setEpisode((prev) => prev + 1);
  };

  return (
    <div style={{ padding: 20, color: "white", background: "#0f0f0f", minHeight: "100vh" }}>
      <h1>🔥 AnimeForge</h1>

      <input placeholder="Theme" onChange={(e) => setTheme(e.target.value)} /><br /><br />
      <input placeholder="Tone" onChange={(e) => setTone(e.target.value)} /><br /><br />
      <input placeholder="Setting" onChange={(e) => setSetting(e.target.value)} /><br /><br />

      <button onClick={generateAnime}>Generate Anime</button>
      <button onClick={nextEpisode} style={{ marginLeft: 10 }}>
        Next Episode ➡️
      </button>

      <pre style={{ marginTop: 20, whiteSpace: "pre-wrap" }}>
        {story}
      </pre>
    </div>
  );
}
