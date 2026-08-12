"use client";

import { useRef, useState } from "react";

const VIDEO_URL =
  "https://e4yhvggcsuu9vhwa.public.blob.vercel-storage.com/vellum-promo-light.mp4";
const POSTER_URL =
  "https://e4yhvggcsuu9vhwa.public.blob.vercel-storage.com/vellum-promo-light-poster.jpg";

export default function PromoVideo() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  function start() {
    setPlaying(true);
    // Defer play until the <video> is mounted with its src.
    requestAnimationFrame(() => {
      videoRef.current?.play().catch(() => {});
    });
  }

  return (
    <figure className="group relative overflow-hidden rounded-2xl border border-paper-line bg-paper shadow-[0_30px_70px_-35px_rgba(11,11,13,0.45)]">
      <div className="relative aspect-video w-full">
        {playing ? (
          <video
            ref={videoRef}
            src={VIDEO_URL}
            poster={POSTER_URL}
            controls
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full bg-ink"
          />
        ) : (
          <button
            type="button"
            onClick={start}
            aria-label="Play the Vellum demo — 52 seconds"
            className="absolute inset-0 h-full w-full cursor-pointer"
          >
            {/* Poster still */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={POSTER_URL}
              alt="Vellum review player with a pinned note on a HyperFrames composition"
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* Legibility wash — kept faint so the light paper edges stay clean */}
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,transparent,rgba(11,11,13,0.18))]"
            />
            {/* Play affordance */}
            <span
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-accent/40 bg-ink/70 backdrop-blur-sm transition-transform duration-200 group-hover:scale-105"
            >
              <span className="absolute inset-0 rounded-full bg-accent/10 transition-opacity duration-200 group-hover:opacity-0" />
              <svg
                width="26"
                height="30"
                viewBox="0 0 10 12"
                fill="currentColor"
                className="ml-1 text-accent"
              >
                <path d="M0 0v12l10-6z" />
              </svg>
            </span>
            {/* Top-right meta chip — light chip to sit on the paper poster top */}
            <span className="absolute right-4 top-4 flex items-center gap-2 rounded-lg border border-paper-line bg-white/85 px-3 py-1.5 font-mono text-[11px] text-paper-muted backdrop-blur-sm sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-paper-accent" />
              Watch the demo
              <span className="text-paper-ink/30">·</span>
              <span className="tabular-nums">0:52</span>
            </span>
          </button>
        )}
      </div>
    </figure>
  );
}
