import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = process.env.QUOTE_TO_EMAIL ?? "szeko2010@gmail.com";
const CC_EMAILS = (process.env.QUOTE_CC_EMAIL ?? "")
  .split(",")
  .map((e) => e.trim())
  .filter(Boolean);

type QuotePayload = {
  name: string;
  phone: string;
  email: string;
  service: string;
  location: string;
  message: string;
};

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(request: Request) {
  let body: Partial<QuotePayload>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Érvénytelen kérés." }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const phone = (body.phone ?? "").trim();
  const email = (body.email ?? "").trim();
  const service = (body.service ?? "").trim();
  const location = (body.location ?? "").trim();
  const message = (body.message ?? "").trim();

  if (name.length < 2 || phone.replace(/[^\d+]/g, "").length < 6 || !service) {
    return NextResponse.json({ error: "Hiányzó vagy hibás adatok." }, { status: 400 });
  }

  const html = `
    <h2>Új ajánlatkérés — Szeko Ablak Kft</h2>
    <p><strong>Név:</strong> ${escapeHtml(name)}</p>
    <p><strong>Telefon:</strong> ${escapeHtml(phone)}</p>
    <p><strong>E-mail:</strong> ${escapeHtml(email || "—")}</p>
    <p><strong>Szolgáltatás:</strong> ${escapeHtml(service)}</p>
    <p><strong>Honnan ír:</strong> ${escapeHtml(location || "—")}</p>
    <p><strong>Üzenet:</strong><br/>${escapeHtml(message || "—").replace(/\n/g, "<br/>")}</p>
  `;

  try {
    const { error } = await resend.emails.send({
      from: "Szeko Ablak Kft weboldal <onboarding@resend.dev>",
      to: TO_EMAIL,
      cc: CC_EMAILS.length > 0 ? CC_EMAILS : undefined,
      replyTo: email || undefined,
      subject: `Új ajánlatkérés — ${name} (${service})`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Nem sikerült elküldeni." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Quote send failed:", err);
    return NextResponse.json({ error: "Nem sikerült elküldeni." }, { status: 500 });
  }
}
