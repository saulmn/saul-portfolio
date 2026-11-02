import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/misc";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-4 focus-visible:ring-blue-400/60 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive select-none",
  {
    variants: {
      variant: {
        // Aqua gel button — the hero button
        default:
          "rounded-full text-white [text-shadow:0_1px_1px_rgba(0,0,0,0.4)] " +
          "bg-[linear-gradient(to_bottom,_rgba(255,255,255,0.9)_0%,_rgba(150,200,255,0.8)_30%,_rgba(30,120,255,0.9)_70%,_rgba(0,80,200,1)_100%)] " +
          "shadow-[0_4px_10px_rgba(0,80,200,0.5),_0_1px_2px_rgba(0,0,0,0.3)] " +
          "hover:bg-[linear-gradient(to_bottom,_rgba(255,255,255,0.95)_0%,_rgba(180,220,255,0.85)_30%,_rgba(60,150,255,0.95)_70%,_rgba(20,100,230,1)_100%)] " +
          "active:shadow-[inset_0_2px_6px_rgba(0,0,0,0.4)] active:translate-y-px",

        // Destructive — red gel
        destructive:
          "rounded-full text-white [text-shadow:0_1px_1px_rgba(0,0,0,0.4)] " +
          "bg-[linear-gradient(to_bottom,_rgba(255,200,200,0.9)_0%,_rgba(255,100,100,0.8)_30%,_rgba(220,30,30,0.9)_70%,_rgba(180,0,0,1)_100%)] " +
          "shadow-[0_4px_10px_rgba(180,0,0,0.5),_0_1px_2px_rgba(0,0,0,0.3)] " +
          "hover:brightness-110 " +
          "active:shadow-[inset_0_2px_6px_rgba(0,0,0,0.4)] focus-visible:ring-destructive/40",

        // Outline — brushed silver bevel
        outline:
          "rounded-lg text-gray-700 dark:text-gray-200 " +
          "bg-[linear-gradient(to_bottom,_#f5f5f5_0%,_#e0e0e0_50%,_#d0d0d0_100%)] " +
          "dark:bg-[linear-gradient(to_bottom,_#3a3f50_0%,_#2a2f3e_50%,_#1e2230_100%)] " +
          "border border-t-white border-l-white border-b-gray-400 border-r-gray-400 " +
          "dark:border-t-gray-600 dark:border-l-gray-600 dark:border-b-gray-800 dark:border-r-gray-800 " +
          "shadow-[0_2px_4px_rgba(0,0,0,0.2)] " +
          "hover:brightness-105 " +
          "active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]",

        // Secondary — brushed silver
        secondary:
          "rounded-lg text-gray-700 dark:text-gray-200 " +
          "bg-[linear-gradient(to_bottom,_#f5f5f5_0%,_#d0d0d0_100%)] " +
          "dark:bg-[linear-gradient(to_bottom,_#3a3f50_0%,_#1e2230_100%)] " +
          "border border-t-white border-l-white border-b-gray-400 border-r-gray-400 " +
          "dark:border-t-gray-600 dark:border-l-gray-600 dark:border-b-gray-800 dark:border-r-gray-800 " +
          "shadow-[0_2px_6px_rgba(0,0,0,0.15)] " +
          "hover:brightness-105 " +
          "active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]",

        // Ghost — minimal, Aqua hover
        ghost:
          "rounded-full text-gray-700 dark:text-gray-200 " +
          "hover:bg-[linear-gradient(to_bottom,_rgba(200,225,255,0.6),_rgba(160,200,255,0.4))] " +
          "hover:shadow-[0_2px_6px_rgba(0,80,200,0.2)] " +
          "active:shadow-[inset_0_1px_3px_rgba(0,0,0,0.15)]",

        // Link
        link: "text-blue-600 dark:text-blue-400 underline-offset-4 hover:underline rounded-none",
      },
      size: {
        default: "h-9 px-5 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-full gap-1.5 px-4 has-[>svg]:px-2.5 text-xs",
        lg: "h-11 rounded-full px-8 has-[>svg]:px-5 text-base",
        icon: "size-9 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & {
      asChild?: boolean;
    }
>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      ref={ref}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
});
Button.displayName = "Button";

export { Button, buttonVariants };
