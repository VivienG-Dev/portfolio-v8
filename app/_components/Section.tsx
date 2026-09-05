import { PropsWithChildren } from "react";
export const Section = (props: PropsWithChildren<{
  className?: string;
  id?: string;
  title?: string;
  rotate?: string;
  position?: string;
  ref?: React.RefObject<null>;
}>) => (
  <section id={props.id} className={`relative mx-auto max-w-7xl scroll-mt-36 px-5 sm:px-6 sm:scroll-mt-24 ${props.className ?? ""}`}>
    {props.children}
    {props.title && (
      <span aria-hidden="true" className={`pointer-events-none absolute top-1/2 hidden -translate-y-1/2 select-none whitespace-nowrap text-2xl font-bold text-customGold/40 2xl:block ${props.rotate ?? "-rotate-90"} ${props.position ?? "-right-20"}`}>
        {props.title}
      </span>
    )}
  </section>
);
