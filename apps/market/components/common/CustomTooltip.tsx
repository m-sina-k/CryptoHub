"use client"

import React from "react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@ui/components"
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
        <TooltipContent className={className} side={side}>
          <p style={{ whiteSpace: "initial" }} className="w-[250px] text-xs">
            {text}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default CustomTooltip
