import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const prompt = body.mode === "continue"
      ? `Continue this anime story:\n${body.previous_output}\nEpisode ${body.episode_number}`
      : `Create an anime with theme ${body.theme}, tone ${body.tone}, setting ${body.setting}. Include Episode 1.`;

    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        input: prompt,
      }),
    });

    const data = await response.json();

    const text =
      data?.output?.[0]?.content?.[0]?.text || "No response";

    return NextResponse.json({ result: text });
  } catch (err) {
    return NextResponse.json({ result: "Error" });
  }
}
