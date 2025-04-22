
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

// Den API-Key über die Umgebungsvariable RESEND_API_KEY abrufen
const apiKey = Deno.env.get("RESEND_API_KEY");
console.log("API Key vorhanden:", !!apiKey);
const resend = new Resend(apiKey);

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
    console.log("Kontaktformular-Anfrage empfangen");
    const { name, email, phone, subject, message }: ContactEmailRequest =
      await req.json();

    // E-Mail Empfänger - hier kannst du deine persönliche E-Mail-Adresse eingeben
    const toMail = "duyyy@icloud.com"; // Hier die gewünschte Empfänger-E-Mail eintragen

    const html = `
      <h2>Neue Kontaktanfrage</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>E-Mail:</b> ${email}</p>
      <p><b>Telefon:</b> ${phone}</p>
      <p><b>Betreff:</b> ${subject}</p>
      <p><b>Nachricht:</b></p>
      <p>${message.replace(/\n/g, "<br />")}</p>
    `;

    console.log("Versuche E-Mail zu senden an:", toMail);

    const emailResponse = await resend.emails.send({
      from: "Yudai Kontakt <onboarding@resend.dev>", // Die onboarding-Domain funktioniert immer für Tests
      to: [toMail],
      subject: `Kontaktformular: ${subject}`,
      html,
      reply_to: email,
    });

    console.log("Kontaktformular-Mail gesendet:", emailResponse);

    return new Response(JSON.stringify({ success: true, emailResponse }), {
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
