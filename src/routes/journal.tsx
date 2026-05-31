import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";
import vineyard from "@/assets/brand/vineyard-aerial.jpg";
import hands from "@/assets/brand/hands-grapes.jpg";
import cellar from "@/assets/brand/cellar.jpg";
import tasting from "@/assets/brand/tasting.jpg";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "Journal — Whinary Estate" },
      { name: "description", content: "Field notes, harvest dispatches and slow reading from the Whinary estate." },
      { property: "og:title", content: "The Whinary Journal" },
      { property: "og:description", content: "Field notes and slow reading from Provence." },
    ],
  }),
  component: Journal,
});

const posts = [
  { title: "Notes from the 2024 harvest", date: "Oct 2024", read: "6 min", category: "Harvest", img: hands, excerpt: "A late, cool September gave us slow ripening and bright acid — a vintage to remember." },
  { title: "Why we ferment with native yeast", date: "Aug 2024", read: "4 min", category: "Craft", img: cellar, excerpt: "The microbiology of place. How the yeasts that live on our grapes become the wine itself." },
  { title: "Twelve hours in the Luberon", date: "Jun 2024", read: "8 min", category: "Travel", img: vineyard, excerpt: "Where to stop, eat, and breathe on a day trip through our corner of Provence." },
  { title: "Pairing rosé with August", date: "Jul 2024", read: "3 min", category: "Table", img: tasting, excerpt: "Five summer dishes that ask for a chilled glass of Rosé d'Or." },
];

function Journal() {
  return (
    <SiteLayout>
      <PageHero eyebrow="The Journal" title="Field notes from the vines." subtitle="Harvest dispatches, slow reading, and the occasional recipe." />
      <section className="py-20">
        <div className="container-luxe">
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-16">
            {posts.map((p, i) => (
              <Link to="/journal" key={p.title} className={`group ${i === 0 ? "md:col-span-2" : ""}`}>
                <div className={`relative overflow-hidden bg-secondary ${i === 0 ? "aspect-[16/8]" : "aspect-[5/4]"}`}>
                  <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-105" />
                </div>
                <div className="mt-6">
                  <p className="eyebrow">{p.category} · {p.date} · {p.read}</p>
                  <h2 className={`mt-3 font-serif group-hover:text-burgundy transition ${i === 0 ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl"}`}>{p.title}</h2>
                  <p className="mt-3 text-muted-foreground max-w-2xl">{p.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
