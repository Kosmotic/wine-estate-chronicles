import { createFileRoute, Link } from "@tanstack/react-router";
import { PageBanner, SiteLayout } from "@/components/site/SiteLayout";
import { Gift, Check, Sparkles } from "lucide-react";
import bannerGifting from "@/assets/brand/banner-gifting.jpg";
import giftThree from "@/assets/brand/gift-three.jpg";
import giftSix from "@/assets/brand/gift-six.jpg";
import giftTwelve from "@/assets/brand/gift-twelve.jpg";

export const Route = createFileRoute("/gifting")({
  head: () => ({
    meta: [
      { title: "Corporate Gifting — Whinary Estate" },
      { name: "description", content: "Hand-curated wine gifts for clients, teams, and special occasions. Bespoke packaging, branded notes, white-glove delivery." },
      { property: "og:title", content: "Corporate Gifting — Whinary" },
      { property: "og:description", content: "Curated wine gifts, branded and delivered." },
      { property: "og:image", content: bannerGifting },
    ],
  }),
  component: Gifting,
});

const boxes = [
  { title: "Three-Bottle Discovery", img: giftThree, price: 135, desc: "A curated trio in our linen-lined gift box.", perks: ["Branded card", "Silk ribbon", "Free shipping over €180"] },
  { title: "Six-Bottle Cellar Set", img: giftSix, price: 290, desc: "A half-case in our walnut presentation crate.", perks: ["Custom branding", "Walnut crate with leather handle", "Hand-written note", "Free shipping in EU"], featured: true },
  { title: "Twelve-Bottle Reserve", img: giftTwelve, price: 680, desc: "A full case of our finest, signed and numbered.", perks: ["Personalised engraving", "Concierge service", "Private virtual tasting included", "White-glove delivery"] },
];

function Gifting() {
  return (
    <SiteLayout transparentHeader>
      <PageBanner eyebrow="Corporate & Personal Gifting" title="Gifts that say something." subtitle="Curated wine selections for clients, teams and the people you want to thank properly." image={bannerGifting} tall />

      <section className="py-24">
        <div className="container-luxe">
          <div className="grid lg:grid-cols-3 gap-8">
            {boxes.map((b, i) => (
              <article key={b.title} className={`group overflow-hidden bg-card hover-lift reveal-up ${b.featured ? "lg:-translate-y-4 shadow-elegant" : "shadow-sm"}`} style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                  <img src={b.img} alt={b.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-110" />
                  {b.featured && <span className="absolute top-4 left-4 bg-gradient-gold text-burgundy-deep text-[0.65rem] tracking-[0.22em] uppercase px-3 py-1 font-medium">Most gifted</span>}
                </div>
                <div className="p-8">
                  <Gift className="h-6 w-6 text-gold" />
                  <h3 className="mt-4 font-serif text-2xl">{b.title}</h3>
                  <p className="mt-2 text-muted-foreground">{b.desc}</p>
                  <ul className="mt-6 space-y-2 text-sm">
                    {b.perks.map((p) => (
                      <li key={p} className="flex items-start gap-2"><Check className="h-4 w-4 text-gold mt-0.5 shrink-0" />{p}</li>
                    ))}
                  </ul>
                  <div className="mt-8 flex items-end justify-between">
                    <p className="font-serif text-3xl text-burgundy">From €{b.price}</p>
                    <Link to="/contact" className="text-sm text-burgundy border-b border-burgundy pb-0.5">Order</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/40">
        <div className="container-luxe grid md:grid-cols-3 gap-10">
          {[
            ["Branding", "Add your logo, company colours, or a custom message to every box."],
            ["Logistics", "We ship anywhere in the EU and UK. Worldwide on request."],
            ["Volume pricing", "Discounts from 25 boxes. Dedicated account manager from 100."],
          ].map(([t, d]) => (
            <div key={t}>
              <Sparkles className="h-5 w-5 text-gold" />
              <h3 className="mt-3 font-serif text-2xl">{t}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 text-center">
        <div className="container-luxe max-w-2xl">
          <h2 className="font-serif text-5xl">Have something larger in mind?</h2>
          <p className="mt-4 text-muted-foreground">We work with brands and individuals on bespoke programmes of any size — from twelve thank-you boxes to twelve hundred client gifts.</p>
          <Link to="/contact" className="mt-10 inline-block bg-burgundy text-cream px-10 py-4 text-[0.72rem] uppercase tracking-[0.25em] hover:bg-burgundy-deep transition">Talk to our gifting team</Link>
        </div>
      </section>
    </SiteLayout>
  );
}
