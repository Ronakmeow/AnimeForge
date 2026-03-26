"use client";

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

export default function Episode() {
  const params = useParams();
  const ep = params.ep; // ep-1, ep-2, etc.
  const router = useRouter();

  // Save last episode so Continue Story works
  useEffect(() => {
    localStorage.setItem("lastEpisode", ep);
  }, [ep]);

  // Example story content
  const stories: Record<string, string> = {
    "ep-1": "Episode 1: Our adventure begins...",
    "ep-2": "Episode 2: Things are getting intense!",
    "ep-3": "Episode 3: The plot thickens!"
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>{ep}</h2>
      <p>{stories[ep] || "This episode is coming soon!"}</p>

      <div style={{ marginTop: "20px" }}>
        {parseInt(ep.split("-")[1]) > 1 && (
          <button
            onClick={() =>
              router.push(`/story/ep-${parseInt(ep.split("-")[1]) - 1}`)
            }
          >
            Previous
          </button>
        )}
        <button
          onClick={() =>
            router.push(`/story/ep-${parseInt(ep.split("-")[1]) + 1}`)
          }
          style={{ marginLeft: "10px" }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
