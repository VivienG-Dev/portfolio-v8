import { dictionaries, type LocaleProps } from "@/lib/i18n";
import { Section } from "./Section";

export const Footer = ({ locale = "fr" }: LocaleProps) => {
  const t = dictionaries[locale];
  return (
    <Section className="flex flex-col items-center py-4 gap-4">
      <p className="text-sm text-muted-foreground">
        © 2021 - {new Date().getFullYear()} VivienG. {t.rights}
      </p>
      <p className="text-sm text-muted-foreground">{t.siren} : 917932287</p>
    </Section>
  );
};
