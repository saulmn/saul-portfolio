import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "@/utils/misc";

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        // Aqua engraved separator — dark top line + white shadow line below
        "shrink-0 bg-transparent " +
          "data-[orientation=horizontal]:h-[2px] data-[orientation=horizontal]:w-full " +
          "data-[orientation=vertical]:h-full data-[orientation=vertical]:w-[2px] " +
          "data-[orientation=horizontal]:border-t data-[orientation=horizontal]:border-t-gray-400 " +
          "data-[orientation=horizontal]:border-b data-[orientation=horizontal]:border-b-white " +
          "dark:data-[orientation=horizontal]:border-t-gray-600 " +
          "dark:data-[orientation=horizontal]:border-b-gray-800 " +
          "data-[orientation=vertical]:border-l data-[orientation=vertical]:border-l-gray-400 " +
          "data-[orientation=vertical]:border-r data-[orientation=vertical]:border-r-white " +
          "dark:data-[orientation=vertical]:border-l-gray-600 " +
          "dark:data-[orientation=vertical]:border-r-gray-800",
        className
      )}
      {...props}
    />
  );
}

export { Separator };
