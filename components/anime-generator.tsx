"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Flame, Globe, User, Zap, Shirt, Skull, Film, Sparkles, Loader2 } from "lucide-react";

interface AnimeOutput {
  title: string;
  world: string;
  mainCharacter: {
    name: string;
    personality: string;
    goal: string;
    backstory: string;
  };
  abilities: {
    system: string;
    moves: string[];
  };
  outfit: string;
  villain: {
    name: string;
    personality: string;
    motivation: string;
    powers: string;
  };
  episode1: string;
}

const SAMPLE_ANIME: AnimeOutput = {
  title: "CRIMSON VEIL: SHADOWS OF THE ETERNAL NIGHT",
  world: `In the year 2847, humanity exists beneath a perpetual crimson sky — the result of the Scarlet Cataclysm that shattered the moon into fragments that now orbit Earth like bleeding wounds. The world is divided into three realms: the Surface Cities where survivors cling to life in massive bio-domes, the Underdark where mutated creatures and exiled criminals forge their own brutal society, and the Skylands — floating islands where the elite have escaped the chaos below.

The power system known as "Veil Arts" emerged from humanity's exposure to the moon's scattered essence. Each person possesses a unique Veil — a manifestation of their soul's deepest desire. Veils range from destructive combat abilities to subtle manipulation powers. The strength of one's Veil is determined by the purity of their conviction. Those who doubt themselves see their Veils shatter.

The Crimson Watch — an elite order of Veil warriors — maintains fragile peace between the realms. But whispers speak of an ancient entity stirring in the moon's core, waiting for the perfect vessel to complete its descent to Earth.`,
  mainCharacter: {
    name: "Kaito Ashford",
    personality: `Kaito carries himself with a quiet intensity that unnerves even seasoned warriors. On the surface, he appears cold and calculating — speaking only when necessary and rarely showing emotion. But beneath this hardened exterior lies a young man haunted by survivor's guilt and an overwhelming desire to protect those he's failed before.

He possesses an almost inhuman ability to remain calm under pressure, analyzing battle situations with terrifying precision. Yet when those he cares about are threatened, something darker awakens within him — a rage that even he cannot fully control. His rare smiles are genuine and warm, reserved only for children and the elderly who remind him of the family he lost.`,
    goal: "To find his missing sister, Yuki, who disappeared during the Night of Shattered Stars, and to destroy the entity responsible for the Scarlet Cataclysm before it can complete its awakening.",
    backstory: `Kaito was seven when the moon broke.

He remembers his mother's screaming as crimson light poured through their apartment windows. He remembers his father pushing him and Yuki into the basement shelter. He remembers the sound of their parents never coming back.

For three years, Kaito raised his younger sister alone in the ruins of Neo-Tokyo. He taught himself to fight, to steal, to survive. Yuki was his world — the only light in the endless red darkness. Then the Hollow Men came.

They took her. Left him for dead in an alley with three broken ribs and a promise carved into his chest: "THE VESSEL AWAKENS."

Now seventeen, Kaito has spent a decade hunting the Hollow Men across every realm. He joined the Crimson Watch not for justice, but for access — to their intelligence networks, their resources, their secrets. He trusts no one. Loves nothing.

Except the fading memory of his sister's laugh.`
  },
  abilities: {
    system: `Kaito's Veil manifests as "Null Eclipse" — the extremely rare ability to negate other Veils within a ten-meter radius. His eyes turn completely black when activated, and shadows seem to bend toward him as if drawn by gravity. This power makes him the ultimate anti-Veil combatant but comes at a terrible cost: each use drains his life force, causing his hair to slowly turn white from the roots.`,
    moves: [
      "VOID SEVERANCE — Kaito extends his palm and fires a concentrated beam of null energy that can slice through any Veil manifestation. The cut leaves a permanent scar that prevents the victim's Veil from regenerating in that area.",
      "SHADOW STEP: PHANTOM TRAIL — By briefly merging with his own shadow, Kaito can teleport up to thirty meters in any direction, leaving behind an afterimage that explodes in null energy when touched.",
      "ECLIPSE DOMAIN: ABSOLUTE ZERO — His ultimate technique. Kaito sacrifices three months of his lifespan to create a sphere of complete Veil nullification spanning fifty meters. Within this domain, all Veil users become ordinary humans. The sky above turns black, and all sound ceases.",
      "CRIMSON ECHO — A defensive counter-technique. When struck by a Veil attack, Kaito can absorb and redirect the energy back at his opponent with doubled force. His veins glow red during activation."
    ]
  },
  outfit: `Kaito wears the modified uniform of a Crimson Watch Shadow Operative: a form-fitting black tactical suit with reinforced graphene plating at vital points. The suit's surface absorbs light, making him nearly invisible in darkness.

Over this, he wears a long crimson coat that reaches his ankles — torn and battle-scarred from years of combat. The coat's interior is lined with void-silk, a material that enhances his null abilities. Silver clasps shaped like crescent moons hold the coat closed.

His hands are wrapped in black bandages that hide the scars from his Veil's backlash. On his left wrist, he wears a tarnished silver bracelet — the last gift from his sister.

His most distinctive feature is the mask he wears in combat: a pure white half-mask covering the upper portion of his face, with a single vertical crack running through the right eye. The mask was forged from a fragment of the shattered moon and resonates with his null powers.

Heavy combat boots with magnetic soles allow him to walk on walls and ceilings. A single katana with a void-black blade hangs at his left hip — the legendary "Twilight Fang" that drinks light itself.`,
  villain: {
    name: "The Architect — True Name: Seraph Voidborn",
    personality: `The Architect speaks in riddles wrapped in poetry, each word chosen with terrifying precision. They possess an otherworldly calm that never breaks, even when unleashing apocalyptic power. Their voice carries multiple harmonics, as if several beings speak through one mouth.

Unlike typical villains driven by rage or vengeance, the Architect approaches destruction with something resembling love — a parent's conviction that they know what's best for their children, even if the cure requires death.

They show genuine fondness for Kaito, often appearing to offer cryptic guidance rather than direct combat. This almost parental interest masks something darker: the Architect sees in Kaito the perfect vessel for their ultimate plan.`,
    motivation: `The Architect was once human — Dr. Elena Voidborn, the scientist who discovered the entity sleeping within Earth's moon. When she made contact, it didn't destroy her. It enlightened her.

She saw humanity's future: endless wars, environmental collapse, extinction within two centuries. The entity offered salvation — a fusion of human consciousness with its cosmic form, evolving humanity into something beyond flesh and suffering.

The Scarlet Cataclysm wasn't an attack. It was a birth announcement.

The Architect believes they are saving humanity by destroying it, reshaping survivors into beings of pure Veil energy. They need only one thing: a human host strong enough to contain the entity's full power during the final merger.

A host immune to Veils.

A host like Kaito.`,
    powers: `The Architect wields "Genesis Canvas" — the ability to reshape reality itself within a limited area. They can alter physical laws, reverse time locally, and create matter from pure Veil energy. Their form constantly shifts, sometimes appearing as a beautiful woman with constellation-marked skin, sometimes as a writhing mass of geometric shapes and screaming faces.`
  },
  episode1: `EPISODE 1: "THE WEIGHT OF CRIMSON SKIES"

The camera opens on darkness. Then, slowly, crimson light bleeds across the screen as a woman's voice speaks:

"They say the moon died the night the sky turned red. They're wrong. The moon didn't die. It woke up."

We pull back to reveal NEO-TOKYO SECTOR 7 — a massive bio-dome city built from the bones of old Tokyo. Rain streaks down the dome's surface, turning the crimson sky into rivers of blood-red light.

Inside a crowded street market, a hooded figure moves through the crowds. This is KAITO ASHFORD (17), his face hidden beneath his white cracked mask. He stops at a food stall, sliding payment across the counter.

STALL VENDOR: (nervous) "You're one of them, aren't you? Crimson Watch?"

KAITO: (flat voice) "Does it matter?"

VENDOR: (lowering voice) "They took my daughter last week. The Hollow Men. You hunt them, don't you? Please, I'll pay anything—"

Kaito's hand tightens on the counter, cracking the wood. For a moment, his eyes behind the mask flash with something — pain, rage, recognition.

KAITO: "Where did they take her?"

CUT TO: THE UNDERDARK — LEVEL 7

Kaito descends through a vertical shaft, using Shadow Step to teleport between platforms. The deeper he goes, the more twisted the environment becomes — walls covered in pulsing veins, air thick with the stench of decay.

He lands in a vast underground chamber where dozens of cages hang from the ceiling. Inside each cage: a child, unconscious, connected to tubes that drain something luminous from their bodies.

KAITO: (whispered) "Veil harvesting..."

VOICE: "Beautiful, isn't it? The essence of human potential, distilled to its purest form."

A figure emerges from the shadows — a HOLLOW MAN lieutenant, his body partially transformed, one arm replaced by writhing darkness.

HOLLOW MAN: "The Architect sends regards, Null Child. They've been watching you. They're so very proud."

KAITO: (drawing Twilight Fang) "Where is she? WHERE IS MY SISTER?"

HOLLOW MAN: (laughing) "Sister? Oh, poor broken thing. The vessel doesn't remember. YOUR sister completed her purpose years ago. She's everywhere now. In the sky. In the rain. In the crimson light that haunts your dreams."

Something breaks inside Kaito. His eyes go completely black. Shadows begin spiraling toward him, pulled by an invisible gravity.

KAITO: "You're lying."

HOLLOW MAN: "Am I? Look up, Null Child. LOOK AT THE SKY."

Against his will, Kaito's gaze rises toward the dome above. And for the first time, he sees what was always there — a pattern in the crimson clouds, a shape formed from moon fragments:

A young girl's face. Screaming. Forever.

KAITO: "...Yuki?"

HOLLOW MAN: "THE VESSEL AWAKENS."

The Hollow Man lunges. Kaito moves on pure instinct—

"VOID SEVERANCE!"

A beam of pure black energy tears through the chamber, bisecting the Hollow Man and three cages behind him. Children fall. Kaito catches two, but a third—

He's too slow.

The child hits the ground. Doesn't move.

Kaito stares at the small body, at the blood pooling beneath it, at his own hands that failed again, always failing, always too weak—

KAITO: "No. No, no, no—"

ARCHITECT'S VOICE: (echoing from everywhere) "You see now, don't you, my child? You cannot save them one by one. Not while you remain... incomplete."

Crimson light fills the chamber. A figure materializes — THE ARCHITECT, form constantly shifting, beautiful and terrible.

ARCHITECT: "Let me show you true salvation."

They reach toward Kaito's face—

SMASH CUT TO BLACK.

TITLE CARD: CRIMSON VEIL: SHADOWS OF THE ETERNAL NIGHT

POST-CREDITS SCENE:

A dark room. A girl sits alone, chains binding her to a throne made of moon fragments. Her eyes are hollow, vacant — but her lips move, repeating a single phrase:

GIRL: "Brother... run... brother... run... brother..."

Her eyes suddenly focus, filled with terror and desperate hope.

YUKI: "KAITO, DON'T TRUST THE—"

Static. Darkness.

END EPISODE 1

"THE HUNT BEGINS — NEXT TIME ON CRIMSON VEIL"`
};

export default function AnimeGenerator() {
  const [theme, setTheme] = useState("");
  const [tone, setTone] = useState("");
  const [setting, setSetting] = useState("");
  const [customRequest, setCustomRequest] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedAnime, setGeneratedAnime] = useState<AnimeOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    setIsGenerating(true);
    setError(null);
    
    try {
      const response = await fetch('/api/generate-anime', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ theme, tone, setting, customRequest }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to generate anime concept');
      }
      
      const data = await response.json();
      setGeneratedAnime(data.anime);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleReset = () => {
    setGeneratedAnime(null);
    setTheme("");
    setTone("");
    setSetting("");
    setCustomRequest("");
    setError(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
              <Flame className="h-4 w-4" />
              <span>Professional Anime Creator</span>
            </div>
            <h1 className="text-balance text-4xl font-black tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              <span className="text-primary">Anime</span>Forge
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl">
              Create cinematic anime concepts with powerful world-building, character design, and episode writing tools.
            </p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Input Form */}
        <Card className="mb-12 border-border bg-card">
          <CardContent className="p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Sparkles className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground">Create Your Anime</h2>
                <p className="text-sm text-muted-foreground">Fill in the details below to generate your concept</p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Theme</label>
                <Input
                  placeholder="e.g., Revenge, redemption, forbidden power"
                  value={theme}
                  onChange={(e) => setTheme(e.target.value)}
                  className="border-border bg-input text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Tone</label>
                <Input
                  placeholder="e.g., Dark, epic, emotional, action-packed"
                  value={tone}
                  onChange={(e) => setTone(e.target.value)}
                  className="border-border bg-input text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Setting</label>
                <Input
                  placeholder="e.g., Post-apocalyptic Tokyo, fantasy kingdom"
                  value={setting}
                  onChange={(e) => setSetting(e.target.value)}
                  className="border-border bg-input text-foreground placeholder:text-muted-foreground"
                />
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <label className="text-sm font-medium text-foreground">Custom Request (Optional)</label>
              <Textarea
                placeholder="Add any specific requirements, character ideas, or plot elements you want to include..."
                value={customRequest}
                onChange={(e) => setCustomRequest(e.target.value)}
                rows={3}
                className="border-border bg-input text-foreground placeholder:text-muted-foreground"
              />
            </div>

            <div className="mt-8 flex flex-col items-center gap-4">
              {error && (
                <p className="text-sm text-destructive">{error}</p>
              )}
              <Button
                size="lg"
                onClick={handleGenerate}
                disabled={isGenerating}
                className="gap-2 bg-primary px-8 text-primary-foreground hover:bg-primary/90"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Forging Your Anime...
                  </>
                ) : (
                  <>
                    <Flame className="h-5 w-5" />
                    Generate Anime Concept
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Generated Output */}
        {generatedAnime && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Generate Another Section */}
            <div className="flex flex-col items-center justify-center gap-4 rounded-lg border border-border bg-card p-6 sm:flex-row sm:justify-between">
              <div>
                <h3 className="text-lg font-bold text-foreground">Want a different concept?</h3>
                <p className="text-sm text-muted-foreground">Generate another anime with new or modified inputs</p>
              </div>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={handleReset}
                  className="gap-2 border-border text-foreground hover:bg-secondary"
                >
                  Start Fresh
                </Button>
                <Button
                  onClick={handleGenerate}
                  disabled={isGenerating}
                  className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4" />
                      Generate Another
                    </>
                  )}
                </Button>
              </div>
            </div>
            {/* Title */}
            <Card className="overflow-hidden border-primary/30 bg-card">
              <div className="bg-primary/10 px-6 py-4">
                <div className="flex items-center gap-3">
                  <Flame className="h-6 w-6 text-primary" />
                  <span className="text-sm font-medium uppercase tracking-wider text-primary">Title</span>
                </div>
              </div>
              <CardContent className="p-6">
                <h2 className="text-2xl font-black tracking-wide text-foreground sm:text-3xl lg:text-4xl">
                  {generatedAnime.title}
                </h2>
              </CardContent>
            </Card>

            {/* World */}
            <Card className="border-border bg-card">
              <div className="bg-secondary px-6 py-4">
                <div className="flex items-center gap-3">
                  <Globe className="h-6 w-6 text-accent" />
                  <span className="text-sm font-medium uppercase tracking-wider text-accent">World</span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="whitespace-pre-line text-foreground leading-relaxed">
                  {generatedAnime.world}
                </div>
              </CardContent>
            </Card>

            {/* Main Character */}
            <Card className="border-border bg-card">
              <div className="bg-secondary px-6 py-4">
                <div className="flex items-center gap-3">
                  <User className="h-6 w-6 text-primary" />
                  <span className="text-sm font-medium uppercase tracking-wider text-primary">Main Character</span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="mb-4 text-2xl font-bold text-primary">{generatedAnime.mainCharacter.name}</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="mb-2 font-semibold text-foreground">Personality</h4>
                    <p className="whitespace-pre-line text-muted-foreground leading-relaxed">
                      {generatedAnime.mainCharacter.personality}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="mb-2 font-semibold text-foreground">Goal</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {generatedAnime.mainCharacter.goal}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="mb-2 font-semibold text-foreground">Backstory</h4>
                    <p className="whitespace-pre-line text-muted-foreground leading-relaxed">
                      {generatedAnime.mainCharacter.backstory}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Abilities */}
            <Card className="border-border bg-card">
              <div className="bg-secondary px-6 py-4">
                <div className="flex items-center gap-3">
                  <Zap className="h-6 w-6 text-chart-4" />
                  <span className="text-sm font-medium uppercase tracking-wider text-chart-4">Abilities</span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="mb-6">
                  <h4 className="mb-2 font-semibold text-foreground">Power System</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {generatedAnime.abilities.system}
                  </p>
                </div>
                
                <div>
                  <h4 className="mb-4 font-semibold text-foreground">Special Moves</h4>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {generatedAnime.abilities.moves.map((move, index) => (
                      <div
                        key={index}
                        className="rounded-lg border border-border bg-muted/50 p-4"
                      >
                        <p className="text-sm text-foreground leading-relaxed">{move}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Outfit */}
            <Card className="border-border bg-card">
              <div className="bg-secondary px-6 py-4">
                <div className="flex items-center gap-3">
                  <Shirt className="h-6 w-6 text-chart-5" />
                  <span className="text-sm font-medium uppercase tracking-wider text-chart-5">Outfit Design</span>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="whitespace-pre-line text-foreground leading-relaxed">
                  {generatedAnime.outfit}
                </p>
              </CardContent>
            </Card>

            {/* Villain */}
            <Card className="border-destructive/30 bg-card">
              <div className="bg-destructive/10 px-6 py-4">
                <div className="flex items-center gap-3">
                  <Skull className="h-6 w-6 text-destructive" />
                  <span className="text-sm font-medium uppercase tracking-wider text-destructive">Villain</span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="mb-4 text-2xl font-bold text-destructive">{generatedAnime.villain.name}</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="mb-2 font-semibold text-foreground">Personality</h4>
                    <p className="whitespace-pre-line text-muted-foreground leading-relaxed">
                      {generatedAnime.villain.personality}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="mb-2 font-semibold text-foreground">Motivation</h4>
                    <p className="whitespace-pre-line text-muted-foreground leading-relaxed">
                      {generatedAnime.villain.motivation}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="mb-2 font-semibold text-foreground">Powers</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {generatedAnime.villain.powers}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Episode 1 */}
            <Card className="border-accent/30 bg-card">
              <div className="bg-accent/10 px-6 py-4">
                <div className="flex items-center gap-3">
                  <Film className="h-6 w-6 text-accent" />
                  <span className="text-sm font-medium uppercase tracking-wider text-accent">Episode 1</span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="whitespace-pre-line font-mono text-sm text-foreground leading-relaxed sm:text-base">
                  {generatedAnime.episode1}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50">
        <div className="mx-auto max-w-7xl px-4 py-8 text-center sm:px-6 lg:px-8">
          <p className="text-sm text-muted-foreground">
            AnimeForge — Create cinematic anime concepts with professional quality
          </p>
        </div>
      </footer>
    </div>
  );
}
