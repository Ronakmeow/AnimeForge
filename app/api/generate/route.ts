import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { mode, theme, tone, setting, previous_output, user_input, episode_number } = await req.json();

  let prompt = "";

  if (mode === "continue") {
    prompt = `
You are continuing an anime story.

PREVIOUS STORY:
${previous_output}

EPISODE: ${episode_number}

Continue the story with cinematic narration, action, and dialogue.
Do not restart. Keep everything consistent.
`;
  } else if (mode === "modify") {
    prompt = `
You are improving an anime.

CURRENT ANIME:
${previous_output}

USER REQUEST:
${user_input}

Apply the changes while keeping everything consistent.
Return full updated anime.
`;
  } else {
    prompt = `
You are a professional anime creator.

Theme: ${theme}
Tone: ${tone}
Setting: ${setting}

Create a full anime with:

Title
World
Main Character
Abilities
Outfit Design
Villain
Episode 1 (cinematic with dialogue and cliffhanger)
`;
  }

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.9,
    }),
  });

  const data = await response.json();

  return NextResponse.json({
    result: data.choices[0].message.content,
  });
}
