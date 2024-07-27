import { PropsWithChildren } from "react";

export const Section = (
  props: PropsWithChildren<{
    className?: string;
    title?: string;
    rotate?: string;
    position?: string;
    ref?: React.RefObject<null>;
  }>
) => {
  return (
    <section className={`relative max-w-7xl px-4 m-auto gap-4 ${props.className} `}>
      {props.children}{" "}
      <div
        className={`absolute top-[50%] text-customGold/50 text-2xl font-bold hidden xl:flex select-none ${props.rotate} ${props.position}`}
      >
        {props.title}
      </div>
    </section>
  );
};
