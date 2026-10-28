import ar from "@/lib/i18n/ar";
import en from "@/lib/i18n/en";

// All site text lives in lib/i18n/ar.js and lib/i18n/en.js (same shape in both files).
export function getDictionary(locale) {
  return locale === "en" ? en : ar;
}
