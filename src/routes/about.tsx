import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Nav, Footer, useReveal, VALUES, Stat, WHATSAPP, TikTokIcon } from "@/components/shared";
import aboutUsImg from "@/assets/aboutusimg.jpg";
import ceoImg from "@/assets/ceo_pic_updated.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Amnari Properties — Dubai Real Estate Advisory" },
      {
        name: "description",
        content:
          "Learn about Amnari Properties — a trusted UAE real estate advisory connecting global investors with Dubai's most prestigious off-plan developments.",
      },
      { property: "og:title", content: "About Amnari Properties" },
      { property: "og:description", content: "15+ years of expertise in Dubai real estate. RERA-licensed advisory serving investors across 40+ countries." },
    ],
  }),
  component: AboutPage,
});

// ── Page ─────────────────────────────────────────────────────────────────────

function AboutPage() {
  useReveal();

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Nav />

      {/* ── Hero ── */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-24 sm:pt-28">
        <img
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1920&q=80"
          alt="Dubai skyline"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/30 to-transparent" />
        <div className="relative z-10 w-full px-6 lg:px-16 py-24">
          <div className="max-w-2xl">
            <p className="reveal-heading eyebrow mb-5">Our Story</p>
            <h1 className="reveal font-serif text-5xl lg:text-7xl leading-[1.05] text-foreground mb-6">
              About <span className="italic text-accent">AMNARI</span> Properties
            </h1>
            <p className="reveal text-lg text-muted-foreground leading-relaxed">
              A trusted UAE brokerage that has spent over 6 years connecting international
              capital with Dubai's finest real estate opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="py-24 lg:py-32">
        <div className="w-full px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <p className="eyebrow mb-5">Who We Are</p>
              <h2 className="font-serif text-4xl lg:text-5xl mb-8 leading-tight">
                A trusted bridge between global capital and Dubai real estate.
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  At Amnari Properties, we don't just sell properties, we create opportunities, build wealth, and shape futures.
                </p>
                <p>
                  Guided by our philosophy, "Defining Prestige & Redefining Investments," we specialize in connecting clients with Dubai's most promising real estate opportunities across off-plan, secondary market, luxury, affordable, residential, commercial, and leasing sectors. Whether you're searching for an iconic waterfront residence, a family home, a high-yield investment, or a strategic commercial asset, our team delivers expert guidance, market intelligence, and a seamless experience from inquiry to ownership. Built on trust, integrity, and excellence, Amnari Properties is committed to helping investors maximize returns, homeowners find the perfect address, and businesses secure spaces that support their growth. In one of the world's most dynamic real estate markets, we serve as more than brokers. We are trusted advisors dedicated to unlocking value and creating lasting success for our clients.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-gold btn-gold-hover">
                  <MessageCircle className="h-4 w-4" /> Speak to an Advisor
                </a>
                <a href="/projects" className="btn-outline-gold">
                  View Projects <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="reveal relative">
              <img
                src={aboutUsImg}
                alt="About Amnari Properties"
                loading="lazy"
                className="w-full h-[540px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 hidden sm:block bg-card border border-accent/30 px-6 py-5 max-w-xs">
                <div className="font-serif text-3xl text-accent">98%</div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">
                  Client retention across our investor base
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-16 bg-card border-y border-border">
        <div className="w-full px-6 lg:px-16">
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
            <div className="reveal delay-1"><Stat n="AED 1B+" l="Transacted" /></div>
            <div className="reveal delay-2"><Stat n="40+"     l="Countries Served" /></div>
            <div className="reveal delay-3"><Stat n="6 yrs"  l="UAE Market" /></div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-24 lg:py-32">
        <div className="w-full px-6 lg:px-16">
          <p className="reveal-heading eyebrow text-center mb-4">Vision &amp; Values</p>
          <h2 className="reveal-heading font-serif text-3xl lg:text-5xl text-center mb-14">
            What we stand for
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <div
                key={v.title}
                className={`reveal delay-${(i % 4) + 1} bg-card border border-border p-8 hover:border-accent/50 transition-colors group`}
              >
                <v.icon className="h-8 w-8 text-accent mb-5 group-hover:scale-110 transition-transform" />
                <h3 className="font-serif text-xl mb-3">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CEO Quote ── */}
      <section className="py-20 bg-card border-y border-border">
        <div className="w-full px-6 lg:px-16">
          <div className="reveal bg-background border border-border p-10 lg:p-16 max-w-4xl mx-auto">
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
                  <div className="text-sm text-muted-foreground tracking-widest uppercase mt-1">
                    Chief Executive Officer
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
