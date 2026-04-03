"use client";

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

export default function Episode() {
  const params = useParams();
  const ep = params.ep as string;
  const router = useRouter();

  useEffect(() => {
    if (ep) {
      localStorage.setItem("lastEpisode", ep);
    }
  }, [ep]);

  const epNumber = parseInt(ep?.split("-")[1]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>{ep}</h2>
      <p>This is the story for {ep}...</p>

      <div style={{ marginTop: "20px" }}>
        {epNumber > 1 && (
          <button onClick={() => router.push(`/story/ep-${epNumber - 1}`)}>
            Previous
          </button>
        )}

        <button
          onClick={() => router.push(`/story/ep-${epNumber + 1}`)}
          style={{ marginLeft: "10px" }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
