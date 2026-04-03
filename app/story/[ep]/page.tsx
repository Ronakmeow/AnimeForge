"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Episode() {
  const params = useParams();
  const ep = params.ep as string;
  const router = useRouter();

  useEffect(() => {
    if (ep) localStorage.setItem("lastEpisode", ep);
  }, [ep]);

  const num = parseInt(ep.split("-")[1]);

  return (
    <div>
      <h1>{ep}</h1>
      <button onClick={() => router.push(`/story/ep-${num - 1}`)}>
        Previous
      </button>
      <button onClick={() => router.push(`/story/ep-${num + 1}`)}>
        Next
      </button>
    </div>
  );
}
