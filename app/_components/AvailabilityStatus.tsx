import { dictionaries, type LocaleProps } from "@/lib/i18n";
interface AvailabilityStatusProps extends LocaleProps {
  status: "available" | "busy";
  className?: string;
}
export const AvailabilityStatus = ({ status, className = "", locale = "fr" }: AvailabilityStatusProps) => (
  <div className={`inline-flex items-center gap-2 rounded-full border border-customGold/25 bg-background/70 px-3 py-1.5 text-sm text-muted-foreground ${className}`}>
    <span aria-hidden="true" className={`h-2 w-2 rounded-full ${status === "available" ? "bg-green-600" : "bg-customGold-dark dark:bg-customGold"}`} />
    {status === "available" ? dictionaries[locale].available : dictionaries[locale].busy}
  </div>
);
