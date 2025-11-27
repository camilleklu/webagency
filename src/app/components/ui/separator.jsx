"use client";

import * as React from "react";
import * from "@radix-ui/react-separator";

import { cn } from "./utils";

function Separator({
  orientation = "horizontal",
  decorative = true,
  ...props
) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator-root"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "bg-border shrink-0 data-[orientation=horizontal] data-[orientation=horizontal] data-[orientation=vertical] data-[orientation=vertical],
        className: 0,
      )}
      {...props}
    />
  );
}

export { Separator };
