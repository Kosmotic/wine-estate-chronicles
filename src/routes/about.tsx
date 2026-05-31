import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";
import vineyard from "@/assets/brand/vineyard-aerial.jpg";
import hands from "@/assets/brand/hands-grapes.jpg";
import cellar from "@/assets/brand/cellar.jpg";
import { Leaf, Award, Heart } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Whinary Estate" },
      { name: "description", content: "Three generations of the Lacroix family farming 42 hectares of biodynamic vines in the Valle d'Or, Provence." },
      { property: "og:title", content: "Our Story — Whinary Estate" },
      { property: "og:description", content: "Three generations, one patient hand." },
      { property: "og:image", content: vineyard },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Est. 1987 · Valle d'Or, Provence"
        title="Three generations, one patient hand."
        subtitle="The Lacroix family has been farming this land since the year my grandfather planted his first row of vines on a slope no one else wanted."
      />

      <section className="py-20">
        <div className="container-luxe grid lg:grid-cols-2 gap-16 items-center">
          <img src={vineyard} alt="Estate" loading="lazy" className="shadow-elegant" />
          <div>
            <p className="eyebrow">The Land</p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">42 hectares of limestone and clay.</h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Our vineyards sit on a south-facing amphitheatre at the foot of the Luberon. The soil is poor — which is exactly what great wine needs. Vines struggle, roots dive deep, and the fruit they bring back tastes of the place.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/40">
        <div className="container-luxe grid lg:grid-cols-2 gap-16 items-center">
          <div className="lg:order-2">
            <img src={hands} alt="Hands holding grapes" loading="lazy" className="shadow-elegant" />
          </div>
          <div className="lg:order-1">
            <p className="eyebrow">Our Way</p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">Farming as if we'll be here forever.</h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              We're certified biodynamic — no synthetic anything, ever. We plough with horses on our oldest parcels, harvest by hand at dawn, and ferment with the yeasts that live on the grapes themselves.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              It's slower. It costs more. It is the only way we know.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-luxe grid lg:grid-cols-2 gap-16 items-center">
          <img src={cellar} alt="Cellar" loading="lazy" className="shadow-elegant" />
          <div>
            <p className="eyebrow">The Cellar</p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">Patience in stone and oak.</h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Our cellars were carved from chalk in 1742 by Cistercian monks. The air stays at 12°C year-round, perfect for the slow élevage our wines demand. Some bottles wait seven years before they meet a glass.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-dark text-cream relative overflow-hidden">
        <div className="grain absolute inset-0" />
        <div className="container-luxe relative grid md:grid-cols-3 gap-10 text-center">
          {[
            [Leaf, "Demeter Certified", "Biodynamic since 2003"],
            [Award, "Gold Medal", "Concours Général Agricole"],
            [Heart, "Member", "Vignerons Indépendants"],
          ].map(([Icon, t, d], i) => {
            const I = Icon as typeof Leaf;
            return (
              <div key={i}>
                <I className="h-7 w-7 text-gold mx-auto" />
                <h3 className="mt-4 font-serif text-2xl">{t as string}</h3>
                <p className="mt-2 text-cream/65">{d as string}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-24 text-center">
        <div className="container-luxe">
          <h2 className="font-serif text-4xl md:text-5xl">Come walk the vines with us.</h2>
          <Link to="/visit" className="mt-8 inline-flex h-13 items-center bg-burgundy text-cream px-9 py-4 text-[0.72rem] uppercase tracking-[0.25em] font-medium hover:bg-burgundy-deep transition">
            Plan your visit
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
