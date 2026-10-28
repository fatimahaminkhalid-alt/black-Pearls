"use client";

import { useState } from "react";
import LeadForm, { contactFields } from "@/components/contact/LeadForm";
import ThanksToast from "@/components/contact/ThanksToast";
import { MailIcon, PhoneIcon, PinIcon } from "@/components/contact/icons";
import { useI18n } from "@/components/I18nProvider";

// Figma "CONTACT AREA (Editorial Split Layout) & CONTACT INFORMATION":
// 12-column grid; details first in reading order (right in Arabic, left in English), the form beside them.
// Text comes from lib/i18n/{ar,en}.js (contact.area).

export default function ContactArea() {
  const t = useI18n().t.contact.area;
  const d = t.details;
  const details = [
    { ...d.location, Icon: PinIcon },
    { ...d.email, value: "info@blackpearls.sa", href: "mailto:info@blackpearls.sa", Icon: MailIcon, small: true },
    { ...d.phone, Icon: PhoneIcon },
  ];
  const [thanks, setThanks] = useState(false);

  return (
    <section className="bg-[#071322] px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto grid max-w-[1344px] gap-14 lg:grid-cols-12 lg:gap-16">
        {/* Details (right) */}
        <div className="flex flex-col gap-12 lg:col-span-5 lg:pt-[82px]">
          <div className="flex flex-col gap-6">
            <p className="border-s-2 border-[#bb9a5a] ps-[22px] pt-1 text-[21px] font-light leading-8 text-[#f6f3ee]/90 md:text-[24px]">
              {t.quote}
            </p>
            <p className="pt-[7px] text-[14px] leading-[22.75px] text-[#a0a0a0]">
              {t.body}
            </p>
          </div>

          <div className="flex flex-col gap-5 border-t border-[#bb9a5a]/15 pt-[17px]">
            <h2 className="text-[12px] font-bold leading-4 text-[#bb9a5a]">{t.detailsTitle}</h2>

            <ul className="flex flex-col gap-4">
              {details.map(({ label, value, href, note, Icon, small }) => (
                <li key={label} className="flex items-start gap-4 rounded-[2px] border border-[#bb9a5a]/20 bg-[#1f2937]/30 p-[21px]">
                  <span className="shrink-0 rounded border border-[#bb9a5a]/30 bg-[#0a192f] p-[11px] text-[#bb9a5a]">
                    <Icon className="size-5" />
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <p className="text-[12px] leading-4 text-[#a0a0a0]">{label}</p>
                    {href ? (
                      <a href={href} className={`text-white transition-colors hover:text-[#bb9a5a] ${small ? "text-[12px] leading-4" : "text-[16px] leading-6"}`}>
                        {value}
                      </a>
                    ) : (
                      <p className="text-[16px] font-medium leading-6 text-[#f6f3ee]">{value}</p>
                    )}
                    <p className="text-[12px] leading-4 text-[#a0a0a0]/80">{note}</p>
                  </div>
                </li>
              ))}
            </ul>

            <p className="flex items-center justify-between rounded-[2px] border-s-2 border-[#bb9a5a] from-[#0a192f] to-[#1f2937]/50 py-4 pe-4 ps-[18px] text-[12px] leading-4 rtl:bg-gradient-to-l ltr:bg-gradient-to-r">
              <span className="text-[#a0a0a0]">{t.cr}</span>
              <span className="font-medium text-[#bb9a5a]">{t.licensed}</span>
            </p>
          </div>
        </div>

        {/* Form (left) */}
        <div className="relative rounded-[2px] border border-[#bb9a5a]/30 bg-[#0a192f]/60 p-6 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] backdrop-blur-[6px] sm:p-[49px] lg:col-span-7">
          <span aria-hidden="true" className="absolute inset-x-8 top-0 h-0.5 bg-gradient-to-r from-[#bb9a5a]/0 via-[#bb9a5a] to-[#bb9a5a]/0" />
          <div className="mb-8 flex flex-col gap-2">
            <h2 className="text-[22px] font-bold leading-8 text-[#f6f3ee]">{t.formTitle}</h2>
            <p className="text-[12px] leading-4 text-[#a0a0a0]">
              {t.formDesc}
            </p>
          </div>
          <LeadForm kind="contact" fields={contactFields} onSuccess={() => setThanks(true)} />
        </div>
      </div>

      <ThanksToast show={thanks} onHide={() => setThanks(false)} />
    </section>
  );
}
