import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { N as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DT5w6704.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-VMF_R55g.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$5 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Amnari Properties — Premium Dubai Real Estate & Off-Plan Investments" },
			{
				name: "description",
				content: "Amnari Properties connects global investors with Dubai's most prestigious off-plan developments. Partnered with Emaar, DAMAC, Sobha, and Nakheel."
			},
			{
				property: "og:title",
				content: "Amnari Properties — Premium Dubai Real Estate"
			},
			{
				property: "og:description",
				content: "Invest in Dubai's finest off-plan properties with a trusted UAE brokerage."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.jpg",
				type: "image/jpeg"
			},
			{
				rel: "shortcut icon",
				href: "/favicon.jpg",
				type: "image/jpeg"
			},
			{
				rel: "apple-touch-icon",
				href: "/favicon.jpg"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
			}
		],
		scripts: [{ children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MP4SN6TN');` }]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("noscript", { dangerouslySetInnerHTML: { __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MP4SN6TN" height="0" width="0" style="display:none;visibility:hidden"></iframe>` } }),
			children,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$5.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$4 = () => import("./projects-D7uCL47u.mjs");
var Route$4 = createFileRoute("/projects")({
	head: () => ({ meta: [
		{ title: "Our Projects — Amnari Properties Dubai" },
		{
			name: "description",
			content: "Browse Amnari Properties' curated portfolio of premium off-plan projects across Dubai — Marina, Palm Jumeirah, Downtown, Business Bay and more."
		},
		{
			property: "og:title",
			content: "Projects — Amnari Properties"
		},
		{
			property: "og:description",
			content: "Explore Dubai's finest off-plan developments hand-selected by Amnari Properties."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./privacy-policy-BbxY-ev0.mjs");
var Route$3 = createFileRoute("/privacy-policy")({
	head: () => ({ meta: [
		{ title: "Privacy Policy — Amnari Properties" },
		{
			name: "description",
			content: "Read the Privacy Policy of Amnari Properties. We are committed to protecting your personal information and using it solely to assist your Dubai real estate journey."
		},
		{
			property: "og:title",
			content: "Privacy Policy — Amnari Properties"
		},
		{
			property: "og:description",
			content: "Learn how Amnari Properties collects, uses, and protects your personal data."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./contact-DtE-vdwk.mjs");
var Route$2 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact Amnari Properties — Get in Touch" },
		{
			name: "description",
			content: "Contact Amnari Properties for expert Dubai real estate advisory. Visit our office in Dubai, call us, or send an enquiry — we are here to help."
		},
		{
			property: "og:title",
			content: "Contact Amnari Properties"
		},
		{
			property: "og:description",
			content: "Reach out to Amnari Properties for personalised real estate advice in Dubai."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./about-DdDnH75T.mjs");
var Route$1 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About Amnari Properties — Dubai Real Estate Advisory" },
		{
			name: "description",
			content: "Learn about Amnari Properties — a trusted UAE real estate advisory connecting global investors with Dubai's most prestigious off-plan developments."
		},
		{
			property: "og:title",
			content: "About Amnari Properties"
		},
		{
			property: "og:description",
			content: "15+ years of expertise in Dubai real estate. RERA-licensed advisory serving investors across 40+ countries."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-Q7faaGYy.mjs");
var Route = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Amnari Properties — Premium Dubai Real Estate & Off-Plan Investments" },
		{
			name: "description",
			content: "Invest in Dubai's most prestigious off-plan properties. Amnari Properties partners with Emaar, DAMAC, Sobha & Nakheel to serve global investors."
		},
		{
			property: "og:title",
			content: "Amnari Properties — Premium Dubai Real Estate"
		},
		{
			property: "og:description",
			content: "A trusted UAE brokerage connecting international investors with Dubai's finest developments."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var ProjectsRoute = Route$4.update({
	id: "/projects",
	path: "/projects",
	getParentRoute: () => Route$5
});
var PrivacyPolicyRoute = Route$3.update({
	id: "/privacy-policy",
	path: "/privacy-policy",
	getParentRoute: () => Route$5
});
var ContactRoute = Route$2.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$5
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$5
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$5
	}),
	AboutRoute,
	ContactRoute,
	PrivacyPolicyRoute,
	ProjectsRoute
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
