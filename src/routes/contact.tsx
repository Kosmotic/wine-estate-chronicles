import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { MapPin, Clock, Phone, Mail, Instagram, Facebook, Youtube } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Whinary Estate" },
      { name: "description", content: "Get in touch with Whinary Estate. Estate address, opening hours, and direct lines." },
      { property: "og:title", content: "Contact Whinary Estate" },
      { property: "og:description", content: "We'd love to hear from you." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <SiteLayout>
      <section className="pt-40 pb-16 bg-secondary/40">
        <div className="container-luxe">
          <h1 className="font-serif text-6xl md:text-8xl">Contact</h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container-luxe grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl">We'd Love to Hear From You</h2>
            <div className="mt-12 space-y-8">
              <Info Icon={MapPin} label="Estate Address" lines={["1987 Chemin des Vignes", "Valle d'Or, Provence, France"]} />
              <Info Icon={Clock} label="Opening Hours" lines={["Wednesday – Sunday · 10:00 – 18:00"]} note="Closed Monday, Tuesday & Public Holidays" />
              <Info Icon={Phone} label="Phone" lines={["+33 (0)4 90 12 34 56"]} />
              <Info Icon={Mail} label="Email" lines={["contact@whinarywines.com"]} />
            </div>
            <div className="mt-10 flex gap-3">
              {[Instagram, Facebook, Youtube].map((I, i) => (
                <a key={i} href="#" className="grid h-10 w-10 place-items-center rounded-full border border-border hover:border-burgundy hover:text-burgundy transition">
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-serif text-3xl">Send a Message</h2>
            <form className="mt-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormField label="First Name" />
                <FormField label="Last Name" />
              </div>
              <FormField label="Email Address" type="email" />
              <FormField label="Subject" />
              <div>
                <p className="eyebrow">Department</p>
                <select className="w-full mt-2 h-12 bg-secondary/60 border-0 px-4 focus:outline-none">
                  <option>General Enquiry</option>
                  <option>Press</option>
                  <option>Wholesale</option>
                  <option>Wine Club</option>
                </select>
              </div>
              <div>
                <p className="eyebrow">Message</p>
                <textarea rows={6} className="w-full mt-2 bg-secondary/60 border-0 p-4 focus:outline-none" />
              </div>
              <button type="button" className="w-full h-14 bg-burgundy text-cream text-[0.72rem] uppercase tracking-[0.25em] font-medium hover:bg-burgundy-deep transition">
                Send Message
              </button>
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
      <div className="grid h-10 w-10 place-items-center rounded-full border border-border text-gold shrink-0">
        <Icon className="h-4 w-4" />
      </div>
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
      <input type={type} className="w-full mt-2 h-12 bg-secondary/60 border-0 px-4 focus:outline-none focus:bg-secondary transition" />
    </div>
  );
}
