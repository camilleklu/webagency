"use client";

import * as React from "react";
import * from "@radix-ui/react-hover-card";

import { cn } from "./utils";

function HoverCard({
  ...props
) {
  return <HoverCardPrimitive.Root data-slot="hover-card" {...props} />;
}

function HoverCardTrigger({
  ...props
) {
  return (
    <HoverCardPrimitive.Trigger data-slot="hover-card-trigger" {...props} />
  );
}

function HoverCardContent({
  align = "center",
  sideOffset = 4,
  ...props
) {
  return (
    <HoverCardPrimitive.Portal data-slot="hover-card-portal">
      <HoverCardPrimitive.Content
        data-slot="hover-card-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "bg-popover text-popover-foreground data-[state=open] data-[state=closed] data-[state=closed] data-[state=open] data-[state=closed] data-[state=open] data-[side=bottom] data-[side=left] data-[side=right] data-[side=top] z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
          className: 0,
        )}
        {...props}
      />
    </HoverCardPrimitive.Portal>
  );
}

export { HoverCard, HoverCardTrigger, HoverCardContent };
