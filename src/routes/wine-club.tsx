import { createFileRoute, Link } from "@tanstack/react-router";
import { PageBanner, SiteLayout } from "@/components/site/SiteLayout";
import { Sparkles, Check } from "lucide-react";
import bannerCellar from "@/assets/brand/banner-cellar.jpg";
import { wines } from "@/lib/wines";

export const Route = createFileRoute("/wine-club")({
  head: () => ({
    meta: [
      { title: "Wine Club — Whinary Estate" },
      { name: "description", content: "Join the Whinary Wine Club. Hand-picked allocations delivered to your door every two months." },
      { property: "og:title", content: "Whinary Wine Club" },
      { property: "og:description", content: "Hand-picked wines delivered to your door." },
      { property: "og:image", content: bannerCellar },
    ],
  }),
  component: WineClub,
});

const tiers = [
  { name: "Silver", price: 85, freq: "Every 2 months", perks: ["3 curated bottles per shipment", "Detailed tasting notes from the winemaker", "Free shipping over €150", "Pause or skip anytime"] },
  { name: "Gold", price: 160, freq: "Every 2 months", perks: ["6 curated bottles", "Personalised to your palate", "Member-only allocations", "Free shipping on every order", "Invitation to our annual harvest dinner"], featured: true },
  { name: "Platinum", price: 295, freq: "Every 2 months", perks: ["Hand-picked rare & library wines", "Cellar-aged reserve allocations", "A private estate visit for two each year", "Concierge sommelier service", "Complimentary corkage at partner restaurants"] },
];

function WineClub() {
  return (
    <SiteLayout transparentHeader>
      <PageBanner eyebrow="The Wine Club" title="A standing invitation to our cellar." subtitle="Three tiers, all with the same care. Pause or cancel anytime." image={bannerCellar} tall />

      {/* Tiers */}
      <section className="py-24">
        <div className="container-luxe grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tiers.map((t, i) => (
            <div
              key={t.name}
              className={`relative overflow-hidden p-10 hover-lift transition-all reveal-up ${
                t.featured
                  ? "bg-gradient-dark text-cream shadow-bottle"
                  : "bg-card border border-border text-foreground"
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {t.featured && (
                <>
                  <div className="grain absolute inset-0 opacity-50" />
                  <span className="absolute -top-0 right-0 bg-gradient-gold text-burgundy-deep text-[0.65rem] tracking-[0.22em] uppercase px-4 py-2 font-medium">Most loved</span>
                </>
              )}
              <div className="relative">
                <h3 className={`font-serif text-3xl ${t.featured ? "text-gold" : "text-burgundy"}`}>{t.name}</h3>
                <p className={`mt-2 text-sm ${t.featured ? "text-cream/60" : "text-muted-foreground"}`}>{t.freq}</p>
                <div className="mt-6 font-serif text-5xl">€{t.price}<span className={`font-sans text-sm ml-1 ${t.featured ? "text-cream/50" : "text-muted-foreground"}`}>/ shipment</span></div>
                <ul className="mt-8 space-y-3 text-sm">
                  {t.perks.map((p) => (
                    <li key={p} className="flex items-start gap-3"><Check className="h-4 w-4 text-gold mt-0.5 shrink-0" />{p}</li>
                  ))}
                </ul>
                <button className={`mt-10 w-full py-4 text-[0.72rem] uppercase tracking-[0.25em] font-medium transition ${t.featured ? "bg-gradient-gold text-burgundy-deep hover:opacity-90" : "bg-burgundy text-cream hover:bg-burgundy-deep"}`}>
                  Join {t.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Inside the box */}
      <section className="py-24 bg-secondary/40">
        <div className="container-luxe">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow">Inside the Box</p>
            <h2 className="mt-3 font-serif text-5xl">What members are sipping this season</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {wines.slice(6, 10).map((w) => (
              <Link key={w.slug} to="/shop/$slug" params={{ slug: w.slug }} className="group">
                <div className="relative aspect-[4/5] overflow-hidden bg-card">
                  <img src={w.image} alt={w.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-105" />
                </div>
                <h3 className="mt-4 font-serif text-lg group-hover:text-burgundy transition">{w.name}</h3>
                <p className="text-xs text-muted-foreground">{w.varietal}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24">
        <div className="container-luxe max-w-4xl mx-auto text-center">
          <Sparkles className="h-6 w-6 text-gold mx-auto" />
          <h2 className="mt-4 font-serif text-5xl">How it works</h2>
          <div className="mt-16 grid md:grid-cols-3 gap-10 text-left">
            {[
              ["01", "Tell us your taste", "A short tasting profile so we can pour the right things into your box."],
              ["02", "We curate, you receive", "Every two months a hand-packed shipment arrives with notes and stories."],
              ["03", "Sip, share, repeat", "Skip a month, swap a bottle, or pause from your account — anytime."],
            ].map(([n, t, d]) => (
              <div key={n} className="reveal-up">
                <div className="font-serif text-6xl text-gold">{n}</div>
                <h3 className="mt-3 font-serif text-2xl">{t}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <Link to="/contact" className="mt-14 inline-block text-burgundy border-b border-burgundy pb-1 hover:gap-5">Questions? Talk to a sommelier →</Link>
        </div>
      </section>
    </SiteLayout>
  );
}
