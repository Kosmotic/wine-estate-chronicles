import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, ShoppingBag, X } from "lucide-react";
import { Logo } from "./Logo";

const nav = [
  { to: "/shop", label: "Our Wines" },
  { to: "/wine-club", label: "Wine Club" },
  { to: "/visit", label: "Visit" },
  { to: "/journal", label: "Journal" },
  { to: "/about", label: "Story" },
  { to: "/contact", label: "Contact" },
];

export function Header({ transparent = false }: { transparent?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = !transparent || scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-cream/85 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="container-luxe flex h-20 items-center justify-between">
        <Logo tone={solid ? "dark" : "light"} />

        <nav className="hidden lg:flex items-center gap-9">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeProps={{ className: "text-burgundy" }}
              className={`text-[0.78rem] uppercase tracking-[0.22em] font-medium transition-colors ${
                solid ? "text-foreground hover:text-burgundy" : "text-cream hover:text-gold"
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="/visit"
            className={`hidden md:inline-flex h-10 items-center border px-5 text-[0.72rem] uppercase tracking-[0.22em] font-medium transition-all ${
              solid
                ? "border-burgundy text-burgundy hover:bg-burgundy hover:text-cream"
                : "border-cream text-cream hover:bg-cream hover:text-burgundy"
            }`}
          >
            Book Tasting
          </Link>
          <button
            className={`relative grid h-10 w-10 place-items-center transition-colors ${
              solid ? "text-foreground" : "text-cream"
            }`}
            aria-label="Cart"
          >
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 grid h-4 w-4 place-items-center rounded-full bg-burgundy text-[0.6rem] font-medium text-cream">
              0
            </span>
          </button>
          <button
            className={`lg:hidden ${solid ? "text-foreground" : "text-cream"}`}
            onClick={() => setOpen(true)}
            aria-label="Menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-50 bg-burgundy-deep text-cream fade-in">
          <div className="flex h-20 items-center justify-between container-luxe">
            <Logo tone="light" />
            <button onClick={() => setOpen(false)} aria-label="Close">
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="container-luxe mt-12 flex flex-col gap-6">
            {nav.map((n, i) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="font-serif text-4xl reveal-up"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
