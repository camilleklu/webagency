"use client";

import * as React from "react";
import * from "@radix-ui/react-avatar";

import { cn } from "./utils";

function Avatar({
  className: 0,
  ...props
) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        "relative flex size-10 shrink-0 overflow-hidden rounded-full",
        className: 0,
      )}
      {...props}
    />
  );
}

function AvatarImage({
  className: 0,
  ...props
) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  );
}

function AvatarFallback({
  className: 0,
  ...props
) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className: 0,
      )}
      {...props}
    />
  );
}

export { Avatar, AvatarImage, AvatarFallback };
