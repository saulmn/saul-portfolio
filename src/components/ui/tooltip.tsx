import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "@/utils/misc";

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  );
}

function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  );
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          // Aqua metal gradient tooltip bubble
          "animate-in fade-in-0 zoom-in-95 " +
            "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 " +
            "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 " +
            "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 " +
            "z-50 w-fit origin-(--radix-tooltip-content-transform-origin) " +
            "rounded-lg px-3 py-1.5 text-xs font-medium text-balance " +
            "text-gray-800 dark:text-gray-100 " +
            "[text-shadow:0_1px_0_rgba(255,255,255,0.7)] dark:[text-shadow:none] " +
            "bg-[linear-gradient(to_bottom,_#f0f0f0_0%,_#d8d8d8_50%,_#c8c8c8_100%)] " +
            "dark:bg-[linear-gradient(to_bottom,_#3a3f50_0%,_#2a2f3e_50%,_#1e2230_100%)] " +
            "border border-t-white border-l-white border-b-gray-400 border-r-gray-300 " +
            "dark:border-t-gray-600 dark:border-l-gray-600 dark:border-b-gray-800 dark:border-r-gray-700 " +
            "shadow-[0_4px_12px_rgba(0,0,0,0.25),_0_1px_2px_rgba(255,255,255,0.6)_inset] " +
            "dark:shadow-[0_4px_12px_rgba(0,0,0,0.5)]",
          className
        )}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className="fill-gray-300 dark:fill-gray-600 z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
