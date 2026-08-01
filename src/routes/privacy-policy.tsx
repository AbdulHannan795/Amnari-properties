import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Mail, Phone, Globe } from "lucide-react";
import { Nav, Footer, useReveal } from "@/components/shared";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — AMNARI Properties" },
      {
        name: "description",
        content:
          "Read the Privacy Policy of AMNARI Properties. We are committed to protecting your personal information and using it solely to assist your Dubai real estate journey.",
      },
      { property: "og:title", content: "Privacy Policy — AMNARI Properties" },
      {
        property: "og:description",
        content:
          "Learn how AMNARI Properties collects, uses, and protects your personal data.",
      },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  useReveal();

  const sections = [
    {
      number: "01",
      title: "Information We Collect",
      content: null,
      list: [
        "Full Name",
        "Email Address",
        "Phone / WhatsApp Number",
        "Country or City of Residence",
        "Investment Preferences",
        "Budget Range",
        "Purchase Timeline",
      ],
    },
    {
      number: "02",
      title: "How We Use Your Information",
      content: null,
      list: [
        "Contacting you via phone, email, or WhatsApp to share requested property brochures, floor plans, and pricing details.",
        "Answering your inquiries and assisting you with property bookings or Expressions of Interest (EOIs).",
        "Sending updates regarding upcoming real estate launches and market opportunities.",
      ],
    },
    {
      number: "03",
      title: "Data Sharing and Protection",
      content:
        "We do not sell, rent, or lease your personal information to third parties. Your data is strictly used by our authorized sales consultants at Amnari Properties to assist with your property inquiries.",
      list: null,
    },
    {
      number: "04",
      title: "Your Rights and Opt-Out",
      content: null,
      list: [
        "You have the right to request access to, correction of, or deletion of your personal data at any time.",
        "If you no longer wish to receive communications from Amnari Properties, you can reply STOP on WhatsApp or email us to unsubscribe.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* ── Hero Header ── */}
      <section className="relative pt-40 pb-20 lg:pt-52 lg:pb-28 overflow-hidden">
        {/* Background accent glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-accent/5 blur-[120px]" />
        </div>
        <div className="w-full px-6 lg:px-16 relative z-10">
          <div className="max-w-3xl">
            <div className="reveal-heading inline-flex items-center gap-2 border border-accent/40 bg-accent/10 px-4 py-2 mb-8">
              <ShieldCheck className="h-4 w-4 text-accent shrink-0" />
              <span className="text-xs tracking-[0.18em] uppercase text-accent font-semibold">
                Legal &amp; Compliance
              </span>
            </div>
            <h1 className="reveal-heading font-serif text-4xl lg:text-6xl leading-tight mb-6">
              Privacy{" "}
              <span className="italic text-accent">Policy</span>
            </h1>
            <p className="reveal text-muted-foreground text-lg leading-relaxed max-w-2xl">
              Amnari Properties (&lsquo;we,&rsquo; &lsquo;our,&rsquo; or &lsquo;us&rsquo;) respects your privacy
              and is committed to protecting the personal information you share
              with us. This Privacy Policy explains how we collect, use, and
              protect your information when you interact with our website or
              submit your details through our advertising campaigns, including
              Meta Lead Forms (Facebook and Instagram).
            </p>
          </div>
        </div>
      </section>

      {/* ── Policy Sections ── */}
      <section className="pb-24 lg:pb-32">
        <div className="w-full px-6 lg:px-16">
          <div className="max-w-3xl space-y-10">
            {sections.map((s) => (
              <div
                key={s.number}
                className="reveal bg-card border border-border p-8 lg:p-10"
              >
                {/* Section header */}
                <div className="flex items-start gap-5 mb-6">
                  <span className="font-serif text-3xl text-accent/30 leading-none shrink-0">
                    {s.number}
                  </span>
                  <h2 className="font-serif text-xl lg:text-2xl text-foreground leading-snug pt-1">
                    {s.title}
                  </h2>
                </div>

                {/* Content */}
                {s.content && (
                  <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                    {s.content}
                  </p>
                )}
                {s.list && (
                  <ul className="space-y-3">
                    {s.list.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm lg:text-base text-muted-foreground leading-relaxed">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* ── Section 5 — Contact Us ── */}
            <div className="reveal bg-card border border-border p-8 lg:p-10">
              <div className="flex items-start gap-5 mb-6">
                <span className="font-serif text-3xl text-accent/30 leading-none shrink-0">
                  05
                </span>
                <h2 className="font-serif text-xl lg:text-2xl text-foreground leading-snug pt-1">
                  Contact Us
                </h2>
              </div>
              <p className="text-muted-foreground text-sm lg:text-base mb-8 leading-relaxed">
                If you have any questions about this Privacy Policy or how your
                data is handled, please reach out to us directly.
              </p>
              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  {
                    icon: Globe,
                    label: "Website",
                    value: "amnariproperties.com",
                    href: "https://amnariproperties.com",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "contact@amnariproperties.com",
                    href: "mailto:contact@amnariproperties.com",
                  },
                  {
                    icon: Phone,
                    label: "Phone / WhatsApp",
                    value: "+971 547521139",
                    href: "tel:+971547521139",
                  },
                ].map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="flex items-start gap-4 p-5 border border-border hover:border-accent/50 bg-background hover:bg-accent/5 transition-all group"
                  >
                    <div className="grid h-10 w-10 place-items-center border border-border group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground text-accent transition-all shrink-0">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground tracking-widest uppercase mb-1">
                        {label}
                      </p>
                      <p className="text-sm text-foreground group-hover:text-accent transition-colors">
                        {value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Last updated note */}
            <p className="reveal text-xs text-muted-foreground/60 tracking-wide text-center pt-2">
              Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
