interface AvailabilityStatusProps {
  status: "available" | "busy";
  className?: string;
}
export const AvailabilityStatus = ({ status, className = "" }: AvailabilityStatusProps) => (
  <div className={`inline-flex items-center gap-2 rounded-full border border-customGold/25 bg-background/70 px-3 py-1.5 text-sm text-muted-foreground ${className}`}>
    <span aria-hidden="true" className={`h-2 w-2 rounded-full ${status === "available" ? "bg-green-600" : "bg-customGold-dark dark:bg-customGold"}`} />
    {status === "available" ? "Disponible" : "Actuellement en poste"}
  </div>
);
