import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { mode, theme, tone, setting, previous_output, episode_number } = await req.json();

  let prompt = "";

  if (mode === "continue") {
    prompt = `
Continue this anime story:

${previous_output}

Episode ${episode_number}

Continue the story, do NOT restart.
`;
  } else {
    prompt = `
Create an anime:

Theme: ${theme}
Tone: ${tone}
Setting: ${setting}

Include:
- Title
- Characters
- Powers
- Episode 1
`;
  }

  const res = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-4.1-mini",
      input: prompt
    })
  });

  const data = await res.json();

  return NextResponse.json({
    result: data.output[0].content[0].text
  });
}
