import * as React from "react";

import { cn } from "@/utils/misc";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        // Aqua inset input — pressed-in look
        "file:text-foreground placeholder:text-gray-400 dark:placeholder:text-gray-500 " +
          "selection:bg-blue-400 selection:text-white " +
          "flex h-9 w-full min-w-0 rounded-lg border-2 border-gray-400 dark:border-gray-600 " +
          "bg-white dark:bg-gray-900/80 " +
          "px-3 py-1 text-base text-gray-800 dark:text-gray-100 " +
          "shadow-[inset_0_2px_5px_rgba(0,0,0,0.2)] dark:shadow-[inset_0_2px_5px_rgba(0,0,0,0.5)] " +
          "transition-[color,box-shadow,border-color] outline-none " +
          "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium " +
          "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus:ring-4 focus:ring-blue-400/60 focus:border-blue-500 dark:focus:border-blue-400",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  );
}

export { Input };
