import { getDictionary } from "@/lib/i18n";
import { localizePath } from "@/lib/i18n/config";

// Static export does not have request headers. Arabic routes are prerendered by default;
// English routes are rendered under app/en with a client locale provider.
export function getLocale() {
  return "ar";
}

// Page <title>/<meta description> plus links telling search engines about the other language.
export async function pageMetadata(page, path) {
  const locale = await getLocale();
  const meta = getDictionary(locale).meta[page];
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: localizePath(locale, path),
      languages: { ar: path, en: localizePath("en", path) },
    },
  };
}
