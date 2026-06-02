import { createFileRoute } from "@tanstack/react-router";
import { PageBanner, SiteLayout } from "@/components/site/SiteLayout";
import { Calendar, Clock, Users } from "lucide-react";
import vineyardDining from "@/assets/brand/vineyard-dining.jpg";
import cellarArch from "@/assets/brand/cellar-arch.jpg";
import activityWalk from "@/assets/brand/activity-walk.jpg";
import bannerTasting from "@/assets/brand/banner-tasting.jpg";
import activityHarvest from "@/assets/brand/activity-harvest.jpg";
import activityBlending from "@/assets/brand/activity-blending.jpg";
import activityWedding from "@/assets/brand/activity-wedding.jpg";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Visit the Estate — Whinary" },
      { name: "description", content: "Book a cellar tour, vineyard walk, wine tasting, harvest experience, blending workshop or estate wedding at our Provence estate." },
      { property: "og:title", content: "Visit Whinary Estate" },
      { property: "og:description", content: "Cellar tours, tastings, harvests and weddings in the vines." },
      { property: "og:image", content: vineyardDining },
    ],
  }),
  component: Visit,
});

const experiences = [
  { title: "Cellar Tour", desc: "A 90-minute walk through our 300-year-old chalk caves, ending with a tasting straight from the barrel of a wine that isn't bottled yet.", img: cellarArch, price: 45, duration: "90 min", group: "2 – 10 guests", season: "Year-round" },
  { title: "Vineyard Walk", desc: "Two hours among the vines with our viticulturist. We stop at the oldest parcel, the biodynamic plot, and the wild flowering margins.", img: activityWalk, price: 35, duration: "2 hours", group: "2 – 14 guests", season: "April – October" },
  { title: "Wine Tasting Lunch", desc: "Five wines paired with estate cheese, Provençal charcuterie and warm bread, served at a long table among the vines at golden hour.", img: bannerTasting, price: 85, duration: "2.5 hours", group: "2 – 20 guests", season: "May – September" },
  { title: "Harvest Experience", desc: "Pick grapes with us at dawn during the September harvest, then a long lunch with the family and an afternoon in the cellar watching the press fill.", img: activityHarvest, price: 180, duration: "Full day", group: "2 – 8 guests", season: "September only" },
  { title: "Blending Workshop", desc: "Sit at the cellar bench and blend your own cuvée from three single-varietal base wines. Bottle, cork, label, and take it home with you.", img: activityBlending, price: 120, duration: "3 hours", group: "2 – 6 guests", season: "Year-round" },
  { title: "Estate Wedding", desc: "Marry under the plane trees, dine in the vines, dance in the cellar. Up to 120 guests. Fully catered, fully ours, fully unforgettable.", img: activityWedding, price: 14000, priceLabel: "From", duration: "Full weekend", group: "Up to 120", season: "April – October" },
];

function Visit() {
  return (
    <SiteLayout transparentHeader>
      <PageBanner eyebrow="The Estate" title="Spend a day in Provence with us." subtitle="We open the gates Wednesday through Sunday. Bring a friend, an appetite, and time enough to linger." image={vineyardDining} tall />

      <section className="py-24">
        <div className="container-luxe space-y-24">
          {experiences.map((e, i) => (
            <article key={e.title} className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center reveal-up ${i % 2 ? "lg:[direction:rtl]" : ""}`}>
              <div className="relative group overflow-hidden">
                <img src={e.img} alt={e.title} loading="lazy" className="aspect-[4/3] w-full object-cover shadow-elegant transition-transform duration-[1500ms] group-hover:scale-105" />
                <div className="absolute top-4 left-4 bg-burgundy text-cream px-4 py-2 text-[0.65rem] tracking-[0.22em] uppercase">{`Experience ${String(i + 1).padStart(2, "0")}`}</div>
              </div>
              <div className="[direction:ltr]">
                <p className="eyebrow">{e.season}</p>
                <h2 className="mt-3 font-serif text-4xl md:text-5xl">{e.title}</h2>
                <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{e.desc}</p>
                <div className="mt-8 grid sm:grid-cols-3 gap-4 text-sm">
                  <Detail Icon={Clock} label="Duration" value={e.duration} />
                  <Detail Icon={Users} label="Group" value={e.group} />
                  <Detail Icon={Calendar} label="Season" value={e.season} />
                </div>
                <div className="mt-8 flex items-end justify-between gap-6 border-t border-border pt-6">
                  <div>
                    <p className="eyebrow">{(e as { priceLabel?: string }).priceLabel ?? "Price"}</p>
                    <p className="mt-1 font-serif text-3xl text-burgundy">€{e.price.toLocaleString()} <span className="text-sm text-muted-foreground font-sans">{e.title === "Estate Wedding" ? "all-in" : "per person"}</span></p>
                  </div>
                  <a href="#reserve" className="inline-flex h-12 items-center bg-burgundy text-cream px-7 text-[0.7rem] uppercase tracking-[0.25em] font-medium hover:bg-burgundy-deep transition">Reserve</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="reserve" className="py-24 bg-secondary/40">
        <div className="container-luxe max-w-3xl">
          <div className="text-center">
            <Calendar className="h-7 w-7 text-gold mx-auto" />
            <h2 className="mt-4 font-serif text-5xl">Reserve Your Visit</h2>
            <p className="mt-3 text-muted-foreground font-script text-lg">We respond to all enquiries within one business day.</p>
          </div>
          <form className="mt-12 bg-card p-8 md:p-12 shadow-elegant space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <Field label="Full Name" placeholder="Your name" />
              <Field label="Email Address" type="email" placeholder="your@email.com" />
            </div>
            <div>
              <Label>Experience</Label>
              <select className="w-full mt-2 h-12 bg-background border border-input px-4 focus:outline-none focus:border-burgundy">
                <option>Select an experience</option>
                {experiences.map((e) => <option key={e.title}>{e.title}</option>)}
              </select>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Field label="Preferred Date" type="date" />
              <div>
                <Label>Number of Guests</Label>
                <select className="w-full mt-2 h-12 bg-background border border-input px-4 focus:outline-none focus:border-burgundy">
                  {[1,2,3,4,5,6,7,8,10,12,15,20].map(n => <option key={n}>{n}</option>)}
                </select>
              </div>
            </div>
            <div>
              <Label>Special Requests</Label>
              <textarea rows={4} placeholder="Dietary requirements, special occasions, questions..." className="w-full mt-2 bg-background border border-input p-4 focus:outline-none focus:border-burgundy" />
            </div>
            <button type="submit" className="w-full h-14 bg-burgundy text-cream text-[0.72rem] uppercase tracking-[0.25em] font-medium hover:bg-burgundy-deep transition">Send Enquiry</button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}

function Detail({ Icon, label, value }: { Icon: typeof Clock; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="h-4 w-4 text-gold mt-1 shrink-0" />
      <div>
        <p className="eyebrow !text-[0.62rem]">{label}</p>
        <p className="mt-1 text-foreground/85">{value}</p>
      </div>
    </div>
  );
}
function Label({ children }: { children: React.ReactNode }) { return <label className="eyebrow block">{children}</label>; }
function Field({ label, type = "text", placeholder }: { label: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <Label>{label}</Label>
      <input type={type} placeholder={placeholder} className="w-full mt-2 h-12 bg-background border border-input px-4 focus:outline-none focus:border-burgundy" />
    </div>
  );
}
