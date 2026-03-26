"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [lastEpisode, setLastEpisode] = useState("");

  // Load last episode from browser memory
  useEffect(() => {
    const saved = localStorage.getItem("lastEpisode");
    if (saved) setLastEpisode(saved);
  }, []);

  const continueStory = () => {
    if (lastEpisode) {
      router.push(`/story/${lastEpisode}`); // go to last episode
    } else {
      router.push("/story/ep-1"); // start from beginning
    }
  };

  return (
    <main style={{ padding: "20px" }}>
      <h1>Welcome to AnimeForge</h1>
      <button onClick={continueStory}>Continue Story</button>
      <button
        onClick={() => router.push("/story/ep-1")}
        style={{ marginLeft: "10px" }}
      >
        Start New Story
      </button>
    </main>
  );
}
