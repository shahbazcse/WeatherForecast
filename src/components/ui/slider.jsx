"use client"
import React, { useState } from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "../../lib/utils"

const TemperatureRange = React.forwardRef(
  (
    {
      className,
      min,
      max,
      formatLabel,
      value,
      onValueChange,
      ...props
    },
    ref
  ) => {
    const initialValue = Array.isArray(value) ? value : [min, max]
    const [localValues, setLocalValues] = useState(initialValue)

    const handleValueChange = (newValues) => {
      setLocalValues(newValues)
      if (onValueChange) {
        onValueChange(newValues)
      }
    }

    return (
      <SliderPrimitive.Root
        ref={ref}
        min={min}
        max={max}
        value={localValues}
        onValueChange={handleValueChange}
        disabled={true}
        className={cn(
          "relative flex w-full max-w-[17rem] touch-none select-none items-center md:max-w-[8rem]",
          className
        )}
        {...props}
      >
        <SliderPrimitive.Track className="relative h-1.5 w-full grow select-none overflow-hidden rounded-full bg-primary/20">
          <SliderPrimitive.Range className="absolute h-full rounded-full bg-gradient-to-l from-green-300 to-blue-400" />
        </SliderPrimitive.Track>
      </SliderPrimitive.Root>
    )
  }
)

TemperatureRange.displayName = SliderPrimitive.Root.displayName

export { TemperatureRange }
