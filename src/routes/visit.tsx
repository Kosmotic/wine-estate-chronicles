import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";
import { Calendar } from "lucide-react";
import cellar from "@/assets/brand/cellar.jpg";
import tasting from "@/assets/brand/tasting.jpg";
import yoga from "@/assets/brand/yoga-vines.jpg";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Visit the Estate — Whinary" },
      { name: "description", content: "Book a cellar tour, vineyard tasting, or sunrise yoga at our Provence estate." },
      { property: "og:title", content: "Visit Whinary Estate" },
      { property: "og:description", content: "Cellar tours, tastings, and slow mornings in the vines." },
    ],
  }),
  component: Visit,
});

const experiences = [
  { title: "Cellar Tour & Tasting", desc: "A 90-minute walk through our 300-year-old chalk caves, ending with a tasting straight from the barrel.", img: cellar, price: 45 },
  { title: "Vineyard Tasting Lunch", desc: "Five wines paired with estate cheese, Provençal charcuterie, and warm bread, served among the vines.", img: tasting, price: 85 },
  { title: "Sunrise Yoga & Wine", desc: "Slow vinyasa flow in the vines at first light, followed by breakfast and a glass of our Cuvée Lumineuse.", img: yoga, price: 60 },
];

function Visit() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="The Estate"
        title="Spend a day in Provence with us."
        subtitle="We open the gates Wednesday through Sunday. Bring a friend, an appetite, and time enough to linger."
      />

      <section className="py-20">
        <div className="container-luxe space-y-20">
          {experiences.map((e, i) => (
            <article key={e.title} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 ? "lg:[direction:rtl]" : ""}`}>
              <img src={e.img} alt={e.title} loading="lazy" className="aspect-[4/3] w-full object-cover shadow-elegant" />
              <div className="[direction:ltr]">
                <p className="eyebrow">Experience {String(i + 1).padStart(2, "0")}</p>
                <h2 className="mt-3 font-serif text-4xl md:text-5xl">{e.title}</h2>
                <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{e.desc}</p>
                <p className="mt-6 font-serif text-3xl text-burgundy">€{e.price} <span className="text-sm text-muted-foreground font-sans">per person</span></p>
                <a href="#reserve" className="mt-8 inline-flex h-13 items-center bg-burgundy text-cream px-8 py-4 text-[0.72rem] uppercase tracking-[0.25em] font-medium hover:bg-burgundy-deep transition">
                  Reserve
                </a>
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

          <form className="mt-12 bg-card p-8 md:p-12 shadow-elegant space-y-6">
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
                  {[1,2,3,4,5,6,7,8].map(n => <option key={n}>{n}</option>)}
                </select>
              </div>
            </div>
            <div>
              <Label>Special Requests</Label>
              <textarea rows={4} placeholder="Dietary requirements, special occasions, questions..." className="w-full mt-2 bg-background border border-input p-4 focus:outline-none focus:border-burgundy" />
            </div>
            <button type="button" className="w-full h-14 bg-burgundy text-cream text-[0.72rem] uppercase tracking-[0.25em] font-medium hover:bg-burgundy-deep transition">
              Send Enquiry
            </button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="eyebrow block">{children}</label>;
}
function Field({ label, type = "text", placeholder }: { label: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <Label>{label}</Label>
      <input type={type} placeholder={placeholder} className="w-full mt-2 h-12 bg-background border border-input px-4 focus:outline-none focus:border-burgundy" />
    </div>
  );
}
