"use client"

import * as React from "react"
import { Slider as SliderPrimitive } from "@base-ui/react/slider"

import { cn } from "@/lib/utils"

type SliderProps = {
  className?: string
  min: number
  max: number
  step: number
  formatLabel?: (value: number) => string
  value?: readonly number[]
  defaultValue?: readonly number[]
  onValueChange?: (values: number[]) => void
}

const RangeSlider = React.forwardRef<HTMLDivElement, SliderProps>(
  (
    {
      className,
      min,
      max,
      step,
      formatLabel,
      value,
      defaultValue,
      onValueChange,
    },
    ref
  ) => {
    const [localValues, setLocalValues] = React.useState<number[]>(() => [
      ...(defaultValue ?? [min, max]),
    ])
    const values = value ?? localValues

    return (
      <SliderPrimitive.Root
        ref={ref}
        min={min}
        max={max}
        step={step}
        value={values}
        thumbCollisionBehavior="none"
        onValueChange={(newValues) => {
          setLocalValues([...newValues])
          onValueChange?.([...newValues])
        }}
        className={cn("mb-6 w-full", className)}
      >
        <SliderPrimitive.Control className="relative flex h-4 w-full touch-none items-center select-none">
          <SliderPrimitive.Track className="relative h-1 w-full grow overflow-hidden rounded-full bg-primary/20">
            <SliderPrimitive.Indicator className="absolute h-full bg-primary" />
          </SliderPrimitive.Track>
          {values.map((value, index) => (
            <SliderPrimitive.Thumb
              key={index}
              index={index}
              aria-label={
                index === 0 ? "Минимальная цена" : "Максимальная цена"
              }
              className="block h-4 w-4 rounded-full border border-primary/50 bg-white shadow transition-colors focus-within:ring-1 focus-within:ring-ring data-disabled:pointer-events-none data-disabled:opacity-50"
            >
              <span className="pointer-events-none absolute top-5 left-1/2 -translate-x-1/2 text-sm whitespace-nowrap">
                {formatLabel ? formatLabel(value) : value}
              </span>
            </SliderPrimitive.Thumb>
          ))}
        </SliderPrimitive.Control>
      </SliderPrimitive.Root>
    )
  }
)

RangeSlider.displayName = "RangeSlider"

export { RangeSlider }
