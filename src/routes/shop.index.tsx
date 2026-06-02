import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageBanner, SiteLayout } from "@/components/site/SiteLayout";
import { wines } from "@/lib/wines";
import { Search } from "lucide-react";
import banner from "@/assets/brand/banner-shop.jpg";
import { addToCart } from "@/lib/cart";

export const Route = createFileRoute("/shop/")({
  head: () => ({
    meta: [
      { title: "Our Wines — Whinary Estate" },
      { name: "description", content: "Browse our collection of 18 organic, biodynamic and rare wines from the Valle d'Or estate." },
      { property: "og:title", content: "Our Wines — Whinary Estate" },
      { property: "og:description", content: "Browse the Whinary Estate collection." },
      { property: "og:image", content: banner },
    ],
  }),
  component: ShopPage,
});

const types = ["All", "Red", "White", "Rosé", "Sparkling", "Dessert"] as const;

function ShopPage() {
  const [type, setType] = useState<(typeof types)[number]>("All");
  const [query, setQuery] = useState("");
  const [organic, setOrganic] = useState(false);
  const [max, setMax] = useState(340);
  const [sort, setSort] = useState<"newest" | "asc" | "desc">("newest");

  const filtered = useMemo(() => {
    let r = wines.filter((w) => {
      if (type !== "All" && w.type !== type) return false;
      if (w.price > max) return false;
      if (organic && !w.tags.some((t) => /organic|biodynamic|natural/i.test(t))) return false;
      if (query && !`${w.name} ${w.varietal} ${w.region}`.toLowerCase().includes(query.toLowerCase())) return false;
      return true;
    });
    if (sort === "asc") r = [...r].sort((a, b) => a.price - b.price);
    if (sort === "desc") r = [...r].sort((a, b) => b.price - a.price);
    return r;
  }, [type, max, organic, query, sort]);

  return (
    <SiteLayout transparentHeader>
      <PageBanner eyebrow="The Collection" title="Our Wines" subtitle="Eighteen estate wines, made in vanishingly small quantities, with patience and intention." image={banner} />

      <section className="py-16">
        <div className="container-luxe grid lg:grid-cols-[280px_1fr] gap-12">
          <aside className="lg:sticky lg:top-28 lg:self-start space-y-10">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search wines" className="w-full h-11 pl-10 pr-3 bg-cream border-b border-border focus:outline-none focus:border-burgundy transition" />
            </div>
            <div>
              <p className="eyebrow">Wine type</p>
              <div className="mt-4 space-y-2">
                {types.map((t) => (
                  <button key={t} onClick={() => setType(t)} className={`block w-full text-left py-1.5 text-sm transition-colors ${type === t ? "text-burgundy" : "text-muted-foreground hover:text-foreground"}`}>
                    {type === t && <span className="text-gold mr-2">—</span>}{t}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="eyebrow">Max price</p>
              <input type="range" min={30} max={340} value={max} onChange={(e) => setMax(Number(e.target.value))} className="w-full mt-4 accent-burgundy" />
              <div className="text-sm text-muted-foreground mt-1">Up to €{max}</div>
            </div>
            <label className="flex items-center gap-3 text-sm cursor-pointer">
              <input type="checkbox" checked={organic} onChange={(e) => setOrganic(e.target.checked)} className="h-4 w-4 accent-burgundy" />
              Organic, biodynamic & natural
            </label>
          </aside>

          <div>
            <div className="flex justify-between items-end mb-8">
              <p className="text-muted-foreground text-sm">{filtered.length} wines</p>
              <select value={sort} onChange={(e) => setSort(e.target.value as typeof sort)} className="bg-transparent border-b border-border text-sm py-1 pr-6 focus:outline-none">
                <option value="newest">Newest first</option>
                <option value="asc">Price: low to high</option>
                <option value="desc">Price: high to low</option>
              </select>
            </div>
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-x-7 gap-y-12">
              {filtered.map((w) => (
                <Link key={w.slug} to="/shop/$slug" params={{ slug: w.slug }} className="group block hover-lift transition-all">
                  <div className="relative aspect-[4/5] overflow-hidden bg-secondary ring-1 ring-transparent group-hover:ring-2 group-hover:ring-burgundy/60 transition-all">
                    <img src={w.image} alt={w.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-110" />
                    <div className="absolute inset-0 bg-burgundy-deep/0 group-hover:bg-burgundy-deep/15 transition-colors" />
                    <div className="absolute top-3 left-3 flex flex-col gap-1">
                      {w.tags.map((t) => (
                        <span key={t} className="bg-cream/95 text-burgundy text-[0.6rem] tracking-[0.18em] uppercase px-2 py-0.5">{t}</span>
                      ))}
                    </div>
                    <button onClick={(e) => { e.preventDefault(); addToCart(w.slug); }} className="absolute bottom-3 left-3 right-3 bg-burgundy text-cream py-3 text-[0.7rem] uppercase tracking-[0.22em] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all hover:bg-burgundy-deep">
                      Quick add — €{w.price}
                    </button>
                  </div>
                  <div className="mt-4 flex justify-between items-start gap-3">
                    <div>
                      <p className="eyebrow">{w.varietal} · {w.vintage}</p>
                      <h3 className="mt-1 font-serif text-xl group-hover:text-burgundy transition-colors">{w.name}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{w.region}</p>
                    </div>
                    <div className="font-serif text-xl text-burgundy">€{w.price}</div>
                  </div>
                </Link>
              ))}
            </div>
            {filtered.length === 0 && <p className="text-center py-20 text-muted-foreground">No wines match those filters.</p>}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
