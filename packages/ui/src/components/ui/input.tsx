import { forwardRef, InputHTMLAttributes, ReactNode } from "react"
import { cn } from "@ui/lib/utils"

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  startAdornment?: ReactNode
  endAdornment?: ReactNode
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, startAdornment, endAdornment, ...props }, ref) => {
    return (
      <div
        className={cn(
          "border-input bg-background flex h-10 items-center rounded-md border px-2 text-sm focus-within:border-blue-500",
          className,
        )}
      >
        {startAdornment}
        <input
          type={type}
          className={cn(
            "border-input bg-background placeholder:text-muted-foreground flex h-10 w-full rounded-md rounded-l-none rounded-r-none border border-x-0 px-3 py-1 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium  focus:border-blue-500 focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50",
            className,
          )}
          ref={ref}
          {...props}
        />
        {endAdornment}
      </div>
    )
  },
)
Input.displayName = "Input"

export { Input }
