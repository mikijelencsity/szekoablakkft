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

  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:14px 0;border-bottom:1px solid #e6e9f0;">
        <p style="margin:0 0 4px;font:600 12px/1.4 -apple-system,Segoe UI,Roboto,Arial,sans-serif;letter-spacing:.04em;text-transform:uppercase;color:#6b7280;">
          ${label}
        </p>
        <p style="margin:0;font:400 16px/1.5 -apple-system,Segoe UI,Roboto,Arial,sans-serif;color:#12181f;">
          ${value}
        </p>
      </td>
    </tr>
  `;

  const html = `
    <!DOCTYPE html>
    <html lang="hu">
      <body style="margin:0;padding:0;background:#eef2ff;font-family:-apple-system,Segoe UI,Roboto,Arial,sans-serif;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#eef2ff;padding:32px 16px;">
          <tr>
            <td align="center">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 20px 45px -20px rgba(18,24,31,0.25);">
                <tr>
                  <td style="background:#0b1220;padding:28px 32px;">
                    <p style="margin:0;font:700 13px/1.4 -apple-system,Segoe UI,Roboto,Arial,sans-serif;letter-spacing:.06em;text-transform:uppercase;color:#2457ff;">
                      Szeko Ablak Kft
                    </p>
                    <h1 style="margin:6px 0 0;font:700 22px/1.3 -apple-system,Segoe UI,Roboto,Arial,sans-serif;color:#ffffff;">
                      Új ajánlatkérés érkezett
                    </h1>
                  </td>
                </tr>
                <tr>
                  <td style="padding:8px 32px 0;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      ${row("Név", escapeHtml(name))}
                      ${row(
                        "Telefon",
                        `<a href="tel:${escapeHtml(phone)}" style="color:#2457ff;text-decoration:none;">${escapeHtml(phone)}</a>`
                      )}
                      ${row(
                        "E-mail",
                        email
                          ? `<a href="mailto:${escapeHtml(email)}" style="color:#2457ff;text-decoration:none;">${escapeHtml(email)}</a>`
                          : "—"
                      )}
                      ${row("Szolgáltatás", escapeHtml(service))}
                      ${row("Honnan ír", escapeHtml(location || "—"))}
                      ${row(
                        "Üzenet",
                        (escapeHtml(message || "—")).replace(/\n/g, "<br/>")
                      )}
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:24px 32px 32px;">
                    <a href="tel:${escapeHtml(phone)}" style="display:inline-block;background:#2457ff;color:#ffffff;font:600 15px/1 -apple-system,Segoe UI,Roboto,Arial,sans-serif;text-decoration:none;padding:14px 24px;border-radius:999px;">
                      Visszahívás — ${escapeHtml(phone)}
                    </a>
                  </td>
                </tr>
              </table>
              <p style="margin:20px 0 0;font:400 12px/1.5 -apple-system,Segoe UI,Roboto,Arial,sans-serif;color:#8a93a3;">
                Ez az e-mail a szekoablak.hu weboldal ajánlatkérő űrlapjáról érkezett automatikusan.
              </p>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;

  try {
    const { error } = await resend.emails.send({
      from: "Szeko Ablak Kft weboldal <arajanlat@szekoablak.hu>",
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
