import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";
import { Sparkles, Check } from "lucide-react";

export const Route = createFileRoute("/wine-club")({
  head: () => ({
    meta: [
      { title: "Wine Club — Whinary Estate" },
      { name: "description", content: "Join the Whinary Wine Club. Hand-picked allocations delivered every two months." },
      { property: "og:title", content: "Whinary Wine Club" },
      { property: "og:description", content: "Hand-picked wines delivered to your door." },
    ],
  }),
  component: WineClub,
});

const tiers = [
  { name: "Silver", price: 95, freq: "Every 2 months", perks: ["3 curated bottles per shipment", "Detailed tasting notes", "Free shipping over $150", "Pause anytime"] },
  { name: "Gold", price: 175, freq: "Every 2 months", perks: ["6 curated bottles", "Personalized to your palate", "Member-only releases", "Free shipping on every order", "Invitation to harvest dinner"], featured: true },
  { name: "Platinum", price: 320, freq: "Every 2 months", perks: ["Hand-picked rare & library wines", "Cellar-aged reserve allocations", "Private estate visit each year", "Concierge sommelier service", "Complimentary corkage at partner restaurants"] },
];

function WineClub() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="The Wine Club"
        title="A standing invitation to our cellar."
        subtitle="Three tiers, all with the same care. Pause or cancel anytime."
      />

      <section className="py-20">
        <div className="container-luxe grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative p-10 border bg-card hover-lift ${
                t.featured ? "border-burgundy shadow-elegant" : "border-border"
              }`}
            >
              {t.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-burgundy text-cream text-[0.65rem] tracking-[0.22em] uppercase px-3 py-1 font-medium">
                  Most loved
                </span>
              )}
              <h3 className="font-serif text-3xl text-burgundy">{t.name}</h3>
              <p className="mt-2 text-muted-foreground text-sm">{t.freq}</p>
              <div className="mt-6 font-serif text-5xl">
                ${t.price}
                <span className="font-sans text-sm text-muted-foreground ml-1">/ shipment</span>
              </div>
              <ul className="mt-8 space-y-3 text-sm">
                {t.perks.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
              <button className={`mt-10 w-full py-4 text-[0.72rem] uppercase tracking-[0.25em] font-medium transition ${
                t.featured ? "bg-burgundy text-cream hover:bg-burgundy-deep" : "border border-burgundy text-burgundy hover:bg-burgundy hover:text-cream"
              }`}>
                Join {t.name}
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-secondary/40">
        <div className="container-luxe max-w-3xl mx-auto text-center">
          <Sparkles className="h-6 w-6 text-gold mx-auto" />
          <h2 className="mt-4 font-serif text-4xl">How it works</h2>
          <div className="mt-12 grid md:grid-cols-3 gap-10 text-left">
            {[
              ["01", "Tell us your taste", "A short tasting profile so we can pour the right things."],
              ["02", "We curate, you receive", "Every two months, a shipment arrives with notes and stories."],
              ["03", "Sip, share, repeat", "Skip, swap, or pause from your account anytime."],
            ].map(([n, t, d]) => (
              <div key={n}>
                <div className="font-serif text-5xl text-gold">{n}</div>
                <h3 className="mt-3 font-serif text-2xl">{t}</h3>
                <p className="mt-2 text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
          <Link to="/contact" className="mt-12 inline-block text-burgundy border-b border-burgundy pb-1">
            Questions? Talk to a sommelier
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
