import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import {
  MapPin, Phone, Mail, Clock, ChevronDown,
  ShieldCheck, Eye, Globe2, Users, Instagram, Facebook, Linkedin, ArrowRight, Youtube,
  CheckCircle, AlertCircle, Loader2, MessageCircle,
} from "lucide-react";
import { submitContactForm } from "@/lib/contact.server";
import {
  WHATSAPP, PROJECTS, DEVELOPER_NAMES, VALUES, NAV,
  TikTokIcon, Logo, Nav, Footer, Stat, useReveal, ProjectCard,
} from "@/components/shared";
import heroVideo from "@/assets/dubai-hero.mp4";
import aboutUsImg from "@/assets/aboutusimg.jpg";
import ceoImg from "@/assets/ceo_pic_updated.jpeg";
import ivoryFeedImg from "@/assets/ivory by dammac.jpg";
import wynwoodFeedImg from "@/assets/IMTIAZ_Wynwood.jpg";
import fiorFeedImg from "@/assets/FIOR 1 by emmar.webp";
import valenciaFeedImg from "@/assets/valencia by demmac.webp";
import golfValeFeedImg from "@/assets/Golf-Vale-at-Emaar.webp";
import mercedesFeedImg from "@/assets/Mercedes-Benz-Places-Binghatti-City.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AMNARI Properties — Premium Dubai Real Estate & Off-Plan Investments" },
      { name: "description", content: "Invest in Dubai's most prestigious off-plan properties. AMNARI Properties partners with Emaar, DAMAC, Sobha & Nakheel to serve global investors." },
      { property: "og:title", content: "AMNARI Properties — Premium Dubai Real Estate" },
      { property: "og:description", content: "A trusted UAE brokerage connecting international investors with Dubai's finest developments." },
    ],
  }),
  component: Landing,
});

// ↑ WHATSAPP, PROJECTS, PARTNER_LOGOS, VALUES, NAV, Logo, Nav, Footer, Stat, useReveal
// are all imported from @/components/shared above.

// Nav is imported from @/components/shared

function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full flex items-center overflow-hidden">
      {/* Video background */}
      <video
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        {...{ "webkit-playsinline": "true" }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Dark overlays to keep text readable */}
      <div className="absolute inset-0 bg-background/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/45 via-background/15 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/55 via-background/10 to-transparent" />

      <div className="relative z-10 w-full px-6 lg:px-16 pt-32 pb-24">
        <div className="max-w-3xl reveal">
          <div className="inline-flex items-center gap-2 border border-accent/40 bg-accent/10 px-4 py-2 mb-8">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse shrink-0" />
            <span className="text-xs sm:text-sm tracking-[0.18em] uppercase text-accent font-semibold">
              Coming Soon: RAW District 2 – Expression of Interest (EOI) Now Open
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl leading-[1.05] text-foreground">
            Invest in Dubai's <span className="italic text-accent">Finest</span> Properties
          </h1>
          <p className="mt-7 text-lg text-muted-foreground max-w-xl leading-relaxed">
            A trusted UAE brokerage serving international and local investors. We curate access to off-plan launches, branded residences and prime secondary listings, backed by transparent advisory at every step.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="btn-gold btn-gold-hover">Explore Properties <ArrowRight className="h-4 w-4" /></a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-outline-gold">
              <MessageCircle className="h-4 w-4" /> WhatsApp Inquiry
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg border-t border-border pt-8">
            <Stat n="AED 1B+" l="Transacted" />
            <Stat n="40+" l="Countries" />
            <Stat n="6 yrs" l="UAE Market" />
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

// Stat is imported from @/components/shared

function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="w-full px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal order-2 lg:order-1">
            <p className="eyebrow mb-5">About AMNARI</p>
            <h2 className="font-serif text-4xl lg:text-5xl mb-7 leading-tight">
              A trusted bridge between global capital and Dubai real estate.
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>At Amnari Properties, we don't just sell properties, we create opportunities, build wealth, and shape futures.</p>
              <p>Guided by our philosophy, "Defining Prestige & Redefining Investments," we specialize in connecting clients with Dubai's most promising real estate opportunities across off-plan, secondary market, luxury, affordable, residential, commercial, and leasing sectors. Whether you're searching for an iconic waterfront residence, a family home, a high-yield investment, or a strategic commercial asset, our team delivers expert guidance, market intelligence, and a seamless experience from inquiry to ownership. Built on trust, integrity, and excellence, Amnari Properties is committed to helping investors maximize returns, homeowners find the perfect address, and businesses secure spaces that support their growth. In one of the world's most dynamic real estate markets, we serve as more than brokers. We are trusted advisors dedicated to unlocking value and creating lasting success for our clients.</p>
            </div>
          </div>
          <div className="reveal order-1 lg:order-2 relative">
            <img src={aboutUsImg} alt="About Amnari Properties" loading="lazy" className="w-full h-[520px] object-cover" />
            <div className="absolute -bottom-6 -left-6 hidden sm:block bg-card border border-accent/30 px-6 py-5 max-w-xs">
              <div className="font-serif text-3xl text-accent">98%</div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">Client retention across our investor base</div>
            </div>
          </div>
        </div>

        {/* CEO */}
        <div className="reveal mt-28 bg-card border border-border p-10 lg:p-14 max-w-4xl mx-auto">
          <p className="eyebrow mb-5">Message from the CEO</p>
          <div className="flex flex-col sm:flex-row gap-8 items-start">
            <img
              src={ceoImg}
              alt="Nimal Amad – CEO"
              className="w-28 h-28 sm:w-36 sm:h-36 object-cover object-top rounded-full border-2 border-accent/40 shrink-0"
            />
            <div>
              <blockquote className="font-serif italic text-xl lg:text-2xl text-foreground/90 leading-relaxed space-y-6">
                <p>
                  "At Amnari Properties, we don't just connect people with properties, we create opportunities, build lasting relationships, and deliver value that stands the test of time. Our commitment to integrity, excellence, and client success drives everything we do."
                </p>
                <p>
                  "Every property represents a new beginning, and we are proud to be your trusted partner in turning ambitions into reality."
                </p>
              </blockquote>
              <div className="mt-8 pt-6 border-t border-border/50 inline-block w-full sm:w-auto">
                <div className="font-serif text-xl">Nimal Amad</div>
                <div className="text-sm text-muted-foreground tracking-widest uppercase mt-1">Chief Executive Officer</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-24">
          <p className="reveal-heading eyebrow text-center mb-4">Vision &amp; Values</p>
          <h3 className="reveal-heading font-serif text-3xl lg:text-4xl text-center mb-14">What we stand for</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <div key={v.title} className={`reveal delay-${(i % 4) + 1} bg-card border border-border p-8 hover:border-accent/50 transition-colors group`}>
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
  const loop = [...DEVELOPER_NAMES, ...DEVELOPER_NAMES];
  return (
    <section id="partners" className="py-20 border-y border-border bg-card">
      <div className="w-full px-6 lg:px-16 text-center">
        <p className="reveal-heading eyebrow">In Partnership With</p>
        <h2 className="reveal-heading font-serif text-3xl lg:text-4xl mt-3 mb-12">Our Trusted Developer Partners</h2>
      </div>
      <div className="relative overflow-hidden group py-2">
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] items-center">
          {loop.map((name, i) => (
            <div key={i} className="flex items-center shrink-0">
              <span className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-widest text-accent hover:text-foreground/60 transition-colors duration-300 cursor-default">
                {name}
              </span>
              <span className="mx-8 lg:mx-12 text-foreground/20 select-none text-xl sm:text-2xl">
                ·
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
  return (
    <section id="projects" className="py-20 sm:py-24 lg:py-32">
      <div className="w-full px-6 lg:px-16">
        <div className="text-center mb-12 lg:mb-14">
          <p className="reveal-heading eyebrow mb-4">Curated Portfolio</p>
          <h2 className="reveal-heading font-serif text-3xl sm:text-4xl lg:text-5xl mb-5">Featured Off-Plan Projects</h2>
          <p className="reveal text-muted-foreground max-w-2xl mx-auto">Hand-selected launches from Dubai's most reputable developers, with flexible payment plans and exclusive investor allocations.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {PROJECTS.slice(0, 6).map((p) => (
            <ProjectCard key={p.name} p={p} />
          ))}
        </div>

        {/* ── Explore More button ── */}
        <div className="reveal mt-14 text-center">
          <Link
            to="/projects"
            className="btn-gold btn-gold-hover"
          >
            Explore All Projects <ArrowRight className="h-4 w-4" />
          </Link>
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
    ivoryFeedImg,
    wynwoodFeedImg,
    fiorFeedImg,
    valenciaFeedImg,
    golfValeFeedImg,
    mercedesFeedImg,
  ];
  const socials = [
    { Icon: Instagram, label: "Instagram", handle: "@amnaripropertiesuae", link: "https://www.instagram.com/amnaripropertiesuae/" },
    { Icon: Facebook, label: "Facebook", handle: "/amnaripropertiesuae", link: "https://www.facebook.com/profile.php?id=61586962122282" },
    { Icon: Linkedin, label: "LinkedIn", handle: "/company/amnari-properties", link: "https://www.linkedin.com/company/amnari-properties/" },
    { Icon: TikTokIcon, label: "TikTok", handle: "@amnaripropertiesuae", link: "https://www.tiktok.com/@amnaripropertiesuae" },
    { Icon: Youtube, label: "YouTube", handle: "@AmnariPropertiesuae", link: "https://www.youtube.com/@AmnariPropertiesuae" },
  ];
  return (
    <section id="social" className="py-24 lg:py-32">
      <div className="w-full px-6 lg:px-16 text-center">
        <p className="reveal-heading eyebrow mb-4">Follow Our Journey</p>
        <h2 className="reveal-heading font-serif text-4xl lg:text-5xl mb-12">Connect With Us</h2>

        <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-5 max-w-5xl mx-auto mb-16">
          {socials.map(({ Icon, label, handle, link }) => (
            <a key={label} href={link} target="_blank" rel="noreferrer" className="reveal group bg-card border border-border p-8 hover:border-accent hover:bg-accent/5 transition-all">
              <div className="grid h-14 w-14 mx-auto place-items-center rounded-full border border-border group-hover:bg-accent group-hover:border-accent transition-colors mb-4">
                <Icon className="h-6 w-6 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>
              <div className="font-serif text-lg">{label}</div>
              <div className="text-xs text-muted-foreground tracking-wide mt-1 break-all leading-relaxed">{handle}</div>
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
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const fd = new FormData(e.currentTarget);
    try {
      await submitContactForm({
        data: {
          name: fd.get("name") as string,
          email: fd.get("email") as string,
          phone: fd.get("phone") as string,
          message: (fd.get("message") as string) || "",
        },
      });
      setStatus("success");
      formRef.current?.reset();
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong. Please try again.",
      );
    }
  }

  return (
    <section id="contact" className="pt-24 lg:pt-32 bg-card border-t border-border">
      <div className="w-full px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 pb-20">
          <div className="reveal">
            <p className="eyebrow mb-4">Visit Our Office</p>
            <h2 className="font-serif text-4xl lg:text-5xl mb-8">Let's begin the conversation.</h2>
            <ul className="space-y-6">
              <ContactRow Icon={MapPin} title="Office Address">Warba Center Al Muraqqabat, Dubai</ContactRow>
              <ContactRow Icon={Phone} title="Phone"><a href="tel:+971 547521139" className="hover:text-accent">+971 547521139</a></ContactRow>
              <ContactRow Icon={Mail} title="Email"><a href="mailto:contact@amnariproperties.com" className="hover:text-accent">contact@amnariproperties.com</a></ContactRow>
              <ContactRow Icon={Clock} title="Working Hours">Monday – Saturday  10:00 am – 7:00 pm</ContactRow>
            </ul>
          </div>

          {/* Form wrapper — always mounted so reveal fires correctly */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="reveal bg-background border border-border p-8 lg:p-10 space-y-5"
          >
            {status === "success" ? (
              /* ── Success state — shown in place of form fields ── */
              <div className="flex flex-col items-center justify-center text-center gap-5 py-10">
                <div className="grid h-20 w-20 place-items-center rounded-full bg-accent/10 border border-accent/30">
                  <CheckCircle className="h-9 w-9 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl mb-2">Thank you!</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We will contact you shortly.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="btn-outline-gold text-sm"
                >
                  Send another message
                </button>
              </div>
            ) : (
              /* ── Form fields ── */
              <>
                <p className="eyebrow mb-1">Send a Message</p>
                <h3 className="font-serif text-2xl mb-4">Request a private consultation</h3>

                {status === "error" && (
                  <div className="flex items-start gap-3 bg-red-500/10 border border-red-500/30 px-4 py-3 text-sm text-red-400">
                    <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Full Name" name="name" type="text" required />
                  <Field label="Phone / WhatsApp" name="phone" type="tel" required />
                </div>
                <Field label="Email Address" name="email" type="email" required />
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full bg-transparent border border-border focus:border-accent outline-none px-4 py-3 text-foreground resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-gold btn-gold-hover w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>
                  ) : (
                    <>Send Inquiry <ArrowRight className="h-4 w-4" /></>
                  )}
                </button>
              </>
            )}
          </form>
        </div>


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


function Landing() {
  useReveal();
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Partners />
      <Projects />
      <Social />
      <Contact />
      <Footer />
    </div>
  );
}
