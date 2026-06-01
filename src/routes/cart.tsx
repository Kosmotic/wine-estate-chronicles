import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { useCart, updateQty, removeFromCart } from "@/lib/cart";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your Cart — Whinary Estate" },
      { name: "description", content: "Review the wines in your cart and proceed to checkout." },
    ],
  }),
  component: Cart,
});

function Cart() {
  const { items, subtotal } = useCart();
  const shipping = subtotal >= 150 || subtotal === 0 ? 0 : 14.9;
  const total = subtotal + shipping;

  return (
    <SiteLayout>
      <section className="pt-36 pb-20">
        <div className="container-luxe">
          <p className="eyebrow">Shopping</p>
          <h1 className="mt-3 font-serif text-5xl md:text-6xl">Your Cart</h1>

          {items.length === 0 ? (
            <div className="mt-16 max-w-md mx-auto text-center py-16 border border-dashed border-border">
              <ShoppingBag className="h-10 w-10 text-gold mx-auto" />
              <p className="mt-4 font-serif text-2xl">Your cart is empty.</p>
              <p className="mt-2 text-muted-foreground">A few bottles will fix that.</p>
              <Link to="/shop" className="mt-8 inline-block bg-burgundy text-cream px-8 py-3 text-[0.72rem] uppercase tracking-[0.25em] hover:bg-burgundy-deep transition">Browse the wines</Link>
            </div>
          ) : (
            <div className="mt-12 grid lg:grid-cols-[1fr_380px] gap-12">
              <ul className="divide-y divide-border border-y border-border">
                {items.map(({ wine, qty }) => (
                  <li key={wine.slug} className="py-6 flex gap-5">
                    <Link to="/shop/$slug" params={{ slug: wine.slug }} className="w-24 sm:w-28 shrink-0">
                      <img src={wine.image} alt={wine.name} loading="lazy" className="aspect-[4/5] w-full object-cover bg-secondary" />
                    </Link>
                    <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <p className="eyebrow">{wine.varietal} · {wine.vintage}</p>
                        <Link to="/shop/$slug" params={{ slug: wine.slug }} className="block mt-1 font-serif text-xl hover:text-burgundy transition">{wine.name}</Link>
                        <p className="text-sm text-muted-foreground">{wine.region}</p>
                        <p className="mt-2 font-serif text-lg text-burgundy sm:hidden">€{(wine.price * qty).toFixed(2)}</p>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="flex items-center border border-border">
                          <button onClick={() => updateQty(wine.slug, qty - 1)} className="p-2 hover:bg-secondary"><Minus className="h-3.5 w-3.5" /></button>
                          <span className="w-10 text-center font-serif">{qty}</span>
                          <button onClick={() => updateQty(wine.slug, qty + 1)} className="p-2 hover:bg-secondary"><Plus className="h-3.5 w-3.5" /></button>
                        </div>
                        <p className="font-serif text-xl text-burgundy hidden sm:block w-24 text-right">€{(wine.price * qty).toFixed(2)}</p>
                        <button onClick={() => removeFromCart(wine.slug)} aria-label="Remove" className="text-muted-foreground hover:text-burgundy"><Trash2 className="h-4 w-4" /></button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <aside className="lg:sticky lg:top-28 lg:self-start bg-card p-8 shadow-elegant h-fit">
                <h2 className="font-serif text-2xl">Order Summary</h2>
                <dl className="mt-6 space-y-3 text-sm">
                  <Row label="Subtotal" value={`€${subtotal.toFixed(2)}`} />
                  <Row label="Shipping" value={shipping === 0 ? "Free" : `€${shipping.toFixed(2)}`} />
                  {subtotal < 150 && subtotal > 0 && <p className="text-xs text-muted-foreground">Add €{(150 - subtotal).toFixed(2)} for free EU shipping</p>}
                </dl>
                <div className="mt-6 pt-6 border-t border-border flex items-baseline justify-between">
                  <span className="eyebrow">Total</span>
                  <span className="font-serif text-3xl text-burgundy">€{total.toFixed(2)}</span>
                </div>
                <Link to="/checkout" className="mt-8 w-full inline-flex items-center justify-center gap-3 bg-burgundy text-cream py-4 text-[0.72rem] uppercase tracking-[0.25em] font-medium hover:bg-burgundy-deep transition">
                  Proceed to checkout <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/shop" className="mt-4 block text-center text-sm text-burgundy hover:underline">Continue shopping</Link>
              </aside>
            </div>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between"><span className="text-muted-foreground">{label}</span><span className="font-medium">{value}</span></div>
  );
}
