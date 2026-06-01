import { useEffect, useState, useSyncExternalStore } from "react";
import { wines, type Wine } from "./wines";

export type CartLine = { slug: string; qty: number };

const KEY = "whinary_cart_v1";
let listeners = new Set<() => void>();
let state: CartLine[] = typeof window !== "undefined" ? load() : [];

function load(): CartLine[] {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as CartLine[]) : [];
  } catch {
    return [];
  }
}
function persist() {
  try { localStorage.setItem(KEY, JSON.stringify(state)); } catch {}
  listeners.forEach((l) => l());
}
function getSnapshot() { return state; }
function getServerSnapshot(): CartLine[] { return []; }

export function addToCart(slug: string, qty = 1) {
  const existing = state.find((l) => l.slug === slug);
  state = existing
    ? state.map((l) => (l.slug === slug ? { ...l, qty: l.qty + qty } : l))
    : [...state, { slug, qty }];
  persist();
}
export function updateQty(slug: string, qty: number) {
  state = qty <= 0 ? state.filter((l) => l.slug !== slug) : state.map((l) => (l.slug === slug ? { ...l, qty } : l));
  persist();
}
export function removeFromCart(slug: string) { updateQty(slug, 0); }
export function clearCart() { state = []; persist(); }

export function useCart() {
  const lines = useSyncExternalStore(
    (cb) => { listeners.add(cb); return () => listeners.delete(cb); },
    getSnapshot,
    getServerSnapshot
  );
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const items = lines
    .map((l) => {
      const w = wines.find((w) => w.slug === l.slug);
      return w ? { wine: w as Wine, qty: l.qty } : null;
    })
    .filter(Boolean) as { wine: Wine; qty: number }[];
  const subtotal = items.reduce((s, i) => s + i.wine.price * i.qty, 0);
  const count = mounted ? items.reduce((s, i) => s + i.qty, 0) : 0;
  return { lines, items, subtotal, count };
}
