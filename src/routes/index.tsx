import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { wines } from "@/lib/wines";
import { ArrowRight, Leaf, Award, MapPin } from "lucide-react";
import estateHero from "@/assets/brand/estate-hero.jpg";
import vineyard from "@/assets/brand/vineyard-aerial.jpg";
import vineyardClose from "@/assets/brand/vineyard-close.jpg";
import hands from "@/assets/brand/hands-grapes.jpg";
import cellarArch from "@/assets/brand/cellar-arch.jpg";
import bannerTasting from "@/assets/brand/banner-tasting.jpg";
import activityHarvest from "@/assets/brand/activity-harvest.jpg";
import vineyardDining from "@/assets/brand/vineyard-dining.jpg";
import formalDining from "@/assets/brand/formal-dining.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Whinary Estate Wines — Crafted from the earth, aged for the ages" },
      { name: "description", content: "A family estate winery in the Valle d'Or, Provence. Discover rare organic wines, vineyard tastings and the Whinary Wine Club." },
      { property: "og:title", content: "Whinary Estate Wines" },
      { property: "og:description", content: "Crafted from the earth. Aged for the ages." },
      { property: "og:image", content: vineyard },
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
      <ExperiencesPreview />
      <MembersTable />
      <Press />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden text-cream">
      <video autoPlay muted loop playsInline poster={estateHero} className="absolute inset-0 h-full w-full object-cover animate-slower-zoom">
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      {/* Fallback image overlay in case video doesn't load */}
      <img src={estateHero} alt="" className="absolute inset-0 h-full w-full object-cover -z-10" />
      <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      <div className="absolute inset-0 bg-burgundy-deep/35" />
      <div className="relative z-10 grid h-full place-items-center text-center px-6">
        <div>
          <p className="eyebrow !text-gold reveal-up">Valle d'Or, France · Est. 1987</p>
          <h1 className="mt-6 font-serif font-medium text-[clamp(3.5rem,11vw,10rem)] leading-[0.95] reveal-up drop-shadow-2xl" style={{ animationDelay: "0.4s", animationDuration: "1.4s" }}>Whinary</h1>
          <div className="mx-auto mt-6 h-px w-24 bg-gold/70 reveal-up" style={{ animationDelay: "0.9s", animationDuration: "1.4s" }} />
          <p className="mt-8 font-script italic text-2xl md:text-3xl text-cream/90 reveal-up drop-shadow-lg" style={{ animationDelay: "1.2s", animationDuration: "1.6s" }}>Crafted from the earth. Aged for the ages.</p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 reveal-up" style={{ animationDelay: "1.6s", animationDuration: "1.4s" }}>
            <Link to="/shop" className="group inline-flex h-14 items-center gap-3 bg-burgundy px-9 text-[0.78rem] uppercase tracking-[0.25em] font-medium hover:bg-burgundy-deep transition-all hover:gap-5">
              Shop our wines <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/visit" className="inline-flex h-14 items-center border border-cream/70 px-9 text-[0.78rem] uppercase tracking-[0.25em] font-medium hover:bg-cream hover:text-burgundy transition-all">Book a tasting</Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/60 text-xs tracking-[0.3em] animate-pulse">↓ SCROLL</div>
    </section>
  );
}

const collections = [
  { label: "New Arrivals", desc: "Fresh from the harvest", to: "/shop" },
  { label: "Rare & Library", desc: "Limited single-vineyard bottlings", to: "/shop" },
  { label: "Organic & Natural", desc: "Biodynamic and low-intervention", to: "/shop" },
  { label: "Champagne", desc: "Méthode traditionnelle", to: "/shop" },
  { label: "Wine Club", desc: "Allocations every two months", to: "/wine-club" },
  { label: "Corporate Gifting", desc: "Hand-curated, hand-delivered", to: "/gifting" },
];

function FeaturedCollections() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container-luxe">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <p className="eyebrow">The Collection</p>
            <h2 className="mt-3 font-serif text-5xl md:text-6xl">A library of <em className="font-script">living</em> wines.</h2>
          </div>
          <Link to="/shop" className="inline-flex items-center gap-2 text-burgundy hover:gap-4 transition-all">View all <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
          {collections.map((c, i) => (
            <Link key={c.label} to={c.to} className="group relative aspect-[4/5] overflow-hidden bg-secondary hover-lift block">
              <img src={wines[(i * 3) % wines.length].image} alt={c.label} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-[1200ms] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy-deep/85 via-burgundy-deep/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-cream">
                <p className="eyebrow !text-gold/90">{c.desc}</p>
                <h3 className="mt-2 font-serif text-2xl md:text-3xl">{c.label}</h3>
                <div className="mt-4 inline-flex items-center gap-2 text-sm opacity-0 group-hover:opacity-100 transition translate-y-2 group-hover:translate-y-0">Explore <ArrowRight className="h-4 w-4" /></div>
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
          <img src={vineyardClose} alt="Ripe grapes on the vine" loading="lazy" className="hidden md:block absolute -bottom-16 -right-10 w-64 lg:w-80 shadow-bottle border-8 border-cream object-cover aspect-[4/5]" />
        </div>
        <div className="md:col-span-5">
          <p className="eyebrow">Our Philosophy</p>
          <h2 className="mt-4 font-serif text-5xl md:text-6xl text-balance">Three generations, <em className="font-script">one</em> patient hand.</h2>
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">Since 1987, the Lacroix family has tended these 42 hectares of limestone and clay in the heart of the Valle d'Or. We farm biodynamically, harvest by hand at dawn, and let the wines find their own voice in cellar.</p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">Every bottle carries the memory of a slow year — its weather, its rhythms, its quiet moments of grace.</p>
          <Link to="/about" className="mt-10 inline-flex items-center gap-3 text-burgundy border-b border-burgundy pb-1 hover:gap-5 transition-all">Read our story <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </section>
  );
}

function StatsStrip() {
  const stats = [["18", "Countries we ship to"], ["42", "Hectares under vine"], ["36", "Michelin partners"], ["100%", "Biodynamic farming"]];
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {wines.filter((w) => w.tags.includes("Best Seller") || w.tags.includes("Reserve")).slice(0, 4).map((w) => (
            <Link key={w.slug} to="/shop/$slug" params={{ slug: w.slug }} className="group block">
              <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
                <img src={w.image} alt={w.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-105" />
                <div className="absolute top-4 left-4 flex flex-col gap-1">
                  {w.tags.map((t) => (
                    <span key={t} className="bg-cream/90 text-burgundy text-[0.6rem] tracking-[0.18em] uppercase px-2 py-0.5">{t}</span>
                  ))}
                </div>
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <p className="eyebrow">{w.varietal}</p>
                  <h3 className="mt-1 font-serif text-xl group-hover:text-burgundy transition-colors">{w.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{w.vintage} · {w.region}</p>
                </div>
                <div className="font-serif text-xl text-burgundy">€{w.price}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperiencesPreview() {
  const items = [
    { title: "Cellar Tour", desc: "Walk our 300-year-old chalk caves.", img: cellarArch, eyebrow: "90 min · €45" },
    { title: "Vineyard Tasting", desc: "Five wines paired in the vines.", img: bannerTasting, eyebrow: "2 hours · €85" },
    { title: "Harvest Experience", desc: "Hand-pick grapes at dawn each September.", img: activityHarvest, eyebrow: "Sept · €180" },
  ];
  return (
    <section className="py-24 md:py-32 bg-secondary/40">
      <div className="container-luxe">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="eyebrow">Visit the Estate</p>
            <h2 className="mt-3 font-serif text-5xl md:text-6xl">Experiences in Provence</h2>
          </div>
          <Link to="/visit" className="inline-flex items-center gap-2 text-burgundy hover:gap-4 transition-all">See all experiences <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="grid md:grid-cols-3 gap-7">
          {items.map((it) => (
            <Link key={it.title} to="/visit" className="group block">
              <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
                <img src={it.img} alt={it.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy-deep/70 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-cream">
                  <p className="eyebrow !text-gold/90">{it.eyebrow}</p>
                  <h3 className="mt-2 font-serif text-3xl">{it.title}</h3>
                </div>
              </div>
              <p className="mt-5 text-muted-foreground leading-relaxed">{it.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function MembersTable() {
  return (
    <section className="relative h-[80vh] min-h-[560px] overflow-hidden text-cream">
      <img src={vineyardDining} alt="A long table set in the vineyard at golden hour" loading="lazy" className="absolute inset-0 h-full w-full object-cover animate-slower-zoom" />
      <div className="absolute inset-0 bg-gradient-to-t from-burgundy-deep/85 via-burgundy-deep/40 to-burgundy-deep/30" />
      <div className="grain absolute inset-0 opacity-40" />
      <div className="relative z-10 container-luxe h-full flex items-center justify-center">
        <div className="max-w-2xl text-center reveal-up">
          <p className="eyebrow !text-gold">The Whinary Wine Club</p>
          <h2 className="mt-6 font-serif text-5xl md:text-7xl text-balance drop-shadow-2xl">
            Six wines. Four seasons.
          </h2>
          <p className="mt-3 font-script italic text-3xl md:text-5xl text-gold drop-shadow-lg">One unforgettable year.</p>
          <p className="mt-8 text-cream/85 max-w-xl mx-auto leading-relaxed">
            Curated quarterly shipments, member-only allocations, and an annual invitation to harvest weekend at the estate.
          </p>
          <Link to="/wine-club" className="mt-10 inline-flex items-center gap-3 bg-gradient-gold text-burgundy-deep px-10 py-4 text-[0.72rem] uppercase tracking-[0.25em] font-medium hover:opacity-95 transition">
            Join the cellar list <ArrowRight className="h-4 w-4" />
          </Link>
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
    <section className="py-24 md:py-32">
      <div className="container-luxe">
        <p className="eyebrow text-center">In the Press</p>
        <div className="mt-10 grid md:grid-cols-3 gap-10">
          {press.map((p) => (
            <figure key={p.src} className="text-center">
              <blockquote className="font-serif text-2xl md:text-3xl text-balance italic text-foreground/90">"{p.quote}"</blockquote>
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
