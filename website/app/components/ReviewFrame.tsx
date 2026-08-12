"use client";

import { useState } from "react";

type Pin = {
  id: number;
  label: string;
  note: string;
  /** position of the pin marker, in % of the frame */
  x: number;
  y: number;
};

const PINS: Pin[] = [
  {
    id: 1,
    label: "Pin 1 on the Flexible card",
    note: "this card feels heavier than the others — tighten the padding",
    x: 50,
    y: 30,
  },
  {
    id: 2,
    label: "Pin 2 on the Fast card",
    note: "make this headline a touch bigger",
    x: 19.5,
    y: 36,
  },
];

const CARDS = [
  {
    key: "fast",
    title: "Fast",
    body: "Iterate in seconds, not days. Preview every change instantly.",
  },
  {
    key: "flexible",
    title: "Flexible",
    body: "Compose anything. Bring your own components and data.",
  },
  {
    key: "reliable",
    title: "Reliable",
    body: "Deterministic output you can render and trust, every time.",
  },
];

const ANNOTATIONS = [
  {
    id: 1,
    time: "0:08.10",
    scene: "features",
    text: "this card feels heavier than the others — tighten the padding",
    coords: "(pin 50.0%, 30.0%)",
  },
  {
    id: 2,
    time: "0:08.40",
    scene: "features",
    text: "make this headline a touch bigger",
    coords: "(pin 19.5%, 36.0%)",
  },
];

export default function ReviewFrame() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="w-full">
      {/* Composition frame */}
      <div className="overflow-hidden rounded-t-2xl border border-line bg-panel">
        <div className="relative aspect-video w-full bg-[radial-gradient(120%_90%_at_50%_-10%,rgba(96,165,250,0.10),transparent_55%),radial-gradient(110%_80%_at_70%_120%,rgba(167,139,250,0.10),transparent_50%)]">
          {/* Cards */}
          <div className="absolute inset-0 grid grid-cols-3 gap-2 p-4 sm:gap-4 sm:p-7">
            {CARDS.map((card) => {
              const isFlexible = card.key === "flexible";
              const isFast = card.key === "fast";
              const lit =
                (active === 1 && isFlexible) || (active === 2 && isFast);
              return (
                <div
                  key={card.key}
                  className={`relative flex flex-col justify-center rounded-xl border bg-white/[0.02] p-3 transition-colors sm:p-5 ${
                    lit ? "border-accent/70" : "border-line"
                  }`}
                >
                  <div className="mb-2 h-6 w-6 rounded-md bg-gradient-to-br from-glow-blue to-glow-violet sm:mb-4 sm:h-8 sm:w-8" />
                  <h3
                    className={`font-display text-base leading-tight sm:text-2xl ${
                      active === 2 && isFast ? "text-accent" : "text-text"
                    }`}
                  >
                    {card.title}
                  </h3>
                  <p className="mt-1 hidden text-[11px] leading-snug text-muted sm:block sm:text-xs">
                    {card.body}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Region outline for pin 1 (Flexible card) */}
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute rounded-lg border-2 transition-opacity duration-200 ${
              active === 1 ? "border-accent opacity-100" : "border-accent/0 opacity-0"
            }`}
            style={{ left: "34.5%", top: "11%", width: "31%", height: "78%" }}
          />

          {/* Pins */}
          {PINS.map((pin) => {
            const isActive = active === pin.id;
            return (
              <button
                key={pin.id}
                type="button"
                aria-label={`${pin.label}: ${pin.note}`}
                aria-pressed={isActive}
                onMouseEnter={() => setActive(pin.id)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(pin.id)}
                onBlur={() => setActive(null)}
                onClick={() => setActive(isActive ? null : pin.id)}
                className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
              >
                <span
                  className={`flex h-6 w-6 items-center justify-center rounded-full border border-accent/60 bg-ink/90 font-mono text-[11px] text-accent transition-transform ${
                    isActive ? "scale-110" : "pin-pulse"
                  }`}
                >
                  {pin.id}
                </span>
                {isActive && (
                  <span className="absolute left-1/2 top-[calc(100%+8px)] z-30 w-44 -translate-x-1/2 rounded-lg border border-line bg-ink/95 px-3 py-2 text-left text-[11px] leading-snug text-text shadow-xl sm:text-xs">
                    {pin.note}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Transport bar */}
        <div className="flex items-center gap-3 border-t border-line bg-ink/40 px-3 py-2.5 sm:gap-4 sm:px-4">
          <span className="font-mono text-[10px] tracking-[0.2em] text-muted">
            VELLUM
          </span>
          <span
            aria-hidden="true"
            className="flex h-6 w-6 items-center justify-center rounded-full border border-line text-text"
          >
            <svg width="9" height="9" viewBox="0 0 10 12" fill="currentColor">
              <path d="M0 0v12l10-6z" />
            </svg>
          </span>
          {/* Scrubber */}
          <div
            aria-hidden="true"
            className="relative h-1 flex-1 rounded-full bg-white/10"
          >
            <div className="absolute inset-y-0 left-0 w-2/5 rounded-full bg-accent/70" />
            {/* scene tick markers */}
            {[18, 40, 67, 88].map((t) => (
              <span
                key={t}
                className="absolute top-1/2 h-2 w-px -translate-y-1/2 bg-white/25"
                style={{ left: `${t}%` }}
              />
            ))}
            <span className="absolute left-2/5 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
          </div>
          <span className="hidden font-mono text-[11px] text-muted sm:inline">
            0:08.40 / 0:21.00
          </span>
          <span className="font-mono text-[11px] text-accent">features</span>
        </div>
      </div>

      {/* annotations.md snippet linked to the pins */}
      <div className="rounded-b-2xl border border-t-0 border-line bg-[#0e0e12] px-4 py-3">
        <div className="mb-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-accent/70" />
          notes/annotations.md
        </div>
        <div className="space-y-1.5 font-mono text-[11px] leading-relaxed sm:text-xs">
          {ANNOTATIONS.map((a) => {
            const lit = active === a.id;
            return (
              <p
                key={a.id}
                className={`rounded px-2 py-1 transition-colors ${
                  lit ? "bg-accent/10 text-text" : "text-muted"
                }`}
              >
                <span className="text-text">
                  - <span className="text-accent">note-{a.id}</span>
                </span>{" "}
                · <span className="text-text">{a.time}</span>{" "}
                <span className="text-glow-violet">`{a.scene}`</span> — {a.text}{" "}
                <span className="text-muted/70">{a.coords}</span>
              </p>
            );
          })}
        </div>
      </div>

      <p className="mt-3 text-center font-mono text-[11px] text-muted">
        Hover or focus a pin — the matching line lights up in the file.
      </p>
    </div>
  );
}
