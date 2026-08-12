export default function Eyebrow({
  time,
  label,
  tone = "dark",
}: {
  time: string;
  label: string;
  tone?: "dark" | "light";
}) {
  const accent = tone === "light" ? "text-paper-accent" : "text-accent";
  const dash = tone === "light" ? "text-paper-muted" : "text-muted";
  return (
    <div
      className={`flex items-center gap-2 font-mono text-xs tracking-wider ${accent}`}
    >
      <span>{time}</span>
      <span aria-hidden="true" className={dash}>
        —
      </span>
      <span className="uppercase">{label}</span>
    </div>
  );
}
