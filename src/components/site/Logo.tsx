import { Link } from "@tanstack/react-router";
import crest from "@/assets/brand/logo-crest.png";

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const color = tone === "light" ? "text-cream" : "text-burgundy";
  // crest PNG is gold on transparent — works on both tones
  return (
    <Link to="/" className="group inline-flex items-center gap-3">
      <span className="grid h-12 w-12 place-items-center transition-transform duration-500 group-hover:rotate-[10deg] group-hover:scale-110">
        <img src={crest} alt="Whinary Estate crest" className="h-12 w-12 object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]" />
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-serif text-xl tracking-wide ${color} drop-shadow-sm`}>Whinary</span>
        <span className="eyebrow mt-1 !text-[0.55rem]" style={{ letterSpacing: "0.35em" }}>
          Estate Wines
        </span>
      </span>
    </Link>
  );
}
