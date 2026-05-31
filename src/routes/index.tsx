import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { wines } from "@/lib/wines";
import { ArrowRight, Leaf, Award, MapPin, Sparkles } from "lucide-react";
import vineyard from "@/assets/brand/vineyard-aerial.jpg";
import hands from "@/assets/brand/hands-grapes.jpg";
import cellar from "@/assets/brand/cellar.jpg";
import tasting from "@/assets/brand/tasting.jpg";
import yoga from "@/assets/brand/yoga-vines.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Whinary Estate Wines — Crafted from the earth, aged for the ages" },
      {
        name: "description",
        content:
          "A family estate winery in the Valle d'Or, Provence. Discover rare organic wines, vineyard tastings, and the Whinary Wine Club.",
      },
      { property: "og:title", content: "Whinary Estate Wines" },
      { property: "og:description", content: "Crafted from the earth. Aged for the ages." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout transparentHeader>
      <Hero />
      <FeaturedCollections />
      <Storytelling />
      <StatsStrip />
      <BestSellers />
      <WineClub />
      <Activities />
      <Press />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden text-cream">
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={vineyard}
        className="absolute inset-0 h-full w-full object-cover animate-slow-zoom"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      <div className="absolute inset-0 bg-burgundy-deep/30" />

      <div className="relative z-10 grid h-full place-items-center text-center px-6">
        <div>
          <p className="eyebrow !text-gold reveal-up">Valle d'Or, France · Est. 1987</p>
          <h1
            className="mt-6 font-serif font-medium text-[clamp(3.5rem,11vw,10rem)] leading-[0.95] reveal-up"
            style={{ animationDelay: "0.15s" }}
          >
            Whinary
          </h1>
          <div className="mx-auto mt-6 h-px w-24 bg-gold/70 reveal-up" style={{ animationDelay: "0.3s" }} />
          <p
            className="mt-8 font-script italic text-2xl md:text-3xl text-cream/90 reveal-up"
            style={{ animationDelay: "0.4s" }}
          >
            Crafted from the earth. Aged for the ages.
          </p>
          <div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 reveal-up"
            style={{ animationDelay: "0.55s" }}
          >
            <Link
              to="/shop"
              className="group inline-flex h-14 items-center gap-3 bg-burgundy px-9 text-[0.78rem] uppercase tracking-[0.25em] font-medium hover:bg-burgundy-deep transition-all hover:gap-5"
            >
              Shop our wines
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/visit"
              className="inline-flex h-14 items-center border border-cream/70 px-9 text-[0.78rem] uppercase tracking-[0.25em] font-medium hover:bg-cream hover:text-burgundy transition-all"
            >
              Book a tasting
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/60 text-xs tracking-[0.3em] animate-pulse">
        ↓ SCROLL
      </div>
    </section>
  );
}

const collections = [
  { label: "New Arrivals", desc: "Fresh from the harvest" },
  { label: "Rare Wines", desc: "Limited single-vineyard bottlings" },
  { label: "Organic", desc: "Biodynamic & natural" },
  { label: "Champagne", desc: "Méthode traditionnelle" },
  { label: "Wine Cases", desc: "Curated half & full cases" },
  { label: "Best Sellers", desc: "Our most loved" },
];

function FeaturedCollections() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container-luxe">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <p className="eyebrow">The Collection</p>
            <h2 className="mt-3 font-serif text-5xl md:text-6xl">
              A library of <em className="font-script">living</em> wines.
            </h2>
          </div>
          <Link to="/shop" className="inline-flex items-center gap-2 text-burgundy hover:gap-4 transition-all">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
          {collections.map((c, i) => (
            <Link
              key={c.label}
              to="/shop"
              className="group relative aspect-[4/5] overflow-hidden bg-secondary hover-lift block"
            >
              <img
                src={wines[i].image}
                alt={c.label}
                className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-[1200ms] group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy-deep/85 via-burgundy-deep/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-cream">
                <p className="eyebrow !text-gold/90">{c.desc}</p>
                <h3 className="mt-2 font-serif text-2xl md:text-3xl">{c.label}</h3>
                <div className="mt-4 inline-flex items-center gap-2 text-sm opacity-0 group-hover:opacity-100 transition translate-y-2 group-hover:translate-y-0">
                  Explore <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Storytelling() {
  return (
    <section className="py-24 md:py-36 bg-secondary/40 overflow-hidden">
      <div className="container-luxe grid md:grid-cols-12 gap-12 md:gap-20 items-center">
        <div className="md:col-span-7 relative">
          <img src={vineyard} alt="Vineyard at golden hour" loading="lazy" className="w-full shadow-elegant" />
          <img
            src={hands}
            alt="Hands holding grapes"
            loading="lazy"
            className="hidden md:block absolute -bottom-16 -right-10 w-64 lg:w-80 shadow-bottle border-8 border-cream"
          />
        </div>
        <div className="md:col-span-5">
          <p className="eyebrow">Our Philosophy</p>
          <h2 className="mt-4 font-serif text-5xl md:text-6xl text-balance">
            Three generations, <em className="font-script">one</em> patient hand.
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            Since 1987, the Lacroix family has tended these 42 hectares of limestone and clay
            in the heart of the Valle d'Or. We farm biodynamically, harvest by hand at dawn, and
            let the wines find their own voice in cellar.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Every bottle carries the memory of a slow year — its weather, its rhythms, its quiet
            moments of grace.
          </p>
          <Link
            to="/about"
            className="mt-10 inline-flex items-center gap-3 text-burgundy border-b border-burgundy pb-1 hover:gap-5 transition-all"
          >
            Read our story <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function StatsStrip() {
  const stats = [
    ["18", "Countries we ship to"],
    ["42", "Hectares under vine"],
    ["36", "Michelin partners"],
    ["100%", "Biodynamic farming"],
  ];
  return (
    <section className="relative py-20 bg-gradient-dark text-cream overflow-hidden">
      <div className="grain absolute inset-0" />
      <div className="container-luxe relative grid grid-cols-2 md:grid-cols-4 gap-10">
        {stats.map(([n, l]) => (
          <div key={l} className="text-center">
            <div className="font-serif text-5xl md:text-6xl text-gold">{n}</div>
            <div className="mt-3 eyebrow !text-cream/60">{l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function BestSellers() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-luxe">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow">Cellar Selections</p>
          <h2 className="mt-3 font-serif text-5xl md:text-6xl">Loved by our members</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {wines.slice(0, 3).map((w) => (
            <Link
              key={w.slug}
              to="/shop/$slug"
              params={{ slug: w.slug }}
              className="group block"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
                <img
                  src={w.image}
                  alt={w.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex flex-col gap-1">
                  {w.tags.map((t) => (
                    <span
                      key={t}
                      className="bg-cream/90 text-burgundy text-[0.65rem] tracking-[0.18em] uppercase px-2.5 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <p className="eyebrow">{w.varietal}</p>
                  <h3 className="mt-1 font-serif text-2xl group-hover:text-burgundy transition-colors">
                    {w.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{w.vintage} · {w.region}</p>
                </div>
                <div className="font-serif text-2xl text-burgundy">${w.price}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function WineClub() {
  const tiers = [
    { name: "Silver", price: 95, freq: "Every 2 months", perks: ["3 curated bottles", "Tasting notes", "Free shipping over $150"] },
    { name: "Gold", price: 175, freq: "Every 2 months", perks: ["6 curated bottles", "Personalized selection", "Member-only releases", "Free shipping"], featured: true },
    { name: "Platinum", price: 320, freq: "Every 2 months", perks: ["Hand-picked rare wines", "Cellar-aged reserves", "Private estate visit", "Concierge service"] },
  ];
  return (
    <section className="relative py-24 md:py-32 bg-gradient-dark text-cream overflow-hidden">
      <div className="grain absolute inset-0" />
      <div className="container-luxe relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow">The Wine Club</p>
          <h2 className="mt-3 font-serif text-5xl md:text-6xl">
            A bottle, a story, <em className="font-script italic">delivered</em>.
          </h2>
          <p className="mt-6 text-cream/70">
            Hand-picked allocations from our cellars and our trusted producer friends. Pause or
            cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative p-10 border transition-all hover-lift ${
                t.featured
                  ? "border-gold bg-burgundy/40 backdrop-blur-sm"
                  : "border-cream/15 bg-cream/[0.03] backdrop-blur-sm hover:border-gold/60"
              }`}
            >
              {t.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-gold text-burgundy-deep text-[0.65rem] tracking-[0.22em] uppercase px-3 py-1 font-medium">
                  Most loved
                </span>
              )}
              <h3 className="font-serif text-3xl text-gold">{t.name}</h3>
              <p className="mt-2 text-cream/60 text-sm">{t.freq}</p>
              <div className="mt-6 font-serif text-5xl">
                ${t.price}
                <span className="font-sans text-sm text-cream/50 ml-1">/ shipment</span>
              </div>
              <ul className="mt-8 space-y-3 text-sm text-cream/80">
                {t.perks.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <Sparkles className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
              <Link
                to="/wine-club"
                className={`mt-10 block w-full text-center py-4 text-[0.72rem] uppercase tracking-[0.25em] font-medium transition ${
                  t.featured
                    ? "bg-gradient-gold text-burgundy-deep hover:opacity-90"
                    : "border border-cream/40 hover:border-gold hover:text-gold"
                }`}
              >
                Join {t.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Activities() {
  const items = [
    { title: "Cellar Tour", desc: "Walk our 300-year-old chalk caves and taste straight from the barrel.", img: cellar, eyebrow: "90 min · €45" },
    { title: "Vineyard Tasting", desc: "Five wines paired with estate cheese and Provençal charcuterie.", img: tasting, eyebrow: "2 hours · €85" },
    { title: "Sunrise Yoga & Wine", desc: "Slow flow among the vines at first light, followed by breakfast and a glass.", img: yoga, eyebrow: "Saturdays · €60" },
  ];
  return (
    <section className="py-24 md:py-32">
      <div className="container-luxe">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="eyebrow">Visit the Estate</p>
            <h2 className="mt-3 font-serif text-5xl md:text-6xl">Experiences in Provence</h2>
          </div>
          <Link to="/visit" className="inline-flex items-center gap-2 text-burgundy hover:gap-4 transition-all">
            See all experiences <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-7">
          {items.map((it) => (
            <article key={it.title} className="group">
              <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
                <img src={it.img} alt={it.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy-deep/70 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-cream">
                  <p className="eyebrow !text-gold/90">{it.eyebrow}</p>
                  <h3 className="mt-2 font-serif text-3xl">{it.title}</h3>
                </div>
              </div>
              <p className="mt-5 text-muted-foreground leading-relaxed">{it.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Press() {
  const press = [
    { quote: "Among the most quietly compelling wines coming out of Provence today.", src: "Decanter" },
    { quote: "A masterclass in restraint and place.", src: "Wine Spectator" },
    { quote: "The Lacroix family is rewriting what a small estate can be.", src: "Le Figaro Vin" },
  ];
  const meta = [
    { Icon: Leaf, label: "Demeter Certified Biodynamic" },
    { Icon: Award, label: "Gold Medal · Concours de Paris" },
    { Icon: MapPin, label: "Member · Vignerons Indépendants" },
  ];
  return (
    <section className="py-24 md:py-32 bg-secondary/40">
      <div className="container-luxe">
        <p className="eyebrow text-center">In the Press</p>
        <div className="mt-10 grid md:grid-cols-3 gap-10">
          {press.map((p) => (
            <figure key={p.src} className="text-center">
              <blockquote className="font-serif text-2xl md:text-3xl text-balance italic text-foreground/90">
                "{p.quote}"
              </blockquote>
              <figcaption className="mt-5 eyebrow">— {p.src}</figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-20 border-t border-border pt-10 grid sm:grid-cols-3 gap-6 text-center">
          {meta.map(({ Icon, label }) => (
            <div key={label} className="flex items-center justify-center gap-3 text-muted-foreground">
              <Icon className="h-5 w-5 text-gold" />
              <span className="text-sm tracking-wide">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
