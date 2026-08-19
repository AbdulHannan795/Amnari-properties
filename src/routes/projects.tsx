import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { Nav, Footer, useReveal, PROJECTS, ProjectCard, DEVELOPER_NAMES, WHATSAPP } from "@/components/shared";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Our Projects — Amnari Properties Dubai" },
      {
        name: "description",
        content:
          "Browse Amnari Properties' curated portfolio of premium off-plan projects across Dubai — Marina, Palm Jumeirah, Downtown, Business Bay and more.",
      },
      { property: "og:title", content: "Projects — Amnari Properties" },
      { property: "og:description", content: "Explore Dubai's finest off-plan developments hand-selected by Amnari Properties." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  useReveal();
  const loop = [...DEVELOPER_NAMES, ...DEVELOPER_NAMES];

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Nav />

      {/* ── Hero ── */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden pt-24 sm:pt-28">
        <img
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=80"
          alt="Dubai architecture"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/75 via-background/30 to-transparent" />
        <div className="relative z-10 w-full px-6 lg:px-16 py-24">
          <div className="max-w-2xl">
            <p className="reveal-heading eyebrow mb-5">Curated Portfolio</p>
            <h1 className="reveal font-serif text-5xl lg:text-7xl leading-[1.05] text-foreground mb-6">
              Our <span className="italic text-accent">Featured</span> Projects
            </h1>
            <p className="reveal text-lg text-muted-foreground leading-relaxed max-w-xl">
              Hand-selected launches from Dubai's most reputable developers, with flexible
              payment plans and exclusive investor allocations.
            </p>
          </div>
        </div>
      </section>

      {/* ── Developer Partners marquee ── */}
      <div className="py-8 border-y border-border bg-card">
        <div className="relative overflow-hidden group">
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
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-card to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-card to-transparent" />
        </div>
      </div>

      {/* ── Projects Grid ── */}
      <section className="py-20 sm:py-24 lg:py-32">
        <div className="w-full px-6 lg:px-16">
          <div className="text-center mb-14">
            <p className="reveal-heading eyebrow mb-4">All Listings</p>
            <h2 className="reveal-heading font-serif text-3xl sm:text-4xl lg:text-5xl mb-5">
              Explore Every Development
            </h2>
            <p className="reveal text-muted-foreground max-w-2xl mx-auto">
              Each project has been personally vetted by our advisors. Click any listing to
              inquire directly with our team via WhatsApp.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {PROJECTS.map((p) => (
              <ProjectCard key={p.name} p={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA banner ── */}
      <section className="py-20 bg-card border-t border-border">
        <div className="w-full px-6 lg:px-16">
          <div className="reveal bg-background border border-accent/30 p-10 lg:p-16 text-center">
            <p className="reveal-heading eyebrow mb-4">Ready to invest?</p>
            <h2 className="reveal-heading font-serif text-3xl lg:text-5xl mb-6">
              Speak with a dedicated advisor today.
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-10">
              Our team is available 7 days a week to discuss payment plans, ROI projections,
              and preferred unit allocations across all featured projects.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="btn-gold btn-gold-hover"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Us Now
              </a>
              <a href="/#contact" className="btn-outline-gold">
                Send an Inquiry
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
