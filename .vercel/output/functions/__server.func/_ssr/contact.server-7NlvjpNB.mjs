import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-BNorQnXI.mjs";
import { i as TSS_SERVER_FUNCTION, l as createServerFn } from "./esm-Dova13aH.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact.server-7NlvjpNB.js
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
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
var submitContactForm = createServerFn({ method: "POST" }).validator((data) => ContactSchema.parse(data)).handler(createSsrRpc("c74fd8339234683cdfbd7aec09a9f5eed946e11952405f4af1e852bfa15ca666"));
//#endregion
export { submitContactForm as t };
