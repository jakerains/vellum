import Image from "next/image";
import logoMark from "../../public/logo-mark.png";

const GITHUB = "https://github.com/jakerains/vellum";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/70 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <Image
            src={logoMark}
            alt=""
            width={24}
            height={24}
            className="h-6 w-6"
          />
          <span className="font-display text-lg tracking-tight text-text">
            Vellum
          </span>
        </a>
        <div className="flex items-center gap-5 font-mono text-xs text-muted sm:gap-7 sm:text-[13px]">
          <a href="#demo" className="hidden transition-colors hover:text-text sm:inline">
            Demo
          </a>
          <a href="#how" className="hidden transition-colors hover:text-text sm:inline">
            How it works
          </a>
          <a
            href="#handoff"
            className="hidden transition-colors hover:text-text sm:inline"
          >
            Agent handoff
          </a>
          <a href="#install" className="transition-colors hover:text-text">
            Install
          </a>
          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-text"
          >
            GitHub
            <svg
              aria-hidden="true"
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17 17 7M9 7h8v8" />
            </svg>
          </a>
        </div>
      </nav>
    </header>
  );
}
