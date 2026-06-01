import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, Twitter } from "lucide-react";
import { Logo } from "./Logo";

const EMAIL = "contact@whinarywines.com";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-dark text-cream">
      <div className="grain absolute inset-0" />
      <div className="container-luxe relative py-20">
        <div className="grid gap-10 md:grid-cols-2 border-b border-cream/15 pb-12">
          <div>
            <h3 className="font-serif text-3xl md:text-4xl">Join the Cellar List</h3>
            <p className="mt-3 text-cream/70 max-w-md">
              Harvest updates, new releases, and exclusive event invitations.
            </p>
          </div>
          <form className="flex items-end gap-3 self-end w-full" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 h-12 border-b border-cream/40 bg-transparent px-1 placeholder:text-cream/40 focus:outline-none focus:border-gold"
            />
            <button className="h-12 px-7 bg-gradient-gold text-burgundy-deep text-[0.72rem] uppercase tracking-[0.25em] font-medium hover:opacity-90 transition">
              Subscribe
            </button>
          </form>
        </div>

        <div className="grid gap-12 md:grid-cols-4 pt-14">
          <div>
            <Logo tone="light" />
            <p className="mt-6 text-cream/65 leading-relaxed max-w-xs font-script text-lg">
              A family estate winery in the Valle d'Or, crafting wines of distinction since 1987.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Instagram, Facebook, Youtube, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-full border border-cream/25 hover:border-gold hover:text-gold transition" aria-label="Social">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Shop" links={[
            ["All Wines", "/shop"],
            ["Wine Club", "/wine-club"],
            ["Corporate Gifting", "/gifting"],
            ["Your Cart", "/cart"],
          ]} />
          <FooterCol title="Discover" links={[
            ["Our Story", "/about"],
            ["Producers & Regions", "/producers"],
            ["Visit the Estate", "/visit"],
            ["Contact", "/contact"],
          ]} />
          <div>
            <h4 className="eyebrow !text-gold">Find Us</h4>
            <p className="mt-5 font-script text-lg leading-relaxed">
              1987 Chemin des Vignes<br />Valle d'Or, Provence<br />France
            </p>
            <p className="mt-5 text-cream/65 text-sm">Wed – Sun · 10:00 – 18:00</p>
            <a href={`mailto:${EMAIL}`} className="mt-5 text-gold inline-block border-b border-gold/40 hover:border-gold text-sm">
              {EMAIL}
            </a>
          </div>
        </div>

        <div className="mt-14 border-t border-cream/15 pt-6 flex flex-col md:flex-row gap-3 justify-between text-xs text-cream/55">
          <span>© 2026 Whinary Estate · Demonstration website · Please drink responsibly.</span>
          <span className="text-gold">{EMAIL}</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h4 className="eyebrow !text-gold">{title}</h4>
      <ul className="mt-5 space-y-3 text-cream/75">
        {links.map(([label, to]) => (
          <li key={label}>
            <Link to={to} className="hover:text-gold transition-colors text-sm">{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
