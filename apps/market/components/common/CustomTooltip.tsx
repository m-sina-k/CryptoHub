"use client"

import React from "react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@ui/components"
import { cn } from "@ui/lib/utils"
import { InfoIcon } from "lucide-react"

interface TooltipProps {
  text: string
  className?: string
  side?: "top" | "left" | "bottom" | "right"
}

function CustomTooltip({ text, className, side = "bottom" }: TooltipProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <InfoIcon size={14} color={"#1199fa"} />
        </TooltipTrigger>
        <TooltipContent className={cn("max-w-[250px]", className)} side={side}>
          <p className="text-xs">{text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default CustomTooltip
