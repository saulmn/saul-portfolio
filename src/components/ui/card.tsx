import * as React from "react";

import { cn } from "@/utils/misc";

// Aqua window stoplight controls
const StoplightControls = () => (
  <div className="flex items-center gap-1.5 px-3 py-2">
    <span
      className="w-3 h-3 rounded-full bg-[#ff5f57] border border-[#e0443e] shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),_0_1px_2px_rgba(0,0,0,0.3)] inline-block"
      aria-hidden="true"
    />
    <span
      className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123] shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),_0_1px_2px_rgba(0,0,0,0.3)] inline-block"
      aria-hidden="true"
    />
    <span
      className="w-3 h-3 rounded-full bg-[#28c840] border border-[#1aab29] shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),_0_1px_2px_rgba(0,0,0,0.3)] inline-block"
      aria-hidden="true"
    />
  </div>
);

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-2xl overflow-hidden " +
        "bg-[linear-gradient(to_bottom,_#e8e8e8_0%,_#d4d4d4_40%,_#c0c0c0_100%)] " +
        "dark:bg-[linear-gradient(to_bottom,_#2a2e3a_0%,_#1e2230_40%,_#141820_100%)] " +
        "border border-t-white border-l-white border-b-gray-500 border-r-gray-400 " +
        "dark:border-t-gray-600 dark:border-l-gray-600 dark:border-b-gray-900 dark:border-r-gray-800 " +
        "shadow-[0_8px_32px_rgba(0,0,0,0.35),_0_2px_4px_rgba(255,255,255,0.8)_inset] " +
        "dark:shadow-[0_8px_32px_rgba(0,0,0,0.6),_0_1px_2px_rgba(255,255,255,0.08)_inset] " +
        "text-card-foreground",
      className
    )}
    {...props}
  >
    {children}
  </div>
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { showStoplight?: boolean }
>(({ className, showStoplight = false, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col " +
        "bg-[linear-gradient(to_bottom,_#e4e4e4_0%,_#b8b8b8_100%)] " +
        "dark:bg-[linear-gradient(to_bottom,_#2e3344_0%,_#1a1f2e_100%)] " +
        "border-b border-b-gray-400 dark:border-b-gray-700",
      className
    )}
    {...props}
  >
    {showStoplight && <StoplightControls />}
    <div className="flex flex-col space-y-1.5 px-6 pb-4 pt-2">{children}</div>
  </div>
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight " +
        "text-gray-800 dark:text-gray-100 " +
        "[text-shadow:0_1px_0_rgba(255,255,255,0.7)] dark:[text-shadow:none]",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-gray-600 dark:text-gray-400", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "p-6 pt-4 " +
        "bg-[linear-gradient(to_bottom,_#d8d8d8_0%,_#cccccc_100%)] " +
        "dark:bg-[linear-gradient(to_bottom,_#1a1f2e_0%,_#141820_100%)]",
      className
    )}
    {...props}
  />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center p-6 pt-0 " +
        "bg-[linear-gradient(to_bottom,_#cccccc_0%,_#c0c0c0_100%)] " +
        "dark:bg-[linear-gradient(to_bottom,_#141820_0%,_#0e1018_100%)]",
      className
    )}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  StoplightControls,
};
