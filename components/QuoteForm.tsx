"use client";

import { useState } from "react";

const SERVICES = [
  "Ablakok",
  "Redőnyök",
  "Felújítás",
  "Festés",
  "Padlóburkolás",
  "Egyéb",
];

type Values = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  consent: boolean;
};

type Errors = Partial<Record<keyof Values, string>>;

const initial: Values = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
  consent: false,
};

export default function QuoteForm() {
  const [values, setValues] = useState<Values>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  const set = <K extends keyof Values>(key: K, val: Values[K]) => {
    setValues((v) => ({ ...v, [key]: val }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = (): boolean => {
    const e: Errors = {};
    if (values.name.trim().length < 2) e.name = "Kérjük, adja meg a nevét.";
    if (values.phone.replace(/[^\d+]/g, "").length < 6)
      e.phone = "Kérjük, adjon meg egy elérhető telefonszámot.";
    if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      e.email = "Az e-mail cím formátuma nem megfelelő.";
    if (!values.service) e.service = "Válasszon szolgáltatást.";
    if (!values.consent)
      e.consent = "Az adatkezeléshez való hozzájárulás szükséges.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (evt: React.FormEvent) => {
    evt.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    // TODO: valódi küldés bekötése (pl. /api/quote route vagy Web3Forms).
    // Jelenleg csak UI-visszajelzés, backend nélkül.
    await new Promise((r) => setTimeout(r, 900));
    setStatus("done");
  };

  if (status === "done") {
    return (
      <div className="rounded-2xl border border-black/5 bg-white p-8 text-center shadow-[0_20px_50px_-30px_rgba(17,23,32,0.4)]">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-tint text-brand">
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-ink">
          Köszönjük a megkeresést!
        </h3>
        <p className="mx-auto mt-2 max-w-sm text-ink-soft">
          Rögzítettük az ajánlatkérését. Munkatársunk hamarosan felveszi Önnel a
          kapcsolatot a megadott elérhetőségen.
        </p>
        <button
          type="button"
          onClick={() => {
            setValues(initial);
            setStatus("idle");
          }}
          className="mt-6 text-sm font-semibold text-brand hover:text-brand-dark"
        >
          Új ajánlatkérés
        </button>
      </div>
    );
  }

  const inputBase =
    "w-full rounded-xl border bg-white px-4 py-3 text-ink outline-none transition-colors placeholder:text-ink-soft/60 focus:border-brand focus:ring-2 focus:ring-brand/20";

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl border border-black/5 bg-white p-6 shadow-[0_20px_50px_-30px_rgba(17,23,32,0.4)] sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="q-name" className="mb-1.5 block text-sm font-medium text-ink">
            Név <span className="text-brand">*</span>
          </label>
          <input
            id="q-name"
            type="text"
            value={values.name}
            onChange={(e) => set("name", e.target.value)}
            aria-invalid={!!errors.name}
            placeholder="Az Ön neve"
            className={`${inputBase} ${errors.name ? "border-red-400" : "border-black/10"}`}
          />
          {errors.name && (
            <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="q-phone" className="mb-1.5 block text-sm font-medium text-ink">
            Telefonszám <span className="text-brand">*</span>
          </label>
          <input
            id="q-phone"
            type="tel"
            value={values.phone}
            onChange={(e) => set("phone", e.target.value)}
            aria-invalid={!!errors.phone}
            placeholder="+36 20 123 4567"
            className={`${inputBase} ${errors.phone ? "border-red-400" : "border-black/10"}`}
          />
          {errors.phone && (
            <p className="mt-1.5 text-xs text-red-500">{errors.phone}</p>
          )}
        </div>

        <div>
          <label htmlFor="q-email" className="mb-1.5 block text-sm font-medium text-ink">
            E-mail
          </label>
          <input
            id="q-email"
            type="email"
            value={values.email}
            onChange={(e) => set("email", e.target.value)}
            aria-invalid={!!errors.email}
            placeholder="pelda@email.hu"
            className={`${inputBase} ${errors.email ? "border-red-400" : "border-black/10"}`}
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="q-service" className="mb-1.5 block text-sm font-medium text-ink">
            Szolgáltatás <span className="text-brand">*</span>
          </label>
          <select
            id="q-service"
            value={values.service}
            onChange={(e) => set("service", e.target.value)}
            aria-invalid={!!errors.service}
            className={`${inputBase} appearance-none ${errors.service ? "border-red-400" : "border-black/10"} ${values.service ? "text-ink" : "text-ink-soft/60"}`}
          >
            <option value="">Válasszon…</option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="mt-1.5 text-xs text-red-500">{errors.service}</p>
          )}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="q-message" className="mb-1.5 block text-sm font-medium text-ink">
          Üzenet
        </label>
        <textarea
          id="q-message"
          rows={4}
          value={values.message}
          onChange={(e) => set("message", e.target.value)}
          placeholder="Írja le röviden, miben segíthetünk (méretek, helyszín, határidő…)"
          className={`${inputBase} resize-none border-black/10`}
        />
      </div>

      <label className="mt-5 flex items-start gap-3 text-sm text-ink-soft">
        <input
          type="checkbox"
          checked={values.consent}
          onChange={(e) => set("consent", e.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 accent-brand"
        />
        <span>
          Hozzájárulok, hogy a megadott adataimat az ajánlatadás céljából
          kezeljék. <span className="text-brand">*</span>
        </span>
      </label>
      {errors.consent && (
        <p className="mt-1.5 text-xs text-red-500">{errors.consent}</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-brand px-6 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "sending" ? "Küldés…" : "Ajánlatkérés elküldése"}
      </button>
      <p className="mt-3 text-xs text-ink-soft">
        Ingyenes, kötelezettség nélküli. Válaszidő általában 1 munkanap.
      </p>
    </form>
  );
}
