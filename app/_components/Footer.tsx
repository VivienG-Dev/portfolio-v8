import { Section } from "./Section";

export const Footer = () => {
  return (
    <Section className="flex flex-col items-center py-4 gap-4">
      <p className="text-sm text-muted-foreground">
        © 2021 - {new Date().getFullYear()} VivienG. Tous droits réservés.
      </p>
      <p className="text-sm text-muted-foreground">Numéro de siren: 917932287</p>
    </Section>
  );
};
