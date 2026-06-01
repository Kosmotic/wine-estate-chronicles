import { createFileRoute, Link } from "@tanstack/react-router";
import { PageBanner, SiteLayout } from "@/components/site/SiteLayout";
import { Leaf, MapPin, Sprout } from "lucide-react";
import banner from "@/assets/brand/banner-vineyards.jpg";
import vineyard from "@/assets/brand/vineyard-aerial.jpg";
import cellar from "@/assets/brand/cellar.jpg";
import hands from "@/assets/brand/hands-grapes.jpg";

export const Route = createFileRoute("/producers")({
  head: () => ({
    meta: [
      { title: "Producers & Regions — Whinary Estate" },
      { name: "description", content: "Meet the families and regions behind every Whinary bottle. From the Valle d'Or to Sancerre, Bordeaux and Alsace." },
      { property: "og:title", content: "Producers & Regions" },
      { property: "og:description", content: "The hands and the places behind every bottle." },
      { property: "og:image", content: banner },
    ],
  }),
  component: Producers,
});

const regions = [
  { name: "Valle d'Or", country: "Provence, France", area: "42 ha", soil: "Limestone & clay", flagship: "Cuvée Lumineuse", img: vineyard, story: "The home estate. South-facing amphitheatre at the foot of the Luberon. Biodynamic since 2003." },
  { name: "Hauts Coteaux", country: "Burgundy, France", area: "6 ha", soil: "Pure limestone", flagship: "Étoile du Matin", img: hands, story: "A single chardonnay vineyard at 380m elevation. Co-farmed with the Verret family since 2014." },
  { name: "Saint-Émilion satellite", country: "Bordeaux, France", area: "11 ha", soil: "Gravel & clay", flagship: "Le Monarque", img: cellar, story: "Our Bordeaux outpost. 60-year-old Cabernet Sauvignon vines on a south-east slope." },
  { name: "Loire — Sancerre", country: "Loire Valley, France", area: "Partner", soil: "Flint & chalk", flagship: "Pierre Blanche", img: vineyard, story: "We work with Domaine Margaux, a 4th-generation family pressing Sauvignon Blanc on silex." },
  { name: "Sauternes", country: "Bordeaux, France", area: "Partner", soil: "Gravel over clay", flagship: "Nectar d'Or", img: hands, story: "A single hand-selected pass through botrytised Sémillon, made with Château Larribeyrie." },
  { name: "Alsace — Granite", country: "Alsace, France", area: "Partner", soil: "Decomposed granite", flagship: "Aurore", img: cellar, story: "Riesling from the granite massif of Andlau, vinified slow and dry by the Roller family." },
];

function Producers() {
  return (
    <SiteLayout transparentHeader>
      <PageBanner eyebrow="The Map" title="Producers & Regions." subtitle="The hands and the places behind every bottle we sell." image={banner} />

      <section className="py-24">
        <div className="container-luxe max-w-3xl">
          <p className="eyebrow">Our Philosophy</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">Six estates, one standard.</h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">We make wines on our home estate in Provence. We also bottle six wines under the Whinary name from families and regions we trust completely. Every partner farms organically or biodynamically, harvests by hand, and ferments with native yeasts. We taste every cask, every vintage, every time.</p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-luxe space-y-20">
          {regions.map((r, i) => (
            <article key={r.name} className={`grid lg:grid-cols-12 gap-10 items-center reveal-up ${i % 2 ? "lg:[direction:rtl]" : ""}`}>
              <div className="lg:col-span-7 relative overflow-hidden group">
                <img src={r.img} alt={r.name} loading="lazy" className="aspect-[16/10] w-full object-cover shadow-elegant transition-transform duration-[1500ms] group-hover:scale-105" />
              </div>
              <div className="lg:col-span-5 [direction:ltr]">
                <p className="eyebrow inline-flex items-center gap-2"><MapPin className="h-3 w-3" /> {r.country}</p>
                <h3 className="mt-3 font-serif text-4xl">{r.name}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{r.story}</p>
                <dl className="mt-6 grid grid-cols-3 gap-4 text-sm border-t border-border pt-6">
                  <Stat label="Area" value={r.area} />
                  <Stat label="Soil" value={r.soil} />
                  <Stat label="Flagship" value={r.flagship} />
                </dl>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative py-24 bg-gradient-dark text-cream overflow-hidden">
        <div className="grain absolute inset-0" />
        <div className="container-luxe relative grid md:grid-cols-3 gap-10 text-center">
          {[
            [Leaf, "100% organic or biodynamic", "No exceptions."],
            [Sprout, "Native ferments only", "Wild yeast, never lab-cultured."],
            [MapPin, "Direct relationships", "We taste with every family every vintage."],
          ].map(([Icon, t, d]) => {
            const I = Icon as typeof Leaf;
            return (
              <div key={t as string}>
                <I className="h-6 w-6 text-gold mx-auto" />
                <h3 className="mt-4 font-serif text-2xl">{t as string}</h3>
                <p className="mt-2 text-cream/65">{d as string}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-24 text-center">
        <div className="container-luxe">
          <h2 className="font-serif text-5xl">Taste the work.</h2>
          <Link to="/shop" className="mt-8 inline-block bg-burgundy text-cream px-10 py-4 text-[0.72rem] uppercase tracking-[0.25em] hover:bg-burgundy-deep transition">Browse the wines</Link>
        </div>
      </section>
    </SiteLayout>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="eyebrow !text-[0.62rem]">{label}</dt>
      <dd className="mt-1 font-serif text-base">{value}</dd>
    </div>
  );
}
