"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { dictionaries, localizedPath, type Locale } from "@/lib/i18n";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const [hash, setHash] = useState("");
  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, [pathname]);

  return (
    <nav aria-label={dictionaries[locale].language} className="flex shrink-0 items-center rounded-md border border-input p-0.5 text-xs font-medium">
      {(["fr", "en"] as const).map(language => (
        <a key={language} href={localizedPath(pathname, language) + hash} hrefLang={language} lang={language}
          onClick={event => { event.currentTarget.href = localizedPath(pathname, language) + window.location.hash; }}
          aria-label={language === "fr" ? "Français" : "English"}
          aria-current={language === locale ? "page" : undefined}
          className={`flex h-8 items-center rounded px-2 ${language === locale ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-primary"}`}>
          {language.toUpperCase()}
        </a>
      ))}
    </nav>
  );
}
