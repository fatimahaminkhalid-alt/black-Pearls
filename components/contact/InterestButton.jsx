"use client";

import { useRef, useState } from "react";
import LeadForm, { agenceFields } from "@/components/contact/LeadForm";
import ThanksToast from "@/components/contact/ThanksToast";
import { CloseIcon } from "@/components/contact/icons";
import { useI18n } from "@/components/I18nProvider";

// "تسجيل الاهتمام" button on the Services page. Opens the Figma "تسجيل اهتمام الوكلاء" form
// in a native modal dialog (keyboard focus stays inside, Esc closes it).
export default function InterestButton({ className = "" }) {
  const t = useI18n().t.form.interest;
  const dialogRef = useRef(null);
  const [thanks, setThanks] = useState(false);

  // Pause the smooth-scrolled page behind the dialog (Motion.jsx exposes the Lenis instance).
  const open = () => {
    window.__lenis?.stop();
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();

  return (
    <>
      <button type="button" onClick={open} className={className}>
        {t.button}
      </button>

      <dialog
        ref={dialogRef}
        data-lenis-prevent
        aria-labelledby="interest-title"
        onClose={() => window.__lenis?.start()}
        onClick={(e) => e.target === dialogRef.current && close()}
        className="bp-dialog m-auto max-h-[calc(100dvh-32px)] w-[min(757px,calc(100vw-32px))] overflow-y-auto rounded-[2px] border border-[#bb9a5a]/30 bg-[#0a192f] p-6 text-start text-[#f6f3ee] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] md:p-12"
      >
        <span aria-hidden="true" className="absolute inset-x-8 top-0 h-0.5 bg-gradient-to-r from-[#bb9a5a]/0 via-[#bb9a5a] to-[#bb9a5a]/0" />
        <button
          type="button"
          onClick={close}
          aria-label={t.close}
          className="absolute end-6 top-5 flex size-8 items-center justify-center rounded text-[#f6f3ee] transition-colors hover:text-[#bb9a5a] md:end-[29px] md:top-[19px]"
        >
          <CloseIcon className="size-6" />
        </button>

        <div className="mb-8 flex flex-col gap-2 pe-10">
          <h2 id="interest-title" className="text-[22px] font-bold leading-8 text-[#f6f3ee]">
            {t.title}
          </h2>
          <p className="text-[12px] leading-4 text-[#a0a0a0]">
            {t.desc}
          </p>
        </div>

        <LeadForm
          kind="agence"
          fields={agenceFields}
          onSuccess={() => {
            close();
            setThanks(true);
          }}
        />
      </dialog>

      <ThanksToast show={thanks} onHide={() => setThanks(false)} />
    </>
  );
}
