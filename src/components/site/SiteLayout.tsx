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
      <div className="bg-burgundy-deep text-cream/80 text-[0.65rem] tracking-[0.3em] uppercase text-center py-2 border-t border-gold/20">
        Demonstration Website · Not a Real Store
      </div>
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
        className="absolute inset-0 h-full w-full object-cover animate-slower-zoom"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/55 via-burgundy-deep/35 to-burgundy-deep/90" />
      <div className="grain absolute inset-0 opacity-50" />
      <div className="relative z-10 container-luxe h-full flex flex-col justify-end pb-16 md:pb-24">
        {eyebrow && <p className="eyebrow !text-gold reveal-up">{eyebrow}</p>}
        <h1
          className="mt-4 font-serif text-5xl md:text-7xl lg:text-8xl text-balance max-w-4xl reveal-up drop-shadow-lg"
          style={{ animationDelay: "0.1s" }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="mt-6 max-w-2xl text-lg md:text-xl text-cream/85 font-script italic reveal-up drop-shadow"
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
