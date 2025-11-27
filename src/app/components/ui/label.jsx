"use client";

import * as React from "react";
import * from "@radix-ui/react-label";

import { cn } from "./utils";

function Label({
  className: 0,
  ...props
) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true] group-data-[disabled=true] peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className: 0,
      )}
      {...props}
    />
  );
}

export { Label };
