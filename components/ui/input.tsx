import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-[1rem] border border-[rgba(15,36,26,0.12)] bg-white/82 px-4 py-3 text-base text-[#0f241a] shadow-[0_18px_35px_-28px_rgba(15,36,26,0.32)] ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-[rgba(29,47,38,0.42)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a3628] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
