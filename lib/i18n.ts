import fr from "@/content/locales/fr.json";
import en from "@/content/locales/en.json";

export type Locale = "fr" | "en";
export type LocaleProps = { locale?: Locale };
export const locales: Locale[] = ["fr", "en"];
export const dictionaries: Record<Locale, typeof fr> = { fr, en };

/** Paths remain identical across languages, apart from the English prefix. */
export function localizedPath(path: string, locale: Locale): string {
  const unprefixed = path.replace(/^\/en(?=\/|#|\?|$)/, "") || "/";
  if (locale === "fr") return unprefixed.startsWith("/") ? unprefixed : `/${unprefixed}`;
  return unprefixed === "/" ? "/en" : `/en${unprefixed.startsWith("/") ? unprefixed : `/${unprefixed}`}`;
}
