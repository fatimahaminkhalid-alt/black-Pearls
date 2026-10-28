"use client";

import { useEffect } from "react";
import { useI18n } from "@/components/I18nProvider";

// Figma "شكر": 230×78 navy pill. Slides up after a successful send and hides itself after 5s.
export default function ThanksToast({ show, onHide }) {
  const [line1, line2] = useI18n().t.form.thanks;
  useEffect(() => {
    if (!show) return;
    const t = setTimeout(() => onHide?.(), 5000);
    return () => clearTimeout(t);
  }, [show, onHide]);

  return (
    <div
      role="status"
      aria-live="polite"
      className={`pointer-events-none fixed bottom-8 left-1/2 z-[70] flex h-[78px] w-max min-w-[230px] max-w-[calc(100vw-32px)] -translate-x-1/2 items-center justify-center rounded-[50px] bg-[#111827] px-6 text-center text-[12px] font-medium leading-4 text-[#94a3b8] shadow-[0_12px_30px_rgba(0,0,0,0.35)] ring-1 ring-[#bb9a5a]/20 transition-[opacity,translate] duration-500 ease-out motion-reduce:transition-none ${
        show ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      {show && (
        <p>
          {line1}
          <br />
          {line2}
        </p>
      )}
    </div>
  );
}
