import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, ArrowRight, MessageCircle } from "lucide-react";
import { Nav, Footer, useReveal, VALUES, Stat, WHATSAPP, TikTokIcon } from "@/components/shared";
import aboutUsImg from "@/assets/aboutusimg.jpg";
import ceoImg from "@/assets/ceo_img.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About AMNARI Properties — Dubai Real Estate Advisory" },
      {
        name: "description",
        content:
          "Learn about AMNARI Properties — a trusted UAE real estate advisory connecting global investors with Dubai's most prestigious off-plan developments.",
      },
      { property: "og:title", content: "About AMNARI Properties" },
      { property: "og:description", content: "15+ years of expertise in Dubai real estate. RERA-licensed advisory serving investors across 40+ countries." },
    ],
  }),
  component: AboutPage,
});

// ── FAQ Data ─────────────────────────────────────────────────────────────────

const FAQ = [
  {
    q: "Can foreigners buy property in Dubai?",
    a: "Yes. Dubai's freehold zones — which include Downtown Dubai, Dubai Marina, Palm Jumeirah, Business Bay, and Dubai Hills Estate — allow full foreign ownership. You receive a title deed from the Dubai Land Department with 100% ownership rights, and there are no restrictions on repatriating rental income or sale proceeds.",
  },
  {
    q: "What is an off-plan property?",
    a: "An off-plan property is purchased directly from the developer before or during construction. Buyers typically benefit from below-market entry prices, flexible installment-based payment plans tied to construction milestones, and significant capital appreciation by the time the property is handed over.",
  },
  {
    q: "What are typical payment plans for off-plan projects in Dubai?",
    a: "Payment structures vary by developer and project. Common plans include 60/40 (60% during construction, 40% on handover), 80/20, and post-handover plans where payments extend 2–5 years after handover. Some projects also offer 1% monthly payment plans that make entry highly accessible for international investors.",
  },
  {
    q: "What additional fees should I budget for when buying?",
    a: "In addition to the purchase price, buyers should budget for the Dubai Land Department (DLD) registration fee of 4% of the property value, a developer admin fee (typically AED 4,000–5,000), mortgage registration if applicable (0.25% of the loan amount), and ongoing service charges post-handover.",
  },
  {
    q: "Does investing in Dubai property qualify me for a UAE Golden Visa?",
    a: "Yes. A property investment of AED 2 million or more qualifies the investor for a 10-year UAE Golden Visa, granting long-term residency for the investor and their immediate family — without requiring employer sponsorship. Off-plan properties under mortgage may qualify once sufficient equity has been paid.",
  },
  {
    q: "What areas does AMNARI Properties specialize in?",
    a: "We focus on Dubai's most prestigious and high-growth zones: Downtown Dubai, Dubai Marina, Palm Jumeirah, Business Bay, Dubai Hills Estate, Dubai Creek Harbour, Jumeirah Bay Island, and Emaar Beachfront. We also actively track emerging districts with strong ROI potential for early-stage investors.",
  },
  {
    q: "How does AMNARI Properties earn its commission?",
    a: "AMNARI Properties is compensated directly by the developer — not the buyer. This means you receive our complete advisory service, including property selection, developer negotiation, payment plan structuring, legal guidance, and post-handover support, at no additional cost to you whatsoever.",
  },
  {
    q: "What is a post-handover payment plan?",
    a: "A post-handover plan allows buyers to continue installment payments 1–5 years after the property is physically handed over. This reduces upfront financial commitment and enables investors to generate rental income from the property while still completing their payment schedule.",
  },
  {
    q: "How do I verify a developer's credentials in Dubai?",
    a: "All legitimate developers in Dubai must be registered with RERA (Real Estate Regulatory Agency), the regulatory arm of the Dubai Land Department. You can verify any developer, project, or broker on the Dubai REST app or the official DLD website. AMNARI Properties exclusively partners with RERA-registered, grade-A developers.",
  },
  {
    q: "How long does the title deed transfer process take?",
    a: "Once the property is fully paid and ready for handover, the title deed transfer at the Dubai Land Department typically takes 1–3 business days. For off-plan properties, the title deed is issued upon project completion and full payment clearance. AMNARI's legal partners manage the entire process on your behalf.",
  },
];

// ── Sub-components ────────────────────────────────────────────────────────────

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left flex items-start justify-between py-5 gap-6 group"
        aria-expanded={open}
      >
        <span className="font-serif text-lg text-foreground group-hover:text-accent transition-colors leading-snug">
          {q}
        </span>
        <ChevronDown
          className={`h-5 w-5 text-accent shrink-0 mt-0.5 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <p className="pb-6 text-muted-foreground text-sm leading-relaxed pr-10">{a}</p>
      )}
    </div>
  );
}

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

      {/* ── FAQ ── */}
      <section className="py-24 lg:py-32">
        <div className="w-full px-6 lg:px-16">
          <div className="max-w-3xl mx-auto">
            <p className="reveal-heading eyebrow text-center mb-4">Got Questions?</p>
            <h2 className="reveal-heading font-serif text-3xl lg:text-5xl text-center mb-14">
              Frequently Asked Questions
            </h2>
            <div className="reveal bg-card border border-border px-8 py-2">
              {FAQ.map((item) => (
                <FAQItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
            <div className="reveal mt-12 text-center">
              <p className="text-muted-foreground mb-6">
                Still have questions? Our advisors are ready to help.
              </p>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-gold btn-gold-hover">
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
