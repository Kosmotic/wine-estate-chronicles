import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { findWine, wines } from "@/lib/wines";
import { ArrowRight, Minus, Plus, ShoppingBag, Leaf, Award } from "lucide-react";

export const Route = createFileRoute("/shop/$slug")({
  loader: ({ params }) => {
    const wine = findWine(params.slug);
    if (!wine) throw notFound();
    return { wine };
  },
  head: ({ loaderData }) =>
    loaderData
      ? {
          meta: [
            { title: `${loaderData.wine.name} — Whinary Estate` },
            { name: "description", content: loaderData.wine.description },
            { property: "og:title", content: `${loaderData.wine.name} · ${loaderData.wine.varietal}` },
            { property: "og:description", content: loaderData.wine.description },
            { property: "og:image", content: loaderData.wine.image },
          ],
        }
      : {},
  notFoundComponent: () => (
    <SiteLayout>
      <div className="pt-40 pb-32 text-center container-luxe">
        <h1 className="font-serif text-5xl">Wine not found</h1>
        <Link to="/shop" className="mt-6 inline-block text-burgundy">← Back to wines</Link>
      </div>
    </SiteLayout>
  ),
  errorComponent: ({ error, reset }) => (
    <SiteLayout>
      <div className="pt-40 pb-32 text-center container-luxe">
        <h1 className="font-serif text-3xl">Something went wrong</h1>
        <p className="mt-2 text-muted-foreground">{error.message}</p>
        <button onClick={reset} className="mt-6 text-burgundy">Try again</button>
      </div>
    </SiteLayout>
  ),
  component: WineDetail,
});

function WineDetail() {
  const { wine } = Route.useLoaderData();
  const [qty, setQty] = useState(1);
  const related = wines.filter((w) => w.slug !== wine.slug).slice(0, 3);

  return (
    <SiteLayout>
      <section className="pt-32 pb-20">
        <div className="container-luxe">
          <Link to="/shop" className="eyebrow !text-muted-foreground hover:!text-burgundy transition">← Back to wines</Link>
          <div className="mt-8 grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Image */}
            <div className="relative">
              <div className="sticky top-28">
                <div className="relative aspect-[4/5] bg-secondary overflow-hidden shadow-bottle">
                  <img src={wine.image} alt={wine.name} className="h-full w-full object-cover" />
                </div>
              </div>
            </div>

            {/* Details */}
            <div>
              <p className="eyebrow">{wine.varietal}</p>
              <h1 className="mt-3 font-serif text-5xl md:text-6xl">{wine.name}</h1>
              <p className="mt-3 text-muted-foreground">{wine.vintage} · {wine.region}</p>

              <div className="mt-8 space-y-6 max-w-prose">
                <TastingBlock label="Appearance" text={wine.tasting.appearance} />
                <TastingBlock label="Nose" text={wine.tasting.nose} />
                <TastingBlock label="Palate" text={wine.tasting.palate} />
                <TastingBlock label="Finish" text={wine.tasting.finish} />
              </div>

              <div className="mt-10">
                <p className="eyebrow">Food Pairing</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {wine.pairings.map((p: string) => (
                    <span key={p} className="border border-border px-4 py-2 text-sm text-foreground/80">
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-12 border-t border-border pt-8 flex flex-wrap items-end gap-6 justify-between">
                <div>
                  <div className="font-serif text-5xl text-burgundy">${wine.price}</div>
                  <p className="mt-1 text-sm text-muted-foreground">per bottle · {wine.abv}% alc.</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-border">
                    <button onClick={() => setQty(Math.max(1, qty - 1))} className="p-3 hover:bg-secondary transition" aria-label="Decrease">
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-10 text-center font-serif">{qty}</span>
                    <button onClick={() => setQty(qty + 1)} className="p-3 hover:bg-secondary transition" aria-label="Increase">
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <button className="inline-flex h-14 items-center gap-3 bg-burgundy text-cream px-8 text-[0.72rem] uppercase tracking-[0.25em] font-medium hover:bg-burgundy-deep transition">
                    <ShoppingBag className="h-4 w-4" /> Add to cart
                  </button>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2"><Leaf className="h-4 w-4 text-gold" /> Biodynamic farming</span>
                <span className="inline-flex items-center gap-2"><Award className="h-4 w-4 text-gold" /> Hand-harvested</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/40">
        <div className="container-luxe grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <p className="eyebrow">Producer Story</p>
            <h2 className="mt-3 font-serif text-4xl">{wine.region}</h2>
          </div>
          <p className="md:col-span-7 text-lg text-muted-foreground leading-relaxed">
            {wine.description}
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container-luxe">
          <div className="flex justify-between items-end mb-12">
            <h2 className="font-serif text-4xl md:text-5xl">You may also like</h2>
            <Link to="/shop" className="inline-flex items-center gap-2 text-burgundy hover:gap-4 transition-all">
              All wines <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-3 gap-7">
            {related.map((w) => (
              <Link key={w.slug} to="/shop/$slug" params={{ slug: w.slug }} className="group">
                <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
                  <img src={w.image} alt={w.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-105" />
                </div>
                <h3 className="mt-4 font-serif text-xl group-hover:text-burgundy transition">{w.name}</h3>
                <p className="text-sm text-muted-foreground">${w.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function TastingBlock({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p className="eyebrow">{label}</p>
      <p className="mt-2 text-foreground/85 leading-relaxed">{text}</p>
    </div>
  );
}
