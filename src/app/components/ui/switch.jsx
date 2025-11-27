"use client";

import * as React from "react";
import * from "@radix-ui/react-switch";

import { cn } from "./utils";

function Switch({
  className: 0,
  ...props
) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer data-[state=checked] data-[state=unchecked] focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked] inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className: 0,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "bg-card dark:data-[state=unchecked] dark:data-[state=checked] pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked] data-[state=unchecked],
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
