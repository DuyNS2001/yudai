
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("re_3yzGMSCG_AnN517yTh7oGiqGy4YzikxhR"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

serve(async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }
  try {
    const { name, email, phone, subject, message }: ContactEmailRequest =
      await req.json();

    // E-Mail Empfänger (ändern falls gewünscht)
    const toMail = "info@yudai.de";

    const html = `
      <h2>Neue Kontaktanfrage</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>E-Mail:</b> ${email}</p>
      <p><b>Telefon:</b> ${phone}</p>
      <p><b>Betreff:</b> ${subject}</p>
      <p><b>Nachricht:</b></p>
      <p>${message.replace(/\n/g, "<br />")}</p>
    `;

    const emailResponse = await resend.emails.send({
      from: "Yudai Kontakt <onboarding@resend.dev>",
      to: [toMail],
      subject: `Kontaktformular: ${subject}`,
      html,
      reply_to: email,
    });

    console.log("Kontaktformular-Mail gesendet:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Fehler beim E-Mail-Versand:", error);
    return new Response(
      JSON.stringify({ error: error.message || String(error) }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
});
