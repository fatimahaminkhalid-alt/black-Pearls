"use client";

import { useId, useState } from "react";
import { validateLead } from "@/lib/leadValidation";
import { ArrowIcon, ShieldCheckIcon } from "@/components/contact/icons";
import { useI18n } from "@/components/I18nProvider";

// Shared form used by the Contact page and the agencies interest dialog (Figma "Premium Form").
// Validates in the browser with the same rules as the server, posts to /api/contact,
// and calls onSuccess() so the parent can show the thank-you toast.

// Field structure only; labels and placeholders come from lib/i18n/{ar,en}.js (form.contact / form.agence).
export const contactFields = [
  { name: "name", required: true, autoComplete: "name" },
  { name: "email", type: "email", required: true, ltr: true, autoComplete: "email" },
  { name: "phone", type: "tel", required: true, ltr: true, autoComplete: "tel" },
  { name: "organization", autoComplete: "organization" },
  { name: "message", required: true, textarea: true },
];

export const agenceFields = [
  { name: "name", required: true, autoComplete: "name" },
  { name: "email", type: "email", required: true, ltr: true, autoComplete: "email" },
  { name: "phone", type: "tel", required: true, ltr: true, autoComplete: "tel" },
  { name: "organization", autoComplete: "organization" },
  { name: "service", required: true },
];

const inputBase =
  "w-full rounded-[2px] border bg-[#1f2937]/35 px-[21px] text-[14px] font-light leading-5 text-[#f6f3ee] outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-[#a0a0a0]";
const inputOk = "border-[#a0a0a0]/25 focus:border-[#bb9a5a]/70 focus:shadow-[0_0_0_3px_rgba(187,154,90,0.15)]";
const inputError = "border-[#f87171]/70 focus:border-[#f87171] focus:shadow-[0_0_0_3px_rgba(248,113,113,0.18)]";

export default function LeadForm({ kind, fields, onSuccess }) {
  const { locale, t: dict } = useI18n();
  const t = dict.form;
  const text = t[kind];
  const uid = useId();
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | failed

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const found = validateLead(kind, data, locale);
    setErrors(found);
    if (Object.keys(found).length) {
      form.querySelector(`[name="${Object.keys(found)[0]}"]`)?.focus();
      return;
    }

    setStatus("sending");
    try {
      const contactEndpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;
      if (!contactEndpoint) {
        setStatus("idle");
        return;
      }
      const res = await fetch(contactEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, kind, locale }),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok || !body.ok) {
        if (body.errors) setErrors(body.errors);
        setStatus("failed");
        return;
      }
      form.reset();
      setStatus("idle");
      onSuccess?.();
    } catch {
      setStatus("failed");
    }
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="relative flex flex-col gap-6">
      {/* spam trap, hidden from people and screen readers */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="pointer-events-none absolute start-0 top-0 size-px overflow-hidden opacity-0" />

      {fields.map((f) => {
        const id = `${uid}-${f.name}`;
        const err = errors[f.name];
        const Tag = f.textarea ? "textarea" : "input";
        return (
          <div key={f.name} className={`flex flex-col gap-2 ${f.textarea ? "pb-2.5" : ""}`}>
            <div className="flex items-start justify-between">
              <label htmlFor={id} className="text-[12px] font-medium leading-5 text-[#f6f3ee]">
                {text[f.name].label}
              </label>
              <span className={`text-[12px] font-light leading-4 transition-colors ${err ? "text-[#f87171]" : f.required ? "text-[#bb9a5a]" : "text-[#a0a0a0]"}`}>
                {f.required ? t.required : t.recommended}
              </span>
            </div>
            <Tag
              id={id}
              name={f.name}
              type={f.textarea ? undefined : f.type || "text"}
              rows={f.textarea ? 5 : undefined}
              placeholder={text[f.name].placeholder}
              autoComplete={f.autoComplete}
              inputMode={f.type === "tel" ? "tel" : undefined}
              dir={f.ltr ? "ltr" : undefined}
              required={f.required}
              aria-required={f.required || undefined}
              aria-invalid={err ? true : undefined}
              aria-describedby={err ? `${id}-err` : undefined}
              className={`${inputBase} ${f.ltr && locale === "ar" ? "text-right" : ""} ${
                f.textarea ? "min-h-[134px] resize-y py-[17px]" : "h-[58px] py-0"
              } ${err ? inputError : inputOk}`}
            />
            {err && (
              <p id={`${id}-err`} className="text-[11.5px] leading-4 text-[#f87171]">
                {err}
              </p>
            )}
          </div>
        );
      })}

      <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
        <p className="flex items-center gap-2 text-[12px] leading-4 text-[#a0a0a0] md:min-w-0 md:flex-1">
          <ShieldCheckIcon className="size-4 shrink-0 text-[#bb9a5a]" />
          {t.privacy}
        </p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center gap-3 rounded-[2px] bg-[linear-gradient(136deg,#d4af37_0%,#bb9a5a_100%)] px-10 py-4 text-[14px] font-bold leading-5 tracking-[1.4px] text-black shadow-[0_4px_10px_rgba(187,154,90,0.25)] transition-[translate,box-shadow,opacity] duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(187,154,90,0.35)] disabled:cursor-wait disabled:opacity-70 motion-reduce:transition-none"
        >
          {status === "sending" ? t.sending : t.send}
          <ArrowIcon className="size-4 ltr:-scale-x-100" />
        </button>
      </div>

      {status === "failed" && !Object.keys(errors).length && (
        <p role="alert" className="text-[12px] leading-5 text-[#f87171]">
          {t.failed}
        </p>
      )}
    </form>
  );
}
