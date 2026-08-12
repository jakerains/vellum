import Image from "next/image";
import logoMark from "../public/logo-mark.png";
import Nav from "./components/Nav";
import Eyebrow from "./components/Eyebrow";
import CopyButton from "./components/CopyButton";
import ReviewFrame from "./components/ReviewFrame";
import PromoVideo from "./components/PromoVideo";

const GITHUB = "https://github.com/jakerains/vellum";
const HYPERFRAMES = "https://hyperframes.heygen.com";
const CHANGELOG =
  "https://github.com/jakerains/vellum/blob/main/CHANGELOG.md";

const SAMPLE_NOTES = [
  {
    id: "note-1",
    time: "0:02.40",
    scene: "title",
    body: "Hold this a beat longer before the crossfade",
    coords: "pin 50.0%, 41.2%",
  },
  {
    id: "note-2",
    time: "0:08.10",
    scene: "features",
    body: "“Reliable” lands late — bring this card in 0.5s earlier",
    coords: "pin 74.6%, 52.3%",
  },
  {
    id: "note-3",
    time: "0:13.90",
    scene: "stat",
    body: "make this number count up instead of fading in",
    coords: "box 24.1 × 30.0%",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Review",
    body: "Open the player, scrub to the moment, drop a pin or drag a region note onto the frame.",
  },
  {
    n: "02",
    title: "Persist",
    body: "Notes land in notes/annotations.md — plus structured JSON and optional mix levels.",
  },
  {
    n: "03",
    title: "Hand off",
    body: "Tell your agent: “Address my Vellum review notes.” It reads, edits, and verifies.",
  },
];

const FACTS = [
  {
    label: "LOCAL-ONLY",
    body: "Binds 127.0.0.1. No CORS, path-traversal guards on the notes API.",
  },
  {
    label: "ZERO DEPENDENCIES",
    body: "Pure Node built-ins. The player uses your project’s HyperFrames runtime.",
  },
  {
    label: "NON-DESTRUCTIVE",
    body: "Never modifies your composition — iframe plus a transparent pin overlay.",
  },
  {
    label: "NO CONFIG",
    body: "Works on any HyperFrames project. Scenes come from data-start attributes.",
  },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top" className="relative">
        {/* Left timeline rule (desktop) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-8 hidden w-px bg-line lg:block xl:left-[max(2rem,calc(50%-34rem))]"
        />

        {/* ───────────────────────── HERO ───────────────────────── */}
        <section className="relative mx-auto max-w-6xl px-5 pb-20 pt-20 sm:px-8 sm:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            {/* Logo mark with the one-and-only gradient glow */}
            <div className="relative mx-auto mb-8 flex h-24 w-24 items-center justify-center">
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 rounded-full bg-[radial-gradient(circle,rgba(96,165,250,0.45),rgba(167,139,250,0.30)_45%,transparent_72%)] blur-2xl"
              />
              <Image
                src={logoMark}
                alt="Vellum"
                width={88}
                height={88}
                priority
                className="h-20 w-20"
              />
            </div>

            <h1 className="font-display text-5xl leading-[1.05] tracking-tight text-text sm:text-6xl md:text-7xl">
              You see the problem.
              <br />
              <span className="italic text-muted">Your agent can&rsquo;t.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Vellum is a visual feedback interface for AI-edited video. Pin
              time-coded notes onto any HyperFrames frame &mdash; your coding
              agent reads them back and makes the edits.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4">
              <CopyButton />
              <a
                href={GITHUB}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-sm text-muted transition-colors hover:text-accent"
              >
                Star on GitHub &rarr;
              </a>
            </div>
          </div>

          {/* Signature element */}
          <div className="mx-auto mt-16 max-w-3xl">
            <ReviewFrame />
          </div>
        </section>

        {/* ─────────────────────── DEMO ─────────────────────── */}
        {/* A light "manuscript" sheet inset on the dark page — the dark demo
            video reads as the one focal object, echoing the light promo cut. */}
        <section
          id="demo"
          className="mx-auto max-w-6xl scroll-mt-20 border-t border-line px-5 py-20 sm:px-8 sm:py-28"
        >
          <div className="relative overflow-hidden rounded-3xl bg-paper px-6 py-12 shadow-[0_50px_140px_-50px_rgba(0,0,0,0.75)] sm:px-12 sm:py-16">
            <div className="flex justify-center sm:justify-start">
              <Eyebrow time="0:00" label="Watch" tone="light" />
            </div>
            <h2 className="mt-5 max-w-2xl font-display text-3xl leading-tight tracking-tight text-paper-ink sm:text-4xl md:text-5xl">
              See the whole loop in{" "}
              <span className="italic">fifty seconds</span>.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-paper-muted">
              Spot the flaw, pin it to the exact frame, type the note, and hand
              it to your agent &mdash; then watch it land the fix. The same
              review loop, start to finish.
            </p>
            <div className="mx-auto mt-10 max-w-5xl">
              <PromoVideo />
            </div>
          </div>
        </section>

        {/* ─────────────────────── HOW IT WORKS ─────────────────────── */}
        <section
          id="how"
          className="mx-auto max-w-6xl scroll-mt-20 border-t border-line px-5 py-20 sm:px-8 sm:py-28"
        >
          <Eyebrow time="0:07" label="Persist" />
          <h2 className="mt-5 max-w-2xl font-display text-3xl leading-tight tracking-tight text-text sm:text-4xl md:text-5xl">
            You spot it instantly. Vellum keeps{" "}
            <span className="italic">where</span> and{" "}
            <span className="italic">when</span>.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
            Typed into a chat box, feedback loses where on the frame and when in
            the timeline. Vellum records composition time, the element under
            your cursor, and pin coordinates &mdash; then writes files your
            agent reads.
          </p>

          {/* Horizontal flow */}
          <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
            {STEPS.map((step) => (
              <li key={step.n} className="bg-panel p-6 sm:p-7">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-accent">
                    {step.n}
                  </span>
                  <h3 className="font-display text-2xl text-text">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>

          {/* Real annotations.md sample */}
          <div className="mt-10 overflow-hidden rounded-2xl border border-line bg-[#0e0e12]">
            <div className="flex items-center gap-2 border-b border-line px-5 py-3 font-mono text-[11px] uppercase tracking-wider text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent/70" />
              notes/annotations.md
            </div>
            <div className="space-y-2 overflow-x-auto px-5 py-5 font-mono text-[11px] leading-relaxed text-muted sm:text-xs">
              {SAMPLE_NOTES.map((note) => (
                <p key={note.id} className="sm:whitespace-nowrap">
                  <span className="text-text/40">- </span>
                  <span className="text-accent">{note.id}</span>
                  <span className="text-text/40"> · </span>
                  <span className="text-text">{note.time}</span>{" "}
                  <span className="text-[#A78BFA]">`{note.scene}`</span>
                  <span className="text-text/40"> — </span>
                  <span className="text-text/80">{note.body}</span>{" "}
                  <span className="text-muted/60 italic">({note.coords})</span>
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────────────── AGENT HANDOFF ─────────────────────── */}
        <section
          id="handoff"
          className="mx-auto max-w-6xl scroll-mt-20 border-t border-line px-5 py-20 sm:px-8 sm:py-28"
        >
          <Eyebrow time="0:14" label="Handoff" />
          <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Prose */}
            <div>
              <h2 className="font-display text-3xl leading-tight tracking-tight text-text sm:text-4xl md:text-5xl">
                Your agent reads what{" "}
                <span className="italic">you saw</span>.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                Every pin becomes a line in{" "}
                <span className="font-mono text-sm text-text">
                  notes/annotations.md
                </span>{" "}
                &mdash; time, scene, coordinates, target element, and your
                feedback. When you&rsquo;re done reviewing, the agent:
              </p>
              <ol className="mt-6 space-y-4">
                {[
                  "Reads notes/annotations.md — each note links time, scene, and DOM target.",
                  "Optionally runs vellum-review to render each frame with the pins drawn on.",
                  "Edits the composition, snapshots to verify, and reports back note by note.",
                ].map((line, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed">
                    <span className="mt-0.5 font-mono text-xs text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-muted">{line}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-6 text-sm leading-relaxed text-muted">
                Works with any agent that reads files. Vellum ships a Claude
                Code skill, so the handoff is one prompt away.
              </p>
            </div>

            {/* Terminal */}
            <div className="overflow-hidden rounded-2xl border border-line bg-[#0e0e12]">
              <div className="flex items-center gap-2 border-b border-line px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="ml-2 font-mono text-[11px] text-muted">
                  claude code
                </span>
              </div>
              <div className="space-y-4 px-5 py-5 font-mono text-[12px] leading-relaxed sm:text-[13px]">
                <p className="text-text">
                  <span className="text-accent">&rsaquo;</span> Address my Vellum
                  review notes.
                </p>
                <div className="space-y-2 text-muted">
                  <p>
                    <span className="text-accent">●</span> Read{" "}
                    <span className="text-text">notes/annotations.md</span>
                    {" — 3 notes."}
                  </p>
                  <p className="pl-4">
                    note-1 &middot; held the title 0.4s before the crossfade
                  </p>
                  <p className="pl-4">
                    note-2 &middot; brought the &ldquo;Reliable&rdquo; card in
                    0.5s earlier
                  </p>
                  <p className="pl-4">
                    note-3 &middot; switched the stat to a count-up
                  </p>
                  <p className="text-accent">✓ 3/3 addressed. Snapshotted to verify.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────── UNDER THE HOOD ─────────────────────── */}
        <section className="mx-auto max-w-6xl border-t border-line px-5 py-16 sm:px-8 sm:py-20">
          <Eyebrow time="0:18" label="Under the hood" />
          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {FACTS.map((fact) => (
              <div key={fact.label} className="bg-panel p-6">
                <div className="font-mono text-[11px] tracking-wider text-accent">
                  {fact.label}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {fact.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ─────────────────────── INSTALL ─────────────────────── */}
        <section
          id="install"
          className="mx-auto max-w-6xl scroll-mt-20 border-t border-line px-5 py-24 text-center sm:px-8 sm:py-32"
        >
          <div className="mx-auto max-w-2xl">
            <div className="flex justify-center">
              <Eyebrow time="0:21" label="Install" />
            </div>
            <h2 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight text-text sm:text-6xl">
              Pin your <span className="italic">first note</span>.
            </h2>
            <div className="mt-10 flex flex-col items-center gap-4">
              <CopyButton />
              <p className="font-mono text-[11px] text-muted">
                or{" "}
                <code className="select-all text-text/80">
                  npm i -g vellum-hf
                </code>
              </p>
              <p className="font-mono text-[11px] text-muted">
                Requires a HyperFrames project and Node &ge; 18.
              </p>
              <a
                href={GITHUB}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-sm text-muted transition-colors hover:text-accent"
              >
                Other install paths &mdash; npm, clone, shadcn registry &rarr;
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ─────────────────────── FOOTER ─────────────────────── */}
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row sm:px-8">
          <div className="flex items-center gap-3">
            <Image
              src={logoMark}
              alt=""
              width={20}
              height={20}
              className="h-5 w-5"
            />
            <span className="font-mono text-xs text-muted">
              MIT &copy; Jake Rains
            </span>
          </div>
          <div className="flex items-center gap-6 font-mono text-xs text-muted">
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-text"
            >
              GitHub
            </a>
            <a
              href={HYPERFRAMES}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-text"
            >
              HyperFrames
            </a>
            <a
              href={CHANGELOG}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-text"
            >
              Changelog
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
