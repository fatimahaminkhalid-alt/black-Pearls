// Locale settings shared by the server, the client and middleware.js.
// Arabic is the default and lives at the root ("/about"); English lives under "/en" ("/en/about").

export const LOCALES = ["ar", "en"];
export const DEFAULT_LOCALE = "ar";
export const LOCALE_DIR = { ar: "rtl", en: "ltr" };

const isExternal = (path) => /^(https?:|mailto:|tel:|#)/.test(path);

// "/contact" → "/en/contact" for English, unchanged for Arabic.
export function localizePath(locale, path = "/") {
  if (locale !== "en" || isExternal(path)) return path;
  return path === "/" ? "/en" : `/en${path}`;
}

// "/en/about" → "/about"; "/en" → "/"; Arabic paths are returned as-is.
export function stripLocale(pathname = "/") {
  const basePath = "/black-Pearls";
  if (pathname === basePath) pathname = "/";
  if (pathname.startsWith(`${basePath}/`)) pathname = pathname.slice(basePath.length);
  if (pathname === "/en") return "/";
  if (pathname.startsWith("/en/")) return pathname.slice(3);
  return pathname;
}

// The same page in the other language.
export function switchLocalePath(pathname, toLocale) {
  return localizePath(toLocale, stripLocale(pathname || "/"));
}
