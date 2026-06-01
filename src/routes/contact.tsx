import { createFileRoute } from "@tanstack/react-router";
import { PageBanner, SiteLayout } from "@/components/site/SiteLayout";
import { MapPin, Clock, Phone, Mail, Instagram, Facebook, Youtube } from "lucide-react";
import banner from "@/assets/brand/banner-vineyards.jpg";

const EMAIL = "contact@whinarywines.com";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Whinary Estate" },
      { name: "description", content: "Get in touch with Whinary Estate. Estate address, opening hours, and direct lines." },
      { property: "og:title", content: "Contact Whinary Estate" },
      { property: "og:description", content: "We'd love to hear from you." },
      { property: "og:image", content: banner },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <SiteLayout transparentHeader>
      <PageBanner eyebrow="Get in touch" title="We'd love to hear from you." subtitle="Press, partnerships, wholesale, weddings — or just a question about a bottle." image={banner} />

      <section className="py-24">
        <div className="container-luxe grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl">Visit, write, ring.</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-md">We respond to every enquiry within one business day. For tastings and visits, see the booking form on the Visit page.</p>
            <div className="mt-12 space-y-8">
              <Info Icon={MapPin} label="Estate Address" lines={["1987 Chemin des Vignes", "Valle d'Or, Provence, France"]} />
              <Info Icon={Clock} label="Opening Hours" lines={["Wednesday – Sunday · 10:00 – 18:00"]} note="Closed Monday, Tuesday & Public Holidays" />
              <Info Icon={Phone} label="Phone" lines={["+33 (0)4 90 12 34 56"]} />
              <Info Icon={Mail} label="Email" lines={[EMAIL]} />
            </div>
            <div className="mt-10 flex gap-3">
              {[Instagram, Facebook, Youtube].map((I, i) => (
                <a key={i} href="#" className="grid h-10 w-10 place-items-center rounded-full border border-border hover:border-burgundy hover:text-burgundy transition">
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="bg-card p-8 md:p-12 shadow-elegant">
            <h2 className="font-serif text-3xl">Send a Message</h2>
            <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <FormField label="First Name" />
                <FormField label="Last Name" />
              </div>
              <FormField label="Email Address" type="email" />
              <FormField label="Subject" />
              <div>
                <p className="eyebrow">Department</p>
                <select className="w-full mt-2 h-12 bg-background border border-input px-4 focus:outline-none focus:border-burgundy">
                  <option>General Enquiry</option>
                  <option>Press</option>
                  <option>Wholesale</option>
                  <option>Wine Club</option>
                  <option>Gifting</option>
                  <option>Weddings & Events</option>
                </select>
              </div>
              <div>
                <p className="eyebrow">Message</p>
                <textarea rows={6} className="w-full mt-2 bg-background border border-input p-4 focus:outline-none focus:border-burgundy" />
              </div>
              <button type="submit" className="w-full h-14 bg-burgundy text-cream text-[0.72rem] uppercase tracking-[0.25em] font-medium hover:bg-burgundy-deep transition">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Info({ Icon, label, lines, note }: { Icon: typeof MapPin; label: string; lines: string[]; note?: string }) {
  return (
    <div className="flex gap-4">
      <div className="grid h-10 w-10 place-items-center rounded-full border border-border text-gold shrink-0"><Icon className="h-4 w-4" /></div>
      <div>
        <p className="eyebrow">{label}</p>
        <div className="mt-2 font-script text-lg leading-relaxed">
          {lines.map((l) => <div key={l}>{l}</div>)}
        </div>
        {note && <p className="text-sm text-gold mt-1">{note}</p>}
      </div>
    </div>
  );
}
function FormField({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <div>
      <p className="eyebrow">{label}</p>
      <input type={type} className="w-full mt-2 h-12 bg-background border border-input px-4 focus:outline-none focus:border-burgundy transition" />
    </div>
  );
}
