import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function SiteLayout({
  children,
  transparentHeader = false,
}: {
  children: ReactNode;
  transparentHeader?: boolean;
}) {
  return (
    <div className="min-h-screen bg-background">
      <Header transparent={transparentHeader} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative pt-40 pb-20 bg-secondary/40">
      <div className="container-luxe">
        {eyebrow && <p className="eyebrow reveal-up">{eyebrow}</p>}
        <h1 className="mt-4 font-serif text-5xl md:text-7xl text-balance reveal-up" style={{ animationDelay: "0.1s" }}>
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground font-script reveal-up" style={{ animationDelay: "0.2s" }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
