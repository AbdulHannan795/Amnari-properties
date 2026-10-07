import { i as TSS_SERVER_FUNCTION, l as createServerFn } from "./esm-Dova13aH.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact.server-DUBk4ISa.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var ContactSchema = objectType({
	name: stringType().min(1, "Name is required"),
	email: stringType().email("Valid email is required"),
	phone: stringType().min(1, "Phone is required"),
	message: stringType().optional()
});
var submitContactForm_createServerFn_handler = createServerRpc({
	id: "c74fd8339234683cdfbd7aec09a9f5eed946e11952405f4af1e852bfa15ca666",
	name: "submitContactForm",
	filename: "src/lib/contact.server.ts"
}, (opts) => submitContactForm.__executeServer(opts));
var submitContactForm = createServerFn({ method: "POST" }).validator((data) => ContactSchema.parse(data)).handler(submitContactForm_createServerFn_handler, async ({ data }) => {
	const { error: dbError } = await createClient(process.env.VITE_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY).from("contact_leads").insert({
		name: data.name,
		email: data.email,
		phone: data.phone,
		message: data.message ?? "",
		source: "website_contact_form"
	});
	if (dbError) {
		console.error("[Supabase] Insert error:", dbError);
		throw new Error("Failed to save your inquiry. Please try again.");
	}
	return { success: true };
});
//#endregion
export { submitContactForm_createServerFn_handler };
