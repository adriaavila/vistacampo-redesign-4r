import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[140px] w-full rounded-[1rem] border border-[rgba(15,36,26,0.12)] bg-white/82 px-4 py-3 text-base text-[#0f241a] shadow-[0_18px_35px_-28px_rgba(15,36,26,0.32)] ring-offset-background placeholder:text-[rgba(29,47,38,0.42)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a3628] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
