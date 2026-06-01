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
      <div className="fixed top-0 inset-x-0 z-[60] bg-burgundy text-cream text-[0.65rem] tracking-[0.3em] uppercase text-center py-1.5 pointer-events-none">
        Demonstration Website · Not a Real Store
      </div>
      <Header transparent={transparentHeader} />
      <main className="pt-7">{children}</main>
      <Footer />
    </div>
  );
}

export function PageBanner({
  eyebrow,
  title,
  subtitle,
  image,
  tall = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: string;
  tall?: boolean;
}) {
  return (
    <section
      className={`relative overflow-hidden text-cream ${tall ? "h-[78vh] min-h-[560px]" : "h-[60vh] min-h-[440px]"}`}
    >
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover animate-slow-zoom"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/40 via-burgundy-deep/30 to-burgundy-deep/85" />
      <div className="grain absolute inset-0 opacity-50" />
      <div className="relative z-10 container-luxe h-full flex flex-col justify-end pb-16 md:pb-24">
        {eyebrow && <p className="eyebrow !text-gold reveal-up">{eyebrow}</p>}
        <h1
          className="mt-4 font-serif text-5xl md:text-7xl lg:text-8xl text-balance max-w-4xl reveal-up"
          style={{ animationDelay: "0.1s" }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="mt-6 max-w-2xl text-lg md:text-xl text-cream/80 font-script italic reveal-up"
            style={{ animationDelay: "0.2s" }}
          >
            {subtitle}
          </p>
        )}
        <div
          className="mt-8 h-px w-24 bg-gold reveal-up"
          style={{ animationDelay: "0.3s" }}
        />
      </div>
    </section>
  );
}

// Back-compat alias
export const PageHero = PageBanner;
