import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";
import { Gift, Check } from "lucide-react";
import { wines } from "@/lib/wines";

export const Route = createFileRoute("/gifting")({
  head: () => ({
    meta: [
      { title: "Corporate Gifting — Whinary Estate" },
      { name: "description", content: "Hand-curated wine gifts for clients, teams and special occasions." },
      { property: "og:title", content: "Corporate Gifting — Whinary" },
      { property: "og:description", content: "Curated wine gifts, branded and delivered." },
    ],
  }),
  component: Gifting,
});

function Gifting() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Corporate Gifting" title="Gifts that say something." subtitle="Curated wine selections for clients, teams, and the people you want to thank properly." />

      <section className="py-20">
        <div className="container-luxe grid md:grid-cols-3 gap-8">
          {wines.slice(0, 3).map((w, i) => (
            <div key={w.slug} className="bg-card p-8 hover-lift">
              <Gift className="h-6 w-6 text-gold" />
              <h3 className="mt-4 font-serif text-2xl">{["Three-Bottle Discovery", "Six-Bottle Cellar Set", "Twelve-Bottle Reserve"][i]}</h3>
              <p className="mt-2 text-muted-foreground">{["A curated trio in our linen-lined gift box.", "Half-case in our walnut presentation crate.", "A full case of our finest, signed and numbered."][i]}</p>
              <ul className="mt-6 space-y-2 text-sm">
                {[["Branded card", "Linen ribbon", "Free shipping >$200"], ["Custom branding", "Walnut crate", "Personal note", "Free shipping"], ["Personalized engraving", "Concierge service", "Private tasting included", "White-glove delivery"]][i].map(p => (
                  <li key={p} className="flex items-start gap-2"><Check className="h-4 w-4 text-gold mt-0.5" />{p}</li>
                ))}
              </ul>
              <p className="mt-6 font-serif text-3xl text-burgundy">From ${[150, 320, 750][i]}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-secondary/40 text-center">
        <div className="container-luxe max-w-2xl">
          <h2 className="font-serif text-4xl">Have something larger in mind?</h2>
          <p className="mt-3 text-muted-foreground">We work with brands and individuals on bespoke programs of any size.</p>
          <a href="/contact" className="mt-8 inline-block bg-burgundy text-cream px-8 py-4 text-[0.72rem] uppercase tracking-[0.25em] hover:bg-burgundy-deep transition">Talk to gifting</a>
        </div>
      </section>
    </SiteLayout>
  );
}
