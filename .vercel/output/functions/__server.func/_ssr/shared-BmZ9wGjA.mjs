import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as ArrowRight, c as MapPin, d as Instagram, i as ShieldCheck, m as Eye, n as X, o as MessageCircle, p as Facebook, r as Users, s as Menu, t as Youtube, u as Linkedin, y as Earth } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shared-BmZ9wGjA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Amnari_Properties__Update_default = "/assets/Amnari_Properties__Update-Bz4d7CmG.png";
var wraith_by_binghatti_default = "/assets/wraith%20by%20binghatti-Cvx04jkH.webp";
var Tilal_binghatti_default = "/assets/Tilal%20binghatti-BobvoDiO.jpg";
var greenz_by_danube_default = "/assets/greenz%20by%20danube-CeCHBhPF.jpg";
var terrawoods_by_emmar_default = "/assets/terrawoods%20by%20emmar-DwkOrBby.webp";
var valia_emaar_default = "/assets/valia%20emaar-DptxOKFi.jpg";
var samana_south_haven_default = "/assets/samana%20south%20haven-DPEO1t59.jpg";
var woods_sobha_default = "/assets/woods_sobha-BTKKveK3.jpg";
var sobha_sanctuary_default = "/assets/sobha-sanctuary-D0s6KGdN.jpg";
var Chelsea_Residences_by_Damac_default = "/assets/Chelsea-Residences-by-Damac-B34YC3E1.jpg";
var alva_valley_phase_3_default = "/assets/alva_valley_phase%203-Dy0XfH9C.png";
var spectre_pic_2_default = "/assets/spectre_pic_2-CkFhP819.jpg";
var the_archive_by_imtiaz_default = "/assets/the-archive-by-imtiaz-BgTon7Wo.webp";
var shahrukhz_residences_default = "/assets/shahrukhz_residences-BHRKpEgZ.jpg";
var starfall_binghatti_default = "/assets/starfall_binghatti-DMNmhauv.webp";
var Serenz_danube_default = "/assets/Serenz_danube-CNx3u12x.jpg";
/**
* shared.tsx — Shared constants, hooks, and components used across all pages.
* Imported by: index.tsx, about.tsx, projects.tsx
*/
var WHATSAPP = "https://wa.me/971547521139?text=Hello%20Amnari%20Properties%2C%20I%20am%20interested%20in%20learning%20more%20about%20your%20properties.";
/** Nav items — "About" and "Projects" navigate to dedicated pages */
var NAV = [
	{
		label: "Home",
		href: "/"
	},
	{
		label: "About",
		href: "/about"
	},
	{
		label: "Partners",
		href: "/#partners"
	},
	{
		label: "Projects",
		href: "/projects"
	},
	{
		label: "Social",
		href: "/#social"
	},
	{
		label: "Contact",
		href: "/contact"
	}
];
var PROJECTS = [
	{
		name: "Shahrukhz Residences",
		developer: "Danube Properties",
		loc: "Dubai Maritime City",
		bedrooms: "Studio, 1BR, 2BR, 3BR",
		price: "AED 1.65M",
		img: shahrukhz_residences_default,
		handover: "Q2 2030"
	},
	{
		name: "Binghatti Starfall",
		developer: "Binghatti Developers",
		loc: "Al Jaddaf, Dubai",
		bedrooms: "Studio, 1BR, 2BR",
		price: "AED 760K",
		img: starfall_binghatti_default,
		handover: "Q3 2028"
	},
	{
		name: "Alva at The Valley",
		developer: "Emaar Properties",
		loc: "The Valley, Dubai",
		bedrooms: "3 BR, 4 BR Townhouses",
		price: "AED 4.38M",
		img: alva_valley_phase_3_default,
		handover: "Q1 2030"
	},
	{
		name: "Binghatti Spectre",
		developer: "Binghatti Developers",
		loc: "Al Jaddaf, Dubai",
		bedrooms: "Studio, 1 BR, 2 BR, 3 BR, Offices & Retail",
		price: "AED 775K",
		img: spectre_pic_2_default,
		handover: "Q4 2028"
	},
	{
		name: "Archive by Imtiaz",
		developer: "Imtiaz Developments",
		loc: "Dubai Land Residence Complex (DLRC)",
		bedrooms: "Studio, 1 BR, 2 BR, 3 BR Apartments",
		price: "AED 666K",
		img: the_archive_by_imtiaz_default,
		handover: "Q3 2028"
	},
	{
		name: "Valia by Emaar",
		developer: "Emaar Properties",
		loc: "Dubai Creek Harbour",
		bedrooms: "1 BR, 2 BR, 3 BR, 4 BR Apartments",
		price: "AED 1.96M",
		img: valia_emaar_default,
		handover: "Q4 2030"
	},
	{
		name: "SAMANA South Haven",
		developer: "SAMANA Developers",
		loc: "Dubai South",
		bedrooms: "Studio, 1, 2 BR",
		price: "AED 599K",
		img: samana_south_haven_default,
		handover: "Q4 2028"
	},
	{
		name: "Terra Woods",
		developer: "Emaar Properties",
		loc: "Madinat Expo City",
		bedrooms: "1, 2, 3 BR",
		price: "AED 1.6M",
		img: terrawoods_by_emmar_default,
		handover: "Q1 2030"
	},
	{
		name: "The Woods by Sobha Sanctuary",
		developer: "Sobha Realty",
		loc: "Al Yufrah 1",
		bedrooms: "1, 2 BR",
		price: "AED 999K",
		img: woods_sobha_default,
		handover: "Q4 2029"
	},
	{
		name: "Greenz by Danube",
		developer: "Danube Properties",
		loc: "Academic City, Dubai",
		bedrooms: "3, 4, 5 BR",
		price: "AED 3.5M",
		img: greenz_by_danube_default,
		handover: "Q4 2029"
	},
	{
		name: "Serenz by Danube",
		developer: "Danube Properties",
		loc: "Jumeirah Village Circle (JVC), Dubai",
		bedrooms: "Studio, 1BR, 2BR, 3BR",
		price: "AED 850K",
		img: Serenz_danube_default,
		handover: "Q4 2029"
	},
	{
		name: "Sobha Sanctuary",
		developer: "Sobha Realty",
		loc: "Al Yufrah 1",
		bedrooms: "4, 5, 6 BR",
		price: "AED 3.99M",
		img: sobha_sanctuary_default,
		handover: "Q4 2029"
	},
	{
		name: "Chelsea Residences by DAMAC",
		developer: "DAMAC Properties",
		loc: "Dubai Maritime City",
		bedrooms: "1, 2, 3 BR",
		price: "AED 2.16M",
		img: Chelsea_Residences_by_Damac_default,
		handover: "Q4 2029"
	},
	{
		name: "Binghatti Wraith",
		developer: "Binghatti",
		loc: "Al Jaddaf",
		bedrooms: "Studio, 1 BR, 2 BR, 3 BR",
		price: "AED 799K",
		img: wraith_by_binghatti_default,
		handover: "Q4 2027"
	},
	{
		name: "Tilal Binghatti",
		developer: "Binghatti",
		loc: "Dubai Academic City",
		bedrooms: "4, 5 BR",
		price: "AED 4.2M",
		img: Tilal_binghatti_default,
		handover: "Q4 2028"
	}
];
var DEVELOPER_NAMES = [
	"EMAAR",
	"NAKHEEL",
	"DANUBE",
	"DAMAC",
	"SOBHA",
	"BINGHATTI",
	"IMTIAZ",
	"MERAAS",
	"OMNIYAT",
	"AZIZI",
	"ELINGTON",
	"SAMANA",
	"REPORTAGE",
	"BNW DEVELOPMENTS",
	"BT PROPERTIES",
	"IMAN",
	"ONE DEVELOPMENT",
	"TARRAD",
	"TIGER",
	"BEYOND"
];
var VALUES = [
	{
		icon: ShieldCheck,
		title: "Integrity",
		text: "RERA-licensed advisory grounded in honest, long-term partnerships."
	},
	{
		icon: Eye,
		title: "Transparency",
		text: "Full disclosure on payment plans, fees, and post-handover obligations."
	},
	{
		icon: Earth,
		title: "Global Reach",
		text: "International desks supporting investors across 40+ countries."
	},
	{
		icon: Users,
		title: "Client-First",
		text: "A single advisor dedicated from first inquiry to title-deed handover."
	}
];
function useReveal() {
	(0, import_react.useEffect)(() => {
		const els = document.querySelectorAll(".reveal, .reveal-heading");
		const io = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")), { threshold: .1 });
		els.forEach((el) => io.observe(el));
		return () => io.disconnect();
	}, []);
}
function TikTokIcon({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		fill: "currentColor",
		className,
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.94a8.16 8.16 0 0 0 4.77 1.52V7a4.85 4.85 0 0 1-1.84-.31z" })
	});
}
function Logo({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/",
		className: `flex items-center ${className}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: Amnari_Properties__Update_default,
			alt: "Amnari Properties",
			className: "h-28 sm:h-36 w-auto object-contain shrink-0 py-1"
		})
	});
}
function Stat({ n, l }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "font-serif text-2xl text-accent",
		children: n
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1",
		children: l
	})] });
}
/** Project card — shared between the landing Projects section and /projects page */
function ProjectCard({ p }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "reveal group bg-card border border-border overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-30px_rgba(201,162,39,0.35)] hover:border-accent/40",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-[4/3] overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: p.img,
					alt: p.name,
					loading: "lazy",
					className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute top-4 left-4 bg-background/80 backdrop-blur px-3 py-1 text-[0.65rem] tracking-[0.2em] uppercase text-accent border border-accent/30",
					children: ["Handover ", p.handover]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute top-4 right-4 bg-accent/90 backdrop-blur px-3 py-1 text-[0.65rem] tracking-[0.15em] uppercase text-accent-foreground font-semibold",
					children: p.price
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1.5 text-xs text-muted-foreground tracking-wider uppercase",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5 text-accent" }),
						" ",
						p.loc
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-serif text-xl mt-3 mb-1",
					children: p.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-accent/80 tracking-wide mb-3 uppercase",
					children: p.developer
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-4 text-xs text-muted-foreground mb-6 pt-3 border-t border-border/50",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p.bedrooms })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: WHATSAPP,
					target: "_blank",
					rel: "noreferrer",
					className: "inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-accent hover:text-accent-hover transition-colors",
					children: ["Inquire Now ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
				})
			]
		})]
	});
}
function Nav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		onScroll();
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	/** Renders a nav item — uses <Link> for page routes, <a> for anchors */
	function NavLink({ item, mobile, onClick }) {
		const cls = mobile ? "text-foreground/90 hover:text-accent transition-colors" : "text-sm text-foreground/80 hover:text-accent transition-colors tracking-wide";
		if (item.href === "/") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/",
			className: cls,
			onClick,
			children: item.label
		});
		if (item.href === "/about") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/about",
			className: cls,
			onClick,
			children: item.label
		});
		if (item.href === "/projects") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/projects",
			className: cls,
			onClick,
			children: item.label
		});
		if (item.href === "/contact") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/contact",
			className: cls,
			onClick,
			children: item.label
		});
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: item.href,
			className: cls,
			onClick,
			children: item.label
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full px-6 lg:px-16 h-24 sm:h-28 flex lg:grid lg:grid-cols-3 justify-between items-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex justify-start",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden lg:flex items-center justify-center gap-9",
					children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLink, { item: n }, n.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-end gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: WHATSAPP,
						target: "_blank",
						rel: "noreferrer",
						className: "hidden sm:inline-flex btn-gold btn-gold-hover cursor-pointer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), " Contact"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setOpen((v) => !v),
						className: "lg:hidden text-foreground p-2 -mr-2",
						"aria-label": "Menu",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-8 w-8" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-8 w-8" })
					})]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "lg:hidden bg-background/95 backdrop-blur-md border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-6 py-6 flex flex-col gap-4",
				children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLink, {
					item: n,
					mobile: true,
					onClick: () => setOpen(false)
				}, n.label))
			})
		})]
	});
}
function FloatingWhatsApp() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: WHATSAPP,
		target: "_blank",
		rel: "noreferrer",
		"aria-label": "Chat on WhatsApp",
		className: "fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-accent text-accent-foreground shadow-[0_10px_30px_-5px_rgba(201,162,39,0.6)] hover:bg-accent-hover hover:scale-110 transition-all",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-6 w-6" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 rounded-full bg-accent/40 animate-ping" })]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border bg-card py-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full px-6 lg:px-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid md:grid-cols-[1.4fr_1fr_1fr] gap-10 mb-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground mt-2 max-w-sm leading-relaxed",
						children: "A Dubai-headquartered real-estate advisory connecting global investors with the UAE's most prestigious developments."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mb-4",
						children: "Navigate"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-2 text-sm",
						children: NAV.map((n) => {
							const footerCls = "text-muted-foreground hover:text-accent transition-colors";
							if (n.href === "/") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: footerCls,
								children: n.label
							}) }, n.label);
							if (n.href === "/about") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/about",
								className: footerCls,
								children: n.label
							}) }, n.label);
							if (n.href === "/projects") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/projects",
								className: footerCls,
								children: n.label
							}) }, n.label);
							if (n.href === "/contact") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: footerCls,
								children: n.label
							}) }, n.label);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: n.href,
								className: footerCls,
								children: n.label
							}) }, n.label);
						})
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mb-4",
						children: "Follow"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-3 flex-wrap",
						children: [
							{
								Icon: Instagram,
								link: "https://www.instagram.com/amnaripropertiesuae/"
							},
							{
								Icon: Facebook,
								link: "https://www.facebook.com/profile.php?id=61586962122282"
							},
							{
								Icon: Linkedin,
								link: "https://www.linkedin.com/company/amnari-properties/"
							},
							{
								Icon: TikTokIcon,
								link: "https://www.tiktok.com/@amnaripropertiesuae"
							},
							{
								Icon: Youtube,
								link: "https://www.youtube.com/@AmnariPropertiesuae"
							}
						].map(({ Icon, link }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: link,
							target: "_blank",
							rel: "noreferrer",
							className: "grid h-10 w-10 place-items-center border border-border hover:border-accent hover:bg-accent hover:text-accent-foreground text-accent transition-colors",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
						}, i))
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t border-border pt-6 flex flex-col items-center gap-2 text-center text-xs text-muted-foreground tracking-wide",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Amnari Properties. All Rights Reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/privacy-policy",
					className: "hover:text-accent transition-colors underline underline-offset-2",
					children: "Privacy Policy"
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingWhatsApp, {})]
	});
}
//#endregion
export { ProjectCard as a, VALUES as c, PROJECTS as i, WHATSAPP as l, Footer as n, Stat as o, Nav as r, TikTokIcon as s, DEVELOPER_NAMES as t, useReveal as u };
