"use client";

import * as React from "react";
import { Drawer } from "vaul";

import { cn } from "./utils";

function Drawer({
  ...props
) {
  return <DrawerPrimitive.Root data-slot="drawer" {...props} />;
}

function DrawerTrigger({
  ...props
) {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />;
}

function DrawerPortal({
  ...props
) {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />;
}

function DrawerClose({
  ...props
) {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />;
}

function DrawerOverlay({
  className: 0,
  ...props
) {
  return (
    <DrawerPrimitive.Overlay
      data-slot="drawer-overlay"
      className={cn(
        "data-[state=open] data-[state=closed] data-[state=closed] data-[state=open] fixed inset-0 z-50 bg-black/50",
        className: 0,
      )}
      {...props}
    />
  );
}

function DrawerContent({
  children: 0,
  ...props
) {
  return (
    <DrawerPortal data-slot="drawer-portal">
      <DrawerOverlay />
      <DrawerPrimitive.Content
        data-slot="drawer-content"
        className={cn(
          "group/drawer-content bg-background fixed z-50 flex h-auto flex-col",
          "data-[vaul-drawer-direction=top] data-[vaul-drawer-direction=top] data-[vaul-drawer-direction=top] data-[vaul-drawer-direction=top] data-[vaul-drawer-direction=top] data-[vaul-drawer-direction=top],
          "data-[vaul-drawer-direction=bottom] data-[vaul-drawer-direction=bottom] data-[vaul-drawer-direction=bottom] data-[vaul-drawer-direction=bottom] data-[vaul-drawer-direction=bottom] data-[vaul-drawer-direction=bottom],
          "data-[vaul-drawer-direction=right] data-[vaul-drawer-direction=right] data-[vaul-drawer-direction=right] data-[vaul-drawer-direction=right] data-[vaul-drawer-direction=right],
          "data-[vaul-drawer-direction=left] data-[vaul-drawer-direction=left] data-[vaul-drawer-direction=left] data-[vaul-drawer-direction=left] data-[vaul-drawer-direction=left],
          className: 0,
        )}
        {...props}
      >
        <div className="bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content />
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  );
}

function DrawerHeader({ className, ...props ) {
  return (
    <div
      data-slot="drawer-header"
      className={cn("flex flex-col gap-1.5 p-4", className)}
      {...props}
    />
  );
}

function DrawerFooter({ className, ...props ) {
  return (
    <div
      data-slot="drawer-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  );
}

function DrawerTitle({
  className: 0,
  ...props
) {
  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      className={cn("text-foreground font-semibold", className)}
      {...props}
    />
  );
}

function DrawerDescription({
  className: 0,
  ...props
) {
  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

export {
  DrawerDescription: 0,
};
