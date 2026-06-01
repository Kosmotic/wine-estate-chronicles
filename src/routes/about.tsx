import { createFileRoute, Link } from "@tanstack/react-router";
import { PageBanner, SiteLayout } from "@/components/site/SiteLayout";
import vineyard from "@/assets/brand/vineyard-aerial.jpg";
import hands from "@/assets/brand/hands-grapes.jpg";
import cellar from "@/assets/brand/cellar.jpg";
import bannerEstate from "@/assets/brand/banner-estate.jpg";
import bannerVineyards from "@/assets/brand/banner-vineyards.jpg";
import { Leaf, Award, Heart, Sprout } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Whinary Estate" },
      { name: "description", content: "Three generations of the Lacroix family farming 42 hectares of biodynamic vines in the Valle d'Or, Provence." },
      { property: "og:title", content: "Our Story — Whinary Estate" },
      { property: "og:description", content: "Three generations, one patient hand." },
      { property: "og:image", content: bannerEstate },
    ],
  }),
  component: About,
});

const timeline = [
  ["1987", "The first vines", "Henri Lacroix plants 4 hectares of Pinot Noir on the slope no one else wanted."],
  ["1994", "First bottling", "The maiden Cuvée Lumineuse is released. Three Michelin restaurants in Lyon take a case each."],
  ["2003", "Going biodynamic", "Catherine Lacroix converts the estate to certified biodynamic farming. We plough with horses on our oldest parcels."],
  ["2011", "The new cellar", "We restore the 1742 Cistercian chalk caves and move our élevage underground."],
  ["2018", "Gold at Paris", "Réserve du Domaine 2015 wins gold at the Concours Général de Paris."],
  ["2023", "Three generations", "Lucien Lacroix, Henri's grandson, takes over winemaking. The slow work continues."],
];

function About() {
  return (
    <SiteLayout transparentHeader>
      <PageBanner eyebrow="Est. 1987 · Valle d'Or, Provence" title="Three generations, one patient hand." subtitle="The story of the Lacroix family and the slow, deliberate art of farming wine." image={bannerEstate} tall />

      <section className="py-24">
        <div className="container-luxe grid lg:grid-cols-2 gap-16 items-center">
          <img src={vineyard} alt="Estate" loading="lazy" className="shadow-elegant" />
          <div>
            <p className="eyebrow">The Land</p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">42 hectares of limestone and clay.</h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">Our vineyards sit on a south-facing amphitheatre at the foot of the Luberon. The soil is poor — which is exactly what great wine needs. Vines struggle, roots dive deep, and the fruit they bring back tastes of the place.</p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">We farm 14 grape varieties across 36 micro-parcels, each tended according to its own rhythm.</p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-secondary/40">
        <div className="container-luxe">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <p className="eyebrow">Our Story</p>
            <h2 className="mt-3 font-serif text-5xl">A slow timeline</h2>
            <p className="mt-4 text-muted-foreground">Four decades. Three generations. One patient hand.</p>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-burgundy/30" />
            <div className="space-y-16">
              {timeline.map(([year, title, body], i) => (
                <div key={year} className={`relative md:grid md:grid-cols-2 md:gap-12 items-start ${i % 2 ? "md:[direction:rtl]" : ""}`}>
                  <div className={`pl-12 md:pl-0 ${i % 2 ? "md:text-left md:[direction:ltr] md:pl-12" : "md:text-right md:pr-12"}`}>
                    <div className="font-serif text-6xl text-gold leading-none">{year}</div>
                    <h3 className="mt-3 font-serif text-2xl">{title}</h3>
                    <p className="mt-3 text-muted-foreground leading-relaxed [direction:ltr]">{body}</p>
                  </div>
                  <div className="hidden md:block" />
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-2 w-3 h-3 rounded-full bg-burgundy ring-4 ring-cream" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-luxe grid lg:grid-cols-2 gap-16 items-center">
          <div className="lg:order-2"><img src={hands} alt="Hands holding grapes" loading="lazy" className="shadow-elegant" /></div>
          <div className="lg:order-1">
            <p className="eyebrow">Our Way</p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">Farming as if we'll be here forever.</h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">We're certified biodynamic — no synthetic anything, ever. We plough with horses on our oldest parcels, harvest by hand at dawn, and ferment with the yeasts that live on the grapes themselves.</p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">It's slower. It costs more. It is the only way we know.</p>
          </div>
        </div>
      </section>

      {/* Sustainability pillars */}
      <section className="py-24 bg-secondary/40">
        <div className="container-luxe">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow">Sustainability</p>
            <h2 className="mt-3 font-serif text-5xl">Six promises we keep</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              [Leaf, "Zero synthetic inputs", "Certified biodynamic since 2003, Demeter-audited yearly."],
              [Sprout, "Living soils", "Cover crops, sheep grazing in winter, no tilling on old vine parcels."],
              [Heart, "Pollinator havens", "Eight hectares of wildflower margins planted for native bees."],
              [Award, "Solar cellars", "100% of our electricity comes from rooftop solar since 2019."],
              [Leaf, "Glass returnable", "Wine club bottles return to us and are sterilised for refill."],
              [Heart, "Living wages", "Year-round staff, profit-sharing, and a four-day harvest week."],
            ].map(([Icon, t, d]) => {
              const I = Icon as typeof Leaf;
              return (
                <div key={t as string} className="bg-card p-8 hover-lift border border-border/60">
                  <I className="h-6 w-6 text-gold" />
                  <h3 className="mt-4 font-serif text-2xl">{t as string}</h3>
                  <p className="mt-2 text-muted-foreground">{d as string}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-luxe grid lg:grid-cols-2 gap-16 items-center">
          <img src={cellar} alt="Cellar" loading="lazy" className="shadow-elegant" />
          <div>
            <p className="eyebrow">The Cellar</p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">Patience in stone and oak.</h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">Our cellars were carved from chalk in 1742 by Cistercian monks. The air stays at 12°C year-round, perfect for the slow élevage our wines demand. Some bottles wait seven years before they meet a glass.</p>
          </div>
        </div>
      </section>

      <section className="relative py-32 overflow-hidden text-cream">
        <img src={bannerVineyards} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-burgundy-deep/70" />
        <div className="grain absolute inset-0" />
        <div className="container-luxe relative text-center">
          <h2 className="font-serif text-5xl md:text-6xl">Come walk the vines with us.</h2>
          <Link to="/visit" className="mt-10 inline-flex items-center bg-gradient-gold text-burgundy-deep px-10 py-4 text-[0.72rem] uppercase tracking-[0.25em] font-medium hover:opacity-90 transition">Plan your visit</Link>
        </div>
      </section>
    </SiteLayout>
  );
}
