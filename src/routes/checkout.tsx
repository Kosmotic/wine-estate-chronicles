import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { useCart, clearCart } from "@/lib/cart";
import { CreditCard, Lock, CheckCircle2, Wallet } from "lucide-react";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout — Whinary Estate" },
      { name: "description", content: "Secure checkout for your Whinary order." },
    ],
  }),
  component: Checkout,
});

type Pay = "card" | "paypal" | "applepay" | "bank";

function Checkout() {
  const { items, subtotal } = useCart();
  const navigate = useNavigate();
  const [pay, setPay] = useState<Pay>("card");
  const [placing, setPlacing] = useState(false);
  const [done, setDone] = useState(false);
  const shipping = subtotal >= 150 || subtotal === 0 ? 0 : 14.9;
  const tax = +(subtotal * 0.2).toFixed(2);
  const total = subtotal + shipping + tax;

  const place = (e: React.FormEvent) => {
    e.preventDefault();
    setPlacing(true);
    setTimeout(() => {
      setDone(true);
      clearCart();
      setTimeout(() => navigate({ to: "/shop" }), 4000);
    }, 1500);
  };

  if (done) {
    return (
      <SiteLayout>
        <section className="pt-40 pb-32">
          <div className="container-luxe max-w-2xl mx-auto text-center">
            <CheckCircle2 className="h-16 w-16 text-gold mx-auto" />
            <h1 className="mt-6 font-serif text-5xl">Order placed.</h1>
            <p className="mt-4 text-muted-foreground text-lg">A confirmation will arrive in your inbox shortly. Thank you — this is a demonstration, so no real payment was taken.</p>
            <Link to="/shop" className="mt-10 inline-block bg-burgundy text-cream px-10 py-4 text-[0.72rem] uppercase tracking-[0.25em] hover:bg-burgundy-deep transition">Back to the cellar</Link>
          </div>
        </section>
      </SiteLayout>
    );
  }

  if (items.length === 0) {
    return (
      <SiteLayout>
        <section className="pt-40 pb-32 text-center container-luxe">
          <h1 className="font-serif text-4xl">Your cart is empty.</h1>
          <Link to="/shop" className="mt-6 inline-block text-burgundy underline">Continue shopping</Link>
        </section>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <section className="pt-36 pb-24">
        <div className="container-luxe">
          <p className="eyebrow">Secure Checkout · <Lock className="inline h-3 w-3" /> SSL encrypted</p>
          <h1 className="mt-3 font-serif text-5xl">Checkout</h1>

          <form onSubmit={place} className="mt-12 grid lg:grid-cols-[1fr_420px] gap-12">
            <div className="space-y-10">
              <Section title="Contact">
                <div className="grid md:grid-cols-2 gap-6">
                  <Field label="Email" type="email" required />
                  <Field label="Phone" type="tel" />
                </div>
              </Section>

              <Section title="Shipping Address">
                <div className="grid md:grid-cols-2 gap-6">
                  <Field label="First name" required />
                  <Field label="Last name" required />
                </div>
                <Field label="Street address" required />
                <div className="grid md:grid-cols-3 gap-6">
                  <Field label="City" required />
                  <Field label="Postal code" required />
                  <div>
                    <p className="eyebrow">Country</p>
                    <select className="w-full mt-2 h-12 bg-background border border-input px-4 focus:outline-none focus:border-burgundy">
                      <option>France</option><option>Belgium</option><option>Germany</option><option>Italy</option><option>Spain</option><option>Netherlands</option><option>United Kingdom</option>
                    </select>
                  </div>
                </div>
              </Section>

              <Section title="Payment">
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { id: "card" as const, label: "Credit / Debit Card", Icon: CreditCard },
                    { id: "paypal" as const, label: "PayPal", Icon: Wallet },
                    { id: "applepay" as const, label: "Apple Pay", Icon: Wallet },
                    { id: "bank" as const, label: "Bank Transfer (SEPA)", Icon: Wallet },
                  ].map(({ id, label, Icon }) => (
                    <button
                      type="button"
                      key={id}
                      onClick={() => setPay(id)}
                      className={`flex items-center gap-3 p-4 border transition ${pay === id ? "border-burgundy bg-burgundy/5" : "border-border hover:border-burgundy/50"}`}
                    >
                      <Icon className="h-5 w-5 text-burgundy" />
                      <span className="text-sm font-medium">{label}</span>
                      {pay === id && <span className="ml-auto h-2 w-2 rounded-full bg-burgundy" />}
                    </button>
                  ))}
                </div>

                {pay === "card" && (
                  <div className="mt-6 space-y-6 bg-secondary/40 p-6">
                    <Field label="Card number" placeholder="4242 4242 4242 4242" required />
                    <div className="grid grid-cols-2 gap-6">
                      <Field label="Expiry" placeholder="MM / YY" required />
                      <Field label="CVC" placeholder="123" required />
                    </div>
                    <Field label="Name on card" required />
                  </div>
                )}
                {pay === "paypal" && <p className="mt-6 p-4 bg-secondary/40 text-sm text-muted-foreground">You'll be redirected to PayPal to complete payment.</p>}
                {pay === "applepay" && <p className="mt-6 p-4 bg-secondary/40 text-sm text-muted-foreground">Use Touch ID or Face ID on your device to confirm.</p>}
                {pay === "bank" && <p className="mt-6 p-4 bg-secondary/40 text-sm text-muted-foreground">We'll email IBAN details once you place the order.</p>}
              </Section>

              <label className="flex items-start gap-3 text-sm text-muted-foreground">
                <input type="checkbox" required className="mt-1 accent-burgundy" />
                I confirm I am 18 or older and have read the terms of sale.
              </label>
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start bg-card shadow-elegant p-8 h-fit">
              <h2 className="font-serif text-2xl">Your Order</h2>
              <ul className="mt-6 space-y-4 max-h-72 overflow-auto pr-1">
                {items.map(({ wine, qty }) => (
                  <li key={wine.slug} className="flex gap-3">
                    <div className="relative w-14 shrink-0">
                      <img src={wine.image} alt="" className="aspect-[4/5] w-full object-cover bg-secondary" />
                      <span className="absolute -top-2 -right-2 grid h-5 w-5 place-items-center rounded-full bg-burgundy text-cream text-[0.65rem]">{qty}</span>
                    </div>
                    <div className="flex-1 text-sm">
                      <p className="font-serif">{wine.name}</p>
                      <p className="text-xs text-muted-foreground">{wine.vintage}</p>
                    </div>
                    <p className="text-sm font-medium">€{(wine.price * qty).toFixed(2)}</p>
                  </li>
                ))}
              </ul>
              <dl className="mt-6 pt-6 border-t border-border space-y-2 text-sm">
                <Row label="Subtotal" value={`€${subtotal.toFixed(2)}`} />
                <Row label="Shipping" value={shipping === 0 ? "Free" : `€${shipping.toFixed(2)}`} />
                <Row label="VAT (20%)" value={`€${tax.toFixed(2)}`} />
              </dl>
              <div className="mt-4 pt-4 border-t border-border flex items-baseline justify-between">
                <span className="eyebrow">Total</span>
                <span className="font-serif text-3xl text-burgundy">€{total.toFixed(2)}</span>
              </div>
              <button type="submit" disabled={placing} className="mt-8 w-full bg-burgundy text-cream py-4 text-[0.72rem] uppercase tracking-[0.25em] font-medium hover:bg-burgundy-deep transition disabled:opacity-60">
                {placing ? "Processing…" : `Place Order · €${total.toFixed(2)}`}
              </button>
              <p className="mt-3 text-center text-xs text-muted-foreground flex items-center justify-center gap-1.5"><Lock className="h-3 w-3" /> This is a demo — no real charge.</p>
            </aside>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-serif text-2xl border-b border-border pb-3">{title}</h2>
      <div className="mt-6 space-y-6">{children}</div>
    </section>
  );
}
function Field({ label, type = "text", placeholder, required }: { label: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <p className="eyebrow">{label}{required && <span className="text-burgundy ml-1">*</span>}</p>
      <input type={type} required={required} placeholder={placeholder} className="w-full mt-2 h-12 bg-background border border-input px-4 focus:outline-none focus:border-burgundy transition" />
    </div>
  );
}
function Row({ label, value }: { label: string; value: string }) {
  return <div className="flex justify-between"><span className="text-muted-foreground">{label}</span><span className="font-medium">{value}</span></div>;
}
