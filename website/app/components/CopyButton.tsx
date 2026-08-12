"use client";

import { useState } from "react";

const INSTALL_CMD = "curl -fsSL https://tryvellum.vercel.app/install | sh";

export default function CopyButton({
  text = INSTALL_CMD,
}: {
  text?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="flex w-full items-center gap-3 rounded-xl border border-line bg-panel px-4 py-3 sm:w-auto">
      <span className="select-none font-mono text-sm text-accent">$</span>
      <code className="min-w-0 flex-1 break-all font-mono text-[13px] leading-snug text-text sm:overflow-x-auto sm:whitespace-nowrap sm:text-sm">
        {text}
      </code>
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? "Command copied" : "Copy install command"}
        className="shrink-0 rounded-lg border border-line bg-ink px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:text-text hover:border-accent/40"
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
