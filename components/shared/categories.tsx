"use client"

import React from "react"
import { cn } from "@/lib/utils"
import { useCategoryStore } from "@/store/category"

type Props = {
  className?: string
}

const cats = [
  "Пиццы",
  "Комбо",
  "Закуски",
  "Коктейли",
  "Кофе",
  "Напитки",
  "Десерты",
  "Десерты",
]
const activeIndex = 0

const Categories = ({ className }: Props) => {
  const { activeId } = useCategoryStore()

  return (
    <div
      className={cn("inline-flex gap-1 rounded-2xl bg-gray-50 p-1", className)}
    >
      {cats.map((item, index) => (
        <a
          href={`#${item}`}
          key={index}
          className={cn(
            "flex h-11 items-center rounded-2xl px-5 font-semibold",
            activeId === item &&
              "bg-white text-primary shadow-md shadow-gray-200"
          )}
        >
          {item}
        </a>
      ))}
    </div>
  )
}

export default Categories
