import { Link } from "@tanstack/react-router";

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const color = tone === "light" ? "text-cream" : "text-burgundy";
  const accent = tone === "light" ? "text-gold" : "text-gold";
  return (
    <Link to="/" className="group inline-flex items-center gap-3">
      <span
        className={`grid h-11 w-11 place-items-center rounded-full border ${
          tone === "light" ? "border-cream/50" : "border-gold/60"
        } transition-transform group-hover:rotate-6`}
      >
        <span className={`font-serif text-lg ${accent}`}>W</span>
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-serif text-xl tracking-wide ${color}`}>Whinary</span>
        <span className="eyebrow mt-1 !text-[0.55rem]" style={{ letterSpacing: "0.35em" }}>
          Estate Wines
        </span>
      </span>
    </Link>
  );
}
