/**
 * shared.tsx — Shared constants, hooks, and components used across all pages.
 * Imported by: index.tsx, about.tsx, projects.tsx
 */
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Menu, X, MessageCircle, MapPin, ArrowRight,
  Instagram, Facebook, Linkedin, Youtube,
  ShieldCheck, Eye, Globe2, Users,
} from "lucide-react";
import amnariLogo from "@/assets/Amnari_Properties__Update.png";
// Developer logo imports removed
// Project images
import wraithImg from "@/assets/wraith by binghatti.webp";
import rawDistrictOneImg from "@/assets/raw district one.jpg";
import tilalImg from "@/assets/Tilal binghatti.jpg";
import greenzImg from "@/assets/greenz by danube.jpg";
import golfValeImg from "@/assets/Golf-Vale-at-Emaar.webp";
import mercedesImg from "@/assets/Binghatti-Mercedes-Benz-Places.webp";
import ivoryImg from "@/assets/ivory by dammac.jpg";
import greencrestImg from "@/assets/greencrest by emar (1).jpg";
import terraWoodsImg from "@/assets/terrawoods by emmar.webp";


// ── Constants ─────────────────────────────────────────────────────────────────

export const WHATSAPP = "https://wa.me/971547521139?text=Hello%20Amnari%20Properties%2C%20I%20am%20interested%20in%20learning%20more%20about%20your%20properties.";

/** Nav items — "About" and "Projects" navigate to dedicated pages */
export const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Partners", href: "/#partners" },
  { label: "Projects", href: "/projects" },
  { label: "Social", href: "/#social" },
  { label: "Contact", href: "/contact" },
];

export const PROJECTS = [
  {
    name: "Binghatti Wraith",
    developer: "Binghatti",
    loc: "Al Jaddaf",
    bedrooms: "Studio, 1 BR, 2 BR, 3 BR",
    price: "AED 799K",
    img: wraithImg,
    handover: "Q4 2027",
  },
  {
    name: "RAW District One",
    developer: "Imtiaz Developments",
    loc: "Downtown Jebel Ali",
    bedrooms: "Studio, 1, 2, 3 BR",
    price: "AED 649K",
    img: rawDistrictOneImg,
    handover: "Q4 2029",
  },
  {
    name: "Tilal Binghatti",
    developer: "Binghatti",
    loc: "Dubai Academic City",
    bedrooms: "4, 5 BR",
    price: "AED 4.2M",
    img: tilalImg,
    handover: "Q4 2028",
  },
  {
    name: "Greenz by Danube",
    developer: "Danube Properties",
    loc: "Academic City, Dubai",
    bedrooms: "3, 4, 5 BR",
    price: "AED 3.5M",
    img: greenzImg,
    handover: "Q4 2029",
  },
  {
    name: "Golf Vale",
    developer: "Emaar Properties",
    loc: "Dubai South",
    bedrooms: "1, 2, 3 BR",
    price: "AED 1.10M",
    img: golfValeImg,
    handover: "Q1 2030",
  },
  {
    name: "Mercedes-Benz Places",
    developer: "Binghatti Properties",
    loc: "Downtown Dubai",
    bedrooms: "2, 3, 4 BR",
    price: "AED 8.9M",
    img: mercedesImg,
    handover: "Q4 2026",
  },
  {
    name: "Ivory — Damac Hills",
    developer: "Damac Properties",
    loc: "Damac Hills",
    bedrooms: "3, 4, 5 BR",
    price: "AED 2.57M",
    img: ivoryImg,
    handover: "Q2 2028",
  },
  {
    name: "Greencrest",
    developer: "Emaar Properties",
    loc: "Dubai Hills Estate",
    bedrooms: "1, 2, 3 BR",
    price: "AED 1.57M",
    img: greencrestImg,
    handover: "Q2 2029",
  },
  {
    name: "Terra Woods",
    developer: "Emaar Properties",
    loc: "Madinat Expo City",
    bedrooms: "1, 2, 3 BR",
    price: "AED 1.6M",
    img: terraWoodsImg,
    handover: "Q1 2030",
  },
];

export const PARTNERS = ["Emaar", "Nakheel", "Sobha", "DAMAC", "Meraas", "Aldar", "Select Group"];

export const DEVELOPER_NAMES = [
  "EMAAR", "NAKHEEL", "DANUBE", "DAMAC", "SOBHA", "BINGHATTI", "IMTIAZ", "MERAAS", "OMNIYAT", "AZIZI", "ELINGTON", "SAMANA", "REPORTAGE", "BNW DEVELOPMENTS", "BT PROPERTIES", "IMAN", "ONE DEVELOPMENT", "TARRAD", "TIGER", "BEYOND"
];
export const VALUES = [
  { icon: ShieldCheck, title: "Integrity", text: "RERA-licensed advisory grounded in honest, long-term partnerships." },
  { icon: Eye, title: "Transparency", text: "Full disclosure on payment plans, fees, and post-handover obligations." },
  { icon: Globe2, title: "Global Reach", text: "International desks supporting investors across 40+ countries." },
  { icon: Users, title: "Client-First", text: "A single advisor dedicated from first inquiry to title-deed handover." },
];

// ── Hook ──────────────────────────────────────────────────────────────────────

export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .reveal-heading");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.10 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

// ── Tiny shared components ────────────────────────────────────────────────────

export function TikTokIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.94a8.16 8.16 0 0 0 4.77 1.52V7a4.85 4.85 0 0 1-1.84-.31z" />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center ${className}`}>
      <img
        src={amnariLogo}
        alt="AMNARI Properties"
        className="h-28 sm:h-36 w-auto object-contain shrink-0 py-1"
      />
    </Link>
  );
}

export function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="font-serif text-2xl text-accent">{n}</div>
      <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">{l}</div>
    </div>
  );
}

/** Project card — shared between the landing Projects section and /projects page */
export function ProjectCard({ p }: { p: (typeof PROJECTS)[number] }) {
  return (
    <article className="reveal group bg-card border border-border overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-30px_rgba(201,162,39,0.35)] hover:border-accent/40">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={p.img}
          alt={p.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-background/80 backdrop-blur px-3 py-1 text-[0.65rem] tracking-[0.2em] uppercase text-accent border border-accent/30">
          Handover {p.handover}
        </div>
        <div className="absolute top-4 right-4 bg-accent/90 backdrop-blur px-3 py-1 text-[0.65rem] tracking-[0.15em] uppercase text-accent-foreground font-semibold">
          {p.price}
        </div>
      </div>
      <div className="p-7">
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground tracking-wider uppercase">
          <MapPin className="h-3.5 w-3.5 text-accent" /> {p.loc}
        </div>
        <h3 className="font-serif text-xl mt-3 mb-1">{p.name}</h3>
        <p className="text-xs text-accent/80 tracking-wide mb-3 uppercase">{p.developer}</p>
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-6 pt-3 border-t border-border/50">
          <span>{p.bedrooms}</span>
        </div>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-accent hover:text-accent-hover transition-colors"
        >
          Inquire Now <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}

// ── Nav ───────────────────────────────────────────────────────────────────────

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /** Renders a nav item — uses <Link> for page routes, <a> for anchors */
  function NavLink({
    item,
    mobile,
    onClick,
  }: {
    item: { label: string; href: string };
    mobile?: boolean;
    onClick?: () => void;
  }) {
    const cls = mobile
      ? "text-foreground/90 hover:text-accent transition-colors"
      : "text-sm text-foreground/80 hover:text-accent transition-colors tracking-wide";

    if (item.href === "/") {
      return (
        <Link to="/" className={cls} onClick={onClick}>
          {item.label}
        </Link>
      );
    }
    if (item.href === "/about") {
      return (
        <Link to="/about" className={cls} onClick={onClick}>
          {item.label}
        </Link>
      );
    }
    if (item.href === "/projects") {
      return (
        <Link to="/projects" className={cls} onClick={onClick}>
          {item.label}
        </Link>
      );
    }
    if (item.href === "/contact") {
      return (
        <Link to="/contact" className={cls} onClick={onClick}>
          {item.label}
        </Link>
      );
    }

    return (
      <a href={item.href} className={cls} onClick={onClick}>
        {item.label}
      </a>
    );
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
    >
      <div className="w-full px-6 lg:px-16 h-24 sm:h-28 flex lg:grid lg:grid-cols-3 justify-between items-center">
        {/* Left: Logo on far left */}
        <div className="flex justify-start">
          <Logo />
        </div>

        {/* Center: Navigation links centered */}
        <nav className="hidden lg:flex items-center justify-center gap-9">
          {NAV.map((n) => (
            <NavLink key={n.label} item={n} />
          ))}
        </nav>

        {/* Right: Contact button on far right */}
        <div className="flex items-center justify-end gap-3">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex btn-gold btn-gold-hover cursor-pointer"
          >
            <MessageCircle className="h-4 w-4" /> Contact
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-foreground p-2 -mr-2"
            aria-label="Menu"
          >
            {open ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <div className="px-6 py-6 flex flex-col gap-4">
            {NAV.map((n) => (
              <NavLink key={n.label} item={n} mobile onClick={() => setOpen(false)} />
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-accent text-accent-foreground shadow-[0_10px_30px_-5px_rgba(201,162,39,0.6)] hover:bg-accent-hover hover:scale-110 transition-all"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute inset-0 rounded-full bg-accent/40 animate-ping" />
    </a>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="w-full px-6 lg:px-16">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr] gap-10 mb-10">
          <div>
            <Logo />
            <p className="text-sm text-muted-foreground mt-2 max-w-sm leading-relaxed">
              A Dubai-headquartered real-estate advisory connecting global investors with the
              UAE's most prestigious developments.
            </p>
          </div>
          <div>
            <p className="eyebrow mb-4">Navigate</p>
            <ul className="space-y-2 text-sm">
              {NAV.map((n) => {
                const footerCls = "text-muted-foreground hover:text-accent transition-colors";
                if (n.href === "/") {
                  return (
                    <li key={n.label}>
                      <Link to="/" className={footerCls}>
                        {n.label}
                      </Link>
                    </li>
                  );
                }
                if (n.href === "/about") {
                  return (
                    <li key={n.label}>
                      <Link to="/about" className={footerCls}>
                        {n.label}
                      </Link>
                    </li>
                  );
                }
                if (n.href === "/projects") {
                  return (
                    <li key={n.label}>
                      <Link to="/projects" className={footerCls}>
                        {n.label}
                      </Link>
                    </li>
                  );
                }
                if (n.href === "/contact") {
                  return (
                    <li key={n.label}>
                      <Link to="/contact" className={footerCls}>
                        {n.label}
                      </Link>
                    </li>
                  );
                }
                return (
                  <li key={n.label}>
                    <a href={n.href} className={footerCls}>
                      {n.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-4">Follow</p>
            <div className="flex gap-3 flex-wrap">
              {[
                { Icon: Instagram, link: "https://www.instagram.com/amnaripropertiesuae/" },
                { Icon: Facebook, link: "https://www.facebook.com/profile.php?id=61586962122282" },
                { Icon: Linkedin, link: "https://www.linkedin.com/company/amnari-properties/" },
                { Icon: TikTokIcon, link: "https://www.tiktok.com/@amnaripropertiesuae" },
                { Icon: Youtube, link: "https://www.youtube.com/@AmnariPropertiesuae" },
              ].map(({ Icon, link }, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-10 w-10 place-items-center border border-border hover:border-accent hover:bg-accent hover:text-accent-foreground text-accent transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-6 flex justify-center text-center text-xs text-muted-foreground tracking-wide">
          <p>© {new Date().getFullYear()} AMNARI Properties. All Rights Reserved.</p>
        </div>
      </div>
      <FloatingWhatsApp />
    </footer>
  );
}
