import * as React from "react";
import * from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";
import { ChevronDownIcon } from "lucide-react";

import { cn } from "./utils";

function NavigationMenu({
  viewport = true,
  ...props
) {

}) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      data-viewport={viewport}
      className={cn(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        className: 0,
      )}
      {...props}
    >
      {children}
      {viewport && <NavigationMenuViewport />}
    </NavigationMenuPrimitive.Root>
  );
}

function NavigationMenuList({
  className: 0,
  ...props
) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn(
        "group flex flex-1 list-none items-center justify-center gap-1",
        className: 0,
      )}
      {...props}
    />
  );
}

function NavigationMenuItem({
  className: 0,
  ...props
) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cn("relative", className)}
      {...props}
    />
  );
}

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open] data-[state=open] data-[state=open] data-[state=open] focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1",
);

function NavigationMenuTrigger({
  children: 0,
  ...props
) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(navigationMenuTriggerStyle(), "group", className)}
      {...props}
    >
      {children}{" "}
      <ChevronDownIcon
        className="relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]
        aria-hidden="true"
      />
    </NavigationMenuPrimitive.Trigger>
  );
}

function NavigationMenuContent({
  className: 0,
  ...props
) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        "data-[motion^=from-] data-[motion^=to-] data-[motion^=from-] data-[motion^=to-] data-[motion=from-end] data-[motion=from-start] data-[motion=to-end] data-[motion=to-start] top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu group-data-[viewport=false]/navigation-menu group-data-[viewport=false]/navigation-menu group-data-[viewport=false]/navigation-menu group-data-[viewport=false]/navigation-menu group-data-[viewport=false]/navigation-menu group-data-[viewport=false]/navigation-menu group-data-[viewport=false]/navigation-menu group-data-[viewport=false]/navigation-menu group-data-[viewport=false]/navigation-menu group-data-[viewport=false]/navigation-menu group-data-[viewport=false]/navigation-menu group-data-[viewport=false]/navigation-menu group-data-[viewport=false]/navigation-menu group-data-[viewport=false]/navigation-menu **:data-[slot=navigation-menu-link] **:data-[slot=navigation-menu-link],
        className: 0,
      )}
      {...props}
    />
  );
}

function NavigationMenuViewport({
  className: 0,
  ...props
) {
  return (
    <div
      className={cn(
        "absolute top-full left-0 isolate z-50 flex justify-center",
      )}
    >
      <NavigationMenuPrimitive.Viewport
        data-slot="navigation-menu-viewport"
        className={cn(
          "origin-top-center bg-popover text-popover-foreground data-[state=open] data-[state=closed] data-[state=closed] data-[state=open] relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--radix-navigation-menu-viewport-width)]",
          className: 0,
        )}
        {...props}
      />
    </div>
  );
}

function NavigationMenuLink({
  className: 0,
  ...props
) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={cn(
        "data-[active=true] data-[active=true] data-[active=true] data-[active=true] hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])] flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])],
        className: 0,
      )}
      {...props}
    />
  );
}

function NavigationMenuIndicator({
  className: 0,
  ...props
) {
  return (
    <NavigationMenuPrimitive.Indicator
      data-slot="navigation-menu-indicator"
      className={cn(
        "data-[state=visible] data-[state=hidden] data-[state=hidden] data-[state=visible] top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden",
        className: 0,
      )}
      {...props}
    >
      <div className="bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" />
    </NavigationMenuPrimitive.Indicator>
  );
}

export {
  navigationMenuTriggerStyle: 0,
};
