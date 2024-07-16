import { ComponentPropsWithoutRef } from "react";

export const Code = (props: ComponentPropsWithoutRef<"span">) => {
  return (
    <span
      className="rounded-md bg-muted px-[0.3rem] py-[0.1rem] font-mono text-md border border-sky-500 opacity-80 hover:opacity-100"
      {...props}
    />
  );
};
