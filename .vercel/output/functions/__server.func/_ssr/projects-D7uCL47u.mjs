import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { o as MessageCircle } from "../_libs/lucide-react.mjs";
import { a as ProjectCard, i as PROJECTS, l as WHATSAPP, n as Footer, r as Nav, t as DEVELOPER_NAMES, u as useReveal } from "./shared-BmZ9wGjA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects-D7uCL47u.js
var import_jsx_runtime = require_jsx_runtime();
function ProjectsPage() {
	useReveal();
	const loop = [...DEVELOPER_NAMES, ...DEVELOPER_NAMES];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-background text-foreground min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative min-h-[55vh] flex items-center overflow-hidden pt-24 sm:pt-28",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=80",
						alt: "Dubai architecture",
						className: "absolute inset-0 h-full w-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-background/85 via-background/60 to-background" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-background/75 via-background/30 to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative z-10 w-full px-6 lg:px-16 py-24",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-2xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "reveal-heading eyebrow mb-5",
									children: "Curated Portfolio"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "reveal font-serif text-5xl lg:text-7xl leading-[1.05] text-foreground mb-6",
									children: [
										"Our ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "italic text-accent",
											children: "Featured"
										}),
										" Projects"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "reveal text-lg text-muted-foreground leading-relaxed max-w-xl",
									children: "Hand-selected launches from Dubai's most reputable developers, with flexible payment plans and exclusive investor allocations."
								})
							]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "py-8 border-y border-border bg-card",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative overflow-hidden group",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex w-max animate-marquee group-hover:[animation-play-state:paused] items-center",
							children: loop.map((name, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center shrink-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xl sm:text-2xl lg:text-3xl font-semibold tracking-widest text-accent hover:text-foreground/60 transition-colors duration-300 cursor-default",
									children: name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mx-8 lg:mx-12 text-foreground/20 select-none text-xl sm:text-2xl",
									children: "·"
								})]
							}, i))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-card to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-card to-transparent" })
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-20 sm:py-24 lg:py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full px-6 lg:px-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center mb-14",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "reveal-heading eyebrow mb-4",
								children: "All Listings"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "reveal-heading font-serif text-3xl sm:text-4xl lg:text-5xl mb-5",
								children: "Explore Every Development"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "reveal text-muted-foreground max-w-2xl mx-auto",
								children: "Each project has been personally vetted by our advisors. Click any listing to inquire directly with our team via WhatsApp."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-7",
						children: PROJECTS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, { p }, p.name))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-20 bg-card border-t border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-full px-6 lg:px-16",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "reveal bg-background border border-accent/30 p-10 lg:p-16 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "reveal-heading eyebrow mb-4",
								children: "Ready to invest?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "reveal-heading font-serif text-3xl lg:text-5xl mb-6",
								children: "Speak with a dedicated advisor today."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground max-w-xl mx-auto mb-10",
								children: "Our team is available 7 days a week to discuss payment plans, ROI projections, and preferred unit allocations across all featured projects."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap justify-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: WHATSAPP,
									target: "_blank",
									rel: "noreferrer",
									className: "btn-gold btn-gold-hover",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), " WhatsApp Us Now"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "/#contact",
									className: "btn-outline-gold",
									children: "Send an Inquiry"
								})]
							})
						]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { ProjectsPage as component };
