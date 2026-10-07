import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as ArrowRight, a as Phone, b as CircleCheckBig, c as MapPin, h as Clock, l as Mail, v as LoaderCircle, x as CircleAlert } from "../_libs/lucide-react.mjs";
import { n as Footer, r as Nav, u as useReveal } from "./shared-BmZ9wGjA.mjs";
import { t as submitContactForm } from "./contact.server-7NlvjpNB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-DtE-vdwk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var dubai_academic_city_default = "/assets/dubai%20academic%20city-DCddkXvL.jpeg";
var dubai_south_default = "/assets/dubai%20south-CEKCK3Oa.jpg";
var dubai_greek_harbor_default = "/assets/dubai%20greek%20harbor-DbbyNemh.jpg";
var hero_dubai_default = "/assets/hero-dubai-YIak1F0h.jpg";
function Field({ label, name, type, required }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: "block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		name,
		type,
		required,
		className: "w-full bg-transparent border border-border focus:border-accent outline-none px-4 py-3 text-foreground"
	})] });
}
function ContactRow({ Icon, title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "flex gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid h-11 w-11 place-items-center shrink-0 border border-accent/40 bg-accent/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4 text-accent" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-xs uppercase tracking-[0.2em] text-accent mb-1",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-foreground/90 leading-relaxed text-sm",
			children
		})] })]
	});
}
var AREAS = [
	{
		name: "Dubai Academic City",
		img: dubai_academic_city_default,
		desc: "Dubai Academic City is rapidly transforming into one of Dubai's most promising investment destinations. Strategically located opposite Dubai Silicon Oasis, it benefits from excellent connectivity and is planned to be served by the future Dubai Metro Blue Line, significantly improving accessibility across the city. The government is investing billions of 12.8 Billion dirhams to expand the surrounding technology and innovation ecosystem, creating a major technology hub in Dubai silicon oasis which is opposite to Dubai Academic city that is expected to attract global companies, professionals, and students. This combination of education, technology, infrastructure, and connectivity positions the area for strong capital appreciation and rental demand."
	},
	{
		name: "Dubai South",
		img: dubai_south_default,
		desc: "Dubai South is one of Dubai's largest master-planned developments and a key focus of the Dubai 2040 Urban Master Plan. Its biggest growth driver is the expansion of Al Maktoum International Airport, which is set to become the world's largest airport upon completion. The surrounding logistics, aviation, commercial, and residential developments are expected to create hundreds of thousands of jobs, driving long-term housing demand. With comparatively affordable property prices today and significant infrastructure investment underway, Dubai South offers strong potential for both capital growth and rental returns."
	},
	{
		name: "Dubai Creek Harbour",
		img: dubai_greek_harbor_default,
		desc: "Dubai Creek Harbour is one of Dubai's most promising waterfront investment destinations, offering strong long-term capital appreciation as it evolves into the city's next major urban hub. Developed by Emaar Properties, the community combines premium waterfront living with excellent connectivity, located just 10–15 minutes from Downtown Dubai, DIFC, and Dubai International Airport. Future landmarks, including the planned Dubai Creek Tower, are expected to further enhance the area's global appeal and property values. Investors benefit from attractive rental yields of approximately 6.5%–7.5%, strong demand for both long-term and short-term rentals, and competitive entry prices compared to Downtown Dubai. The planned Dubai Metro Blue Line is expected to further boost accessibility and property values, while the community's sustainable master plan, smart infrastructure, and proximity to the Ras Al Khor Wildlife Sanctuary align with the Dubai 2040 Urban Master Plan, making Dubai Creek Harbour an exceptional choice for both lifestyle buyers and long-term investors."
	}
];
function AreaCard({ area, delay }) {
	const [expanded, setExpanded] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: `reveal delay-${delay} group bg-card border border-border overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(201,162,39,0.35)] hover:border-accent/40`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-[4/3] overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: area.img,
				alt: area.name,
				loading: "lazy",
				className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-serif text-2xl mb-3",
					children: area.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: `text-sm text-muted-foreground leading-relaxed mb-4 transition-all duration-300 ${expanded ? "" : "line-clamp-3"}`,
					children: area.desc
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setExpanded((v) => !v),
					className: "inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-accent hover:text-accent-hover transition-colors",
					children: [
						expanded ? "Show Less" : "Read More",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: `h-4 w-4 transition-transform duration-300 ${expanded ? "rotate-90" : ""}` })
					]
				})
			]
		})]
	});
}
function ContactPage() {
	useReveal();
	const formRef = (0, import_react.useRef)(null);
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [errorMsg, setErrorMsg] = (0, import_react.useState)("");
	async function handleSubmit(e) {
		e.preventDefault();
		setStatus("loading");
		setErrorMsg("");
		const fd = new FormData(e.currentTarget);
		try {
			await submitContactForm({ data: {
				name: fd.get("name"),
				email: fd.get("email"),
				phone: fd.get("phone"),
				message: fd.get("message") || ""
			} });
			setStatus("success");
			formRef.current?.reset();
		} catch (err) {
			setStatus("error");
			setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-background text-foreground min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative min-h-[45vh] flex items-center overflow-hidden pt-24 sm:pt-28",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: hero_dubai_default,
						alt: "Dubai property",
						className: "absolute inset-0 h-full w-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-background/75" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-background/80 via-background/30 to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative z-10 w-full px-6 lg:px-16 py-20",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-2xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "reveal-heading eyebrow mb-5",
									children: "Get in Touch"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "reveal font-serif text-5xl lg:text-7xl leading-[1.05] text-foreground mb-6",
									children: ["Let's begin the ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "italic text-accent",
										children: "conversation."
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "reveal text-lg text-muted-foreground leading-relaxed max-w-xl",
									children: "Our advisors are available 24/7 to answer your questions and guide you through Dubai's finest real estate opportunities."
								})
							]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "contact",
				className: "pt-24 lg:pt-32 bg-card border-t border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-full px-6 lg:px-16",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid lg:grid-cols-2 gap-12 pb-20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "reveal",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow mb-4",
									children: "Visit Our Office"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-serif text-4xl lg:text-5xl mb-8",
									children: "Let's begin the conversation."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "space-y-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactRow, {
											Icon: MapPin,
											title: "Office Address",
											children: "Warba Center Al Muraqqabat, Dubai"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContactRow, {
											Icon: Phone,
											title: "Phone",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: "tel:+971547521139",
													className: "hover:text-accent",
													children: "+971 547521139"
												}),
												" / ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: "tel:+971547542963",
													className: "hover:text-accent",
													children: "+971 54 754 2963"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactRow, {
											Icon: Mail,
											title: "Email",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: "mailto:contact@amnariproperties.com",
												className: "hover:text-accent",
												children: "contact@amnariproperties.com"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactRow, {
											Icon: Clock,
											title: "Working Hours",
											children: "Monday – Saturday\xA0\xA010:00 am – 7:00 pm"
										})
									]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
							ref: formRef,
							onSubmit: handleSubmit,
							className: "reveal bg-background border border-border p-8 lg:p-10 space-y-5",
							children: status === "success" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col items-center justify-center text-center gap-5 py-10",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-20 w-20 place-items-center rounded-full bg-accent/10 border border-accent/30",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "h-9 w-9 text-accent" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-serif text-2xl mb-2",
										children: "Thank you!"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted-foreground text-sm leading-relaxed",
										children: "We will contact you shortly."
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setStatus("idle"),
										className: "btn-outline-gold text-sm",
										children: "Send another message"
									})
								]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow mb-1",
									children: "Send a Message"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-serif text-2xl mb-4",
									children: "Request a private consultation"
								}),
								status === "error" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start gap-3 bg-red-500/10 border border-red-500/30 px-4 py-3 text-sm text-red-400",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-4 w-4 mt-0.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: errorMsg })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid sm:grid-cols-2 gap-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Full Name",
										name: "name",
										type: "text",
										required: true
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Phone / WhatsApp",
										name: "phone",
										type: "tel",
										required: true
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Email Address",
									name: "email",
									type: "email",
									required: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2",
									children: "Message"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									name: "message",
									rows: 4,
									className: "w-full bg-transparent border border-border focus:border-accent outline-none px-4 py-3 text-foreground resize-none",
									placeholder: "Tell us about your requirements..."
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									disabled: status === "loading",
									className: "btn-gold btn-gold-hover w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed",
									children: status === "loading" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), " Sending…"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Send Inquiry ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })] })
								})
							] })
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-24 lg:py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full px-6 lg:px-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "reveal-heading eyebrow text-center mb-4",
							children: "Explore Dubai"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "reveal-heading font-serif text-3xl lg:text-5xl text-center mb-14",
							children: "Featured Areas"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-7",
							children: AREAS.map((area, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AreaCard, {
								area,
								delay: i + 1
							}, area.name))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { ContactPage as component };
