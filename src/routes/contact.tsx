import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import {
  MapPin, Phone, Mail, Clock, ArrowRight,
  CheckCircle, AlertCircle, Loader2,
} from "lucide-react";
import { Nav, Footer, useReveal, WHATSAPP } from "@/components/shared";
import { submitContactForm } from "@/lib/contact.server";
import dubaiAcademicCityImg from "@/assets/dubai academic city.jpeg";
import dubaiSouthImg from "@/assets/dubai south.jpg";
import dubaiCreekImg from "@/assets/dubai greek harbor.jpg";
import heroDubaiImg from "@/assets/hero-dubai.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Amnari Properties — Get in Touch" },
      {
        name: "description",
        content:
          "Contact Amnari Properties for expert Dubai real estate advisory. Visit our office in Dubai, call us, or send an enquiry — we are here to help.",
      },
      { property: "og:title", content: "Contact Amnari Properties" },
      {
        property: "og:description",
        content: "Reach out to Amnari Properties for personalised real estate advice in Dubai.",
      },
    ],
  }),
  component: ContactPage,
});

// ── Helpers ───────────────────────────────────────────────────────────────────

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full bg-transparent border border-border focus:border-accent outline-none px-4 py-3 text-foreground"
      />
    </div>
  );
}

function ContactRow({
  Icon,
  title,
  children,
}: {
  Icon: typeof MapPin;
  title: string;
  children: React.ReactNode;
}) {
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

// ── Featured Areas ─────────────────────────────────────────────────────────────

const AREAS = [
  {
    name: "Dubai Academic City",
    img: dubaiAcademicCityImg,
    desc: "Dubai Academic City is rapidly transforming into one of Dubai's most promising investment destinations. Strategically located opposite Dubai Silicon Oasis, it benefits from excellent connectivity and is planned to be served by the future Dubai Metro Blue Line, significantly improving accessibility across the city. The government is investing billions of 12.8 Billion dirhams to expand the surrounding technology and innovation ecosystem, creating a major technology hub in Dubai silicon oasis which is opposite to Dubai Academic city that is expected to attract global companies, professionals, and students. This combination of education, technology, infrastructure, and connectivity positions the area for strong capital appreciation and rental demand.",
  },
  {
    name: "Dubai South",
    img: dubaiSouthImg,
    desc: "Dubai South is one of Dubai's largest master-planned developments and a key focus of the Dubai 2040 Urban Master Plan. Its biggest growth driver is the expansion of Al Maktoum International Airport, which is set to become the world's largest airport upon completion. The surrounding logistics, aviation, commercial, and residential developments are expected to create hundreds of thousands of jobs, driving long-term housing demand. With comparatively affordable property prices today and significant infrastructure investment underway, Dubai South offers strong potential for both capital growth and rental returns.",
  },
  {
    name: "Dubai Creek Harbour",
    img: dubaiCreekImg,
    desc: "Dubai Creek Harbour is one of Dubai's most promising waterfront investment destinations, offering strong long-term capital appreciation as it evolves into the city's next major urban hub. Developed by Emaar Properties, the community combines premium waterfront living with excellent connectivity, located just 10–15 minutes from Downtown Dubai, DIFC, and Dubai International Airport. Future landmarks, including the planned Dubai Creek Tower, are expected to further enhance the area's global appeal and property values. Investors benefit from attractive rental yields of approximately 6.5%–7.5%, strong demand for both long-term and short-term rentals, and competitive entry prices compared to Downtown Dubai. The planned Dubai Metro Blue Line is expected to further boost accessibility and property values, while the community's sustainable master plan, smart infrastructure, and proximity to the Ras Al Khor Wildlife Sanctuary align with the Dubai 2040 Urban Master Plan, making Dubai Creek Harbour an exceptional choice for both lifestyle buyers and long-term investors.",
  },
];

// ── Area Card with Read-More ──────────────────────────────────────────────────

function AreaCard({ area, delay }: { area: (typeof AREAS)[number]; delay: number }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <article
      className={`reveal delay-${delay} group bg-card border border-border overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(201,162,39,0.35)] hover:border-accent/40`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={area.img}
          alt={area.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
      </div>
      <div className="p-7">
        <h3 className="font-serif text-2xl mb-3">{area.name}</h3>
        {/* Text — clamped to 3 lines when collapsed */}
        <p
          className={`text-sm text-muted-foreground leading-relaxed mb-4 transition-all duration-300 ${
            expanded ? "" : "line-clamp-3"
          }`}
        >
          {area.desc}
        </p>
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-accent hover:text-accent-hover transition-colors"
        >
          {expanded ? "Show Less" : "Read More"}{" "}
          <ArrowRight
            className={`h-4 w-4 transition-transform duration-300 ${expanded ? "rotate-90" : ""}`}
          />
        </button>
      </div>
    </article>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

function ContactPage() {
  useReveal();

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
    <div className="bg-background text-foreground min-h-screen">
      <Nav />

      {/* ── Page Hero ── */}
      <section className="relative min-h-[45vh] flex items-center overflow-hidden pt-24 sm:pt-28">
        <img
          src={heroDubaiImg}
          alt="Dubai property"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/30 to-transparent" />
        <div className="relative z-10 w-full px-6 lg:px-16 py-20">
          <div className="max-w-2xl">
            <p className="reveal-heading eyebrow mb-5">Get in Touch</p>
            <h1 className="reveal font-serif text-5xl lg:text-7xl leading-[1.05] text-foreground mb-6">
              Let's begin the <span className="italic text-accent">conversation.</span>
            </h1>
            <p className="reveal text-lg text-muted-foreground leading-relaxed max-w-xl">
              Our advisors are available 24/7 to answer your questions and guide
              you through Dubai's finest real estate opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* ── Contact Section ── */}
      <section id="contact" className="pt-24 lg:pt-32 bg-card border-t border-border">
        <div className="w-full px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 pb-20">

            {/* Office details */}
            <div className="reveal">
              <p className="eyebrow mb-4">Visit Our Office</p>
              <h2 className="font-serif text-4xl lg:text-5xl mb-8">
                Let's begin the conversation.
              </h2>
              <ul className="space-y-6">
                <ContactRow Icon={MapPin} title="Office Address">
                  Warba Center Al Muraqqabat, Dubai
                </ContactRow>
                <ContactRow Icon={Phone} title="Phone">
                  <a href="tel:+971547521139" className="hover:text-accent">+971 547521139</a>
                  {" / "}
                  <a href="tel:+971547542963" className="hover:text-accent">+971 54 754 2963</a>
                </ContactRow>
                <ContactRow Icon={Mail} title="Email">
                  <a href="mailto:contact@amnariproperties.com" className="hover:text-accent">
                    contact@amnariproperties.com
                  </a>
                </ContactRow>
                <ContactRow Icon={Clock} title="Working Hours">
                  Monday – Saturday&nbsp;&nbsp;10:00 am – 7:00 pm
                </ContactRow>
              </ul>
            </div>

            {/* Contact form */}
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="reveal bg-background border border-border p-8 lg:p-10 space-y-5"
            >
              {status === "success" ? (
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
                    <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                      Message
                    </label>
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

      {/* ── Featured Areas ── */}
      <section className="py-24 lg:py-32">
        <div className="w-full px-6 lg:px-16">
          <p className="reveal-heading eyebrow text-center mb-4">Explore Dubai</p>
          <h2 className="reveal-heading font-serif text-3xl lg:text-5xl text-center mb-14">
            Featured Areas
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {AREAS.map((area, i) => (
              <AreaCard key={area.name} area={area} delay={i + 1} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
