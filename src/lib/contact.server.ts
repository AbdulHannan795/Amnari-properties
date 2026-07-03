import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(1, "Phone is required"),
  message: z.string().optional(),
});

export type ContactFormData = z.infer<typeof ContactSchema>;

export const submitContactForm = createServerFn({ method: "POST" })
  .validator((data: unknown) => ContactSchema.parse(data))
  .handler(async ({ data }) => {
    // Save lead to Supabase using service-role key (server-side only).
    // A database trigger (notify_new_contact_lead) automatically fires after
    // INSERT and calls the "send-contact-email" Edge Function via pg_net
    // to deliver the Resend email notification — no CORS issues.
    const supabase = createClient(
      process.env.VITE_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
    );

    const { error: dbError } = await supabase.from("contact_leads").insert({
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message ?? "",
      source: "website_contact_form",
    });

    if (dbError) {
      console.error("[Supabase] Insert error:", dbError);
      throw new Error("Failed to save your inquiry. Please try again.");
    }

    return { success: true };
  });

