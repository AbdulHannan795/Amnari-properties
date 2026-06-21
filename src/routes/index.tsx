import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  MapPin, MessageCircle, Menu, X, ChevronDown, Phone, Mail, Clock,
  ShieldCheck, Eye, Globe2, Users, Instagram, Facebook, Linkedin, ArrowRight,
} from "lucide-react";
import heroImg from "@/assets/hero-dubai.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AMANRI Properties — Premium Dubai Real Estate & Off-Plan Investments" },
      { name: "description", content: "Invest in Dubai's most prestigious off-plan properties. AMANRI Properties partners with Emaar, DAMAC, Sobha & Nakheel to serve global investors." },
      { property: "og:title", content: "AMANRI Properties — Premium Dubai Real Estate" },
      { property: "og:description", content: "A trusted UAE brokerage connecting international investors with Dubai's finest developments." },
    ],
  }),
  component: Landing,
});

const WHATSAPP = "https://wa.me/971500000000";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Partners", href: "#partners" },
  { label: "Projects", href: "#projects" },
  { label: "Rent & Resale", href: "#rent" },
  { label: "Social", href: "#social" },
  { label: "Contact", href: "#contact" },
];

const PROJECTS = [
  { name: "Marina Crest Residences", loc: "Dubai Marina", detail: "1–3 BR Apartments · From AED 1.8M", img: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1200&q=70", handover: "Q4 2026" },
  { name: "Bay Avenue Tower", loc: "Business Bay", detail: "Studios–2 BR · From AED 1.2M", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=70", handover: "Q2 2027" },
  { name: "Palm Sapphire Villas", loc: "Palm Jumeirah", detail: "4–6 BR Villas · From AED 18M", img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=70", handover: "Q1 2028" },
  { name: "Creek Harbour Heights", loc: "Dubai Creek Harbour", detail: "1–4 BR Apartments · From AED 2.4M", img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=70", handover: "Q3 2027" },
  { name: "Hills Garden Townhouses", loc: "Dubai Hills Estate", detail: "3–4 BR Townhouses · From AED 4.5M", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=70", handover: "Q4 2026" },
  { name: "Emirates Skyline", loc: "Downtown Dubai", detail: "Branded Residences · From AED 6M", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=70", handover: "Q2 2028" },
];

const PARTNERS = ["Emaar", "Nakheel", "Sobha", "DAMAC", "Meraas", "Aldar", "Select Group"];

const VALUES = [
  { icon: ShieldCheck, title: "Integrity", text: "RERA-licensed advisory grounded in honest, long-term partnerships." },
  { icon: Eye, title: "Transparency", text: "Full disclosure on payment plans, fees, and post-handover obligations." },
  { icon: Globe2, title: "Global Reach", text: "International desks supporting investors across 40+ countries." },
  { icon: Users, title: "Client-First", text: "A single advisor dedicated from first inquiry to title-deed handover." },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#top" className={`flex items-center gap-2 ${className}`}>
      <span className="grid h-9 w-9 place-items-center border border-accent text-accent font-serif text-lg">A</span>
      <span className="font-serif text-lg tracking-[0.25em] text-foreground">AMANRI</span>
    </a>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent"}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 grid grid-cols-[auto_1fr_auto] items-center gap-6">
        <Logo />
        <nav className="hidden lg:flex items-center justify-center gap-9">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-foreground/80 hover:text-accent transition-colors tracking-wide">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="hidden sm:inline-flex btn-gold btn-gold-hover">
            <MessageCircle className="h-4 w-4" /> Contact
          </a>
          <button onClick={() => setOpen((v) => !v)} className="lg:hidden text-foreground p-2" aria-label="Menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <div className="px-6 py-6 flex flex-col gap-4">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-foreground/90 hover:text-accent">
                {n.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full flex items-center overflow-hidden">
      <img src={heroImg} alt="Dubai skyline" className="absolute inset-0 h-full w-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/55 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/30 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 pt-32 pb-24 w-full">
        <div className="max-w-3xl reveal">
          <div className="inline-flex items-center gap-2 border border-accent/40 bg-accent/10 px-3 py-1.5 mb-8">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="text-[0.7rem] tracking-[0.25em] uppercase text-accent font-medium">Featured Development · Palm Sapphire</span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-foreground">
            Invest in Dubai's <span className="italic text-accent">Finest</span> Properties
          </h1>
          <p className="mt-7 text-lg text-muted-foreground max-w-xl leading-relaxed">
            A trusted UAE brokerage serving international investors. We curate access to off-plan launches, branded residences and prime secondary listings — backed by transparent advisory at every step.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="btn-gold btn-gold-hover">Explore Properties <ArrowRight className="h-4 w-4" /></a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-outline-gold">
              <MessageCircle className="h-4 w-4" /> WhatsApp Inquiry
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg border-t border-border pt-8">
            <Stat n="AED 4B+" l="Transacted" />
            <Stat n="40+" l="Countries" />
            <Stat n="15 yrs" l="UAE Market" />
          </div>
        </div>
      </div>

      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-muted-foreground flex flex-col items-center gap-2">
        <span className="text-[0.65rem] tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown className="h-5 w-5 animate-scroll-hint" />
      </a>
    </section>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="font-serif text-2xl text-accent">{n}</div>
      <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">{l}</div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal order-2 lg:order-1">
            <p className="eyebrow mb-5">About AMANRI</p>
            <h2 className="font-serif text-4xl lg:text-5xl mb-7 leading-tight">
              A trusted bridge between global capital and Dubai real estate.
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>AMANRI Properties is a Dubai-headquartered advisory connecting international investors with the UAE's most prestigious developments. From off-plan launches to branded residences, our mandate is to make Dubai property ownership effortless, transparent, and rewarding.</p>
              <p>We work directly with top-tier developers — Emaar, DAMAC, Sobha and Nakheel among them — to secure preferential allocations, structured payment plans, and post-handover support for our clients.</p>
              <p>Every relationship is led by a dedicated advisor, supported by legal, mortgage and property-management partners who specialise in the needs of overseas owners.</p>
            </div>
          </div>
          <div className="reveal order-1 lg:order-2 relative">
            <img src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1400&q=70" alt="Luxury Dubai interior" loading="lazy" className="w-full h-[520px] object-cover" />
            <div className="absolute -bottom-6 -left-6 hidden sm:block bg-card border border-accent/30 px-6 py-5 max-w-xs">
              <div className="font-serif text-3xl text-accent">98%</div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">Client retention across our investor base</div>
            </div>
          </div>
        </div>

        {/* CEO */}
        <div className="reveal mt-28 bg-card border border-border p-10 lg:p-14 grid lg:grid-cols-[auto_1fr] gap-10 items-center">
          <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=70" alt="CEO portrait placeholder" loading="lazy" className="h-32 w-32 lg:h-40 lg:w-40 rounded-full object-cover border-2 border-accent shrink-0" />
          <div>
            <p className="eyebrow mb-4">Message from the CEO</p>
            <blockquote className="font-serif italic text-xl lg:text-2xl text-foreground/90 leading-relaxed">
              "Dubai is no longer an emerging market — it is the most dynamic luxury property capital on earth. Our role is to ensure every investor we serve enters it with clarity, confidence, and a partner for the long term."
            </blockquote>
            <div className="mt-6">
              <div className="font-serif text-lg">John Doe</div>
              <div className="text-sm text-muted-foreground tracking-wide">Founder &amp; Chief Executive Officer</div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-24">
          <p className="eyebrow text-center mb-4">Vision &amp; Values</p>
          <h3 className="font-serif text-3xl lg:text-4xl text-center mb-14">What we stand for</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="reveal bg-card border border-border p-8 hover:border-accent/50 transition-colors group">
                <v.icon className="h-8 w-8 text-accent mb-5 group-hover:scale-110 transition-transform" />
                <h4 className="font-serif text-xl mb-3">{v.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Partners() {
  const loop = [...PARTNERS, ...PARTNERS];
  return (
    <section id="partners" className="py-20 border-y border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center">
        <p className="eyebrow">In Partnership With</p>
        <h2 className="font-serif text-3xl lg:text-4xl mt-3 mb-12">Our Trusted Developer Partners</h2>
      </div>
      <div className="relative overflow-hidden group">
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {loop.map((p, i) => (
            <div key={i} className="flex items-center justify-center mx-10 lg:mx-16 shrink-0">
              <span className="font-serif text-2xl lg:text-3xl tracking-[0.2em] text-muted-foreground/70 hover:text-accent transition-colors duration-300 whitespace-nowrap">
                {p.toUpperCase()}
              </span>
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-card to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-card to-transparent" />
      </div>
    </section>
  );
}

function Projects() {
  const FILTERS = ["All", "Apartments", "Villas", "Townhouses"];
  const [active, setActive] = useState("All");
  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="reveal text-center mb-14">
          <p className="eyebrow mb-4">Curated Portfolio</p>
          <h2 className="font-serif text-4xl lg:text-5xl mb-5">Featured Off-Plan Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Hand-selected launches from Dubai's most reputable developers, with flexible payment plans and exclusive investor allocations.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 text-xs uppercase tracking-[0.2em] border transition-colors ${
                active === f ? "bg-accent text-accent-foreground border-accent" : "border-border text-muted-foreground hover:border-accent hover:text-accent"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {PROJECTS.map((p) => (
            <article key={p.name} className="reveal group bg-card border border-border overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-30px_rgba(201,162,39,0.35)] hover:border-accent/40">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 left-4 bg-background/80 backdrop-blur px-3 py-1 text-[0.65rem] tracking-[0.2em] uppercase text-accent border border-accent/30">
                  Handover {p.handover}
                </div>
              </div>
              <div className="p-7">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground tracking-wider uppercase">
                  <MapPin className="h-3.5 w-3.5 text-accent" /> {p.loc}
                </div>
                <h3 className="font-serif text-2xl mt-3 mb-2">{p.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">{p.detail}</p>
                <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-accent hover:text-accent-hover transition-colors">
                  Inquire Now <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Rent() {
  return (
    <section id="rent" className="py-24 lg:py-32 bg-card border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="reveal text-center mb-14 max-w-3xl mx-auto">
          <p className="eyebrow mb-4">Ready Properties</p>
          <h2 className="font-serif text-4xl lg:text-5xl mb-5">Looking to Rent or Buy on the Secondary Market?</h2>
          <p className="text-muted-foreground">Our advisors source ready apartments, villas and rentals across every prime Dubai community — with pre-vetted listings and end-to-end transaction support.</p>
        </div>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8">
          <form onSubmit={(e) => { e.preventDefault(); alert("Thank you — an advisor will be in touch shortly."); }} className="reveal bg-background border border-border p-8 lg:p-10 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Full Name" name="name" type="text" required />
              <Field label="Phone / WhatsApp" name="phone" type="tel" required />
            </div>
            <Field label="Email Address" name="email" type="email" required />
            <div>
              <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Property Interest</label>
              <select name="interest" className="w-full bg-transparent border border-border focus:border-accent outline-none px-4 py-3 text-foreground">
                <option className="bg-background">Rent</option>
                <option className="bg-background">Buy — Secondary Market</option>
                <option className="bg-background">Off-Plan Investment</option>
              </select>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Message</label>
              <textarea name="message" rows={4} className="w-full bg-transparent border border-border focus:border-accent outline-none px-4 py-3 text-foreground resize-none" placeholder="Tell us about your requirements..." />
            </div>
            <button type="submit" className="btn-gold btn-gold-hover w-full sm:w-auto">Send Inquiry <ArrowRight className="h-4 w-4" /></button>
          </form>

          <aside className="reveal bg-background border border-accent/30 p-8 lg:p-10 flex flex-col justify-center text-center">
            <div className="grid h-16 w-16 mx-auto place-items-center rounded-full bg-accent/10 border border-accent mb-6">
              <MessageCircle className="h-8 w-8 text-accent" />
            </div>
            <p className="eyebrow mb-3">Instant Reply</p>
            <h3 className="font-serif text-2xl mb-4">Prefer WhatsApp?</h3>
            <p className="text-sm text-muted-foreground mb-7">Chat directly with an AMANRI advisor — typically within 5 minutes during UAE business hours.</p>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-gold btn-gold-hover">
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type, required }: { label: string; name: string; type: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">{label}</label>
      <input name={name} type={type} required={required} className="w-full bg-transparent border border-border focus:border-accent outline-none px-4 py-3 text-foreground" />
    </div>
  );
}

function Social() {
  const feed = [
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=400&q=60",
  ];
  const socials = [
    { Icon: Instagram, label: "Instagram", handle: "@amanri.properties" },
    { Icon: Facebook, label: "Facebook", handle: "/amanriproperties" },
    { Icon: Linkedin, label: "LinkedIn", handle: "/company/amanri" },
  ];
  return (
    <section id="social" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center">
        <p className="eyebrow mb-4">Follow Our Journey</p>
        <h2 className="font-serif text-4xl lg:text-5xl mb-12">Connect With Us</h2>

        <div className="grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto mb-16">
          {socials.map(({ Icon, label, handle }) => (
            <a key={label} href="#" className="reveal group bg-card border border-border p-8 hover:border-accent hover:bg-accent/5 transition-all">
              <div className="grid h-14 w-14 mx-auto place-items-center rounded-full border border-border group-hover:bg-accent group-hover:border-accent transition-colors mb-4">
                <Icon className="h-6 w-6 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>
              <div className="font-serif text-lg">{label}</div>
              <div className="text-xs text-muted-foreground tracking-wide mt-1">{handle}</div>
            </a>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {feed.map((src, i) => (
            <a key={i} href="#" className="relative aspect-square overflow-hidden group">
              <img src={src} alt="Social feed" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/60 transition-colors grid place-items-center">
                <Instagram className="h-6 w-6 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="pt-24 lg:pt-32 bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 pb-20">
          <div className="reveal">
            <p className="eyebrow mb-4">Visit Our Office</p>
            <h2 className="font-serif text-4xl lg:text-5xl mb-8">Let's begin the conversation.</h2>
            <ul className="space-y-6">
              <ContactRow Icon={MapPin} title="Office Address">Boulevard Plaza, Tower 1, Floor 28<br />Downtown Dubai, United Arab Emirates</ContactRow>
              <ContactRow Icon={Phone} title="Phone"><a href="tel:+971500000000" className="hover:text-accent">+971 50 000 0000</a></ContactRow>
              <ContactRow Icon={Mail} title="Email"><a href="mailto:invest@amanri.ae" className="hover:text-accent">invest@amanri.ae</a></ContactRow>
              <ContactRow Icon={Clock} title="Working Hours">Sunday – Thursday · 9:00 – 19:00 GST<br />Saturday by appointment</ContactRow>
            </ul>
          </div>
          <div className="reveal h-[460px] lg:h-auto min-h-[400px] border border-border overflow-hidden">
            <iframe
              title="AMANRI Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.012!2d55.2744!3d25.1972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDExJzUwLjAiTiA1NcKwMTYnMjcuOCJF!5e0!3m2!1sen!2sae!4v1700000000000"
              className="w-full h-full grayscale contrast-110"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <footer className="border-t border-border py-12">
          <div className="grid md:grid-cols-[1.4fr_1fr_1fr] gap-10 mb-10">
            <div>
              <Logo />
              <p className="text-sm text-muted-foreground mt-5 max-w-sm leading-relaxed">
                A Dubai-headquartered real-estate advisory connecting global investors with the UAE's most prestigious developments.
              </p>
            </div>
            <div>
              <p className="eyebrow mb-4">Navigate</p>
              <ul className="space-y-2 text-sm">
                {NAV.map((n) => (
                  <li key={n.href}><a href={n.href} className="text-muted-foreground hover:text-accent transition-colors">{n.label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-4">Follow</p>
              <div className="flex gap-3">
                {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="grid h-10 w-10 place-items-center border border-border hover:border-accent hover:bg-accent hover:text-accent-foreground text-accent transition-colors">
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-muted-foreground tracking-wide">
            <p>© 2026 AMANRI Properties. All Rights Reserved.</p>
            <p>Designed &amp; Developed with care in Dubai.</p>
          </div>
        </footer>
      </div>
    </section>
  );
}

function ContactRow({ Icon, title, children }: { Icon: typeof MapPin; title: string; children: React.ReactNode }) {
  return (
    <li className="flex gap-4">
      <div className="grid h-11 w-11 place-items-center shrink-0 border border-accent/40 bg-accent/10">
        <Icon className="h-4 w-4 text-accent" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-[0.2em] text-accent mb-1">{title}</div>
        <div className="text-foreground/90 leading-relaxed text-sm">{children}</div>
      </div>
    </li>
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

function Landing() {
  useReveal();
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Partners />
      <Projects />
      <Rent />
      <Social />
      <Contact />
      <FloatingWhatsApp />
    </div>
  );
}
