import Link from "next/link";
import { dictionaries, localizedPath, type LocaleProps } from "@/lib/i18n";

export function NotFoundPage({ locale = "fr" }: LocaleProps) {
  const t = dictionaries[locale];
  return (
    <main id="contenu" className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-5 text-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p>{t.notFound}</p>
      <Link href={localizedPath("/", locale)} className="text-customGold-dark underline underline-offset-4 dark:text-customGold">{t.backHome}</Link>
    </main>
  );
}
