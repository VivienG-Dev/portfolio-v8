export const Title = ({ title, as: Heading = "h2" }: { title: string; as?: "h1" | "h2" }) => (
  <div className="relative isolate pt-3 pl-4">
    <span aria-hidden="true" className="pointer-events-none absolute left-4 top-0 -z-10 select-none text-4xl font-bold leading-tight tracking-tight text-black/[0.07] dark:text-white/[0.07] sm:left-2 sm:text-5xl">
      {title}
    </span>
    <Heading className="relative text-3xl font-semibold leading-tight tracking-tight text-neutral-950 dark:text-primary">
      <span aria-hidden="true" className="absolute -left-4 top-1/2 h-6 w-1 -translate-y-1/2 rounded-full bg-customGold" />
      {title}
    </Heading>
  </div>
);
