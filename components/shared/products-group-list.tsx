"use client"

import React from "react"
import { Title } from "./title"
import ProductCard from "./product-card"
import { useIntersection } from "react-use"
import { useCategoryStore } from "@/store/category"

interface Props {
  title: string
  items: any[]
  categoryId: number
  className?: string
}

export const ProductsGroupList: React.FC<Props> = ({
  title,
  items,
  className,
}) => {
  const { setActiveId } = useCategoryStore()
  const intersectionRef = React.useRef(null)
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  })

  React.useEffect(() => {
    if (intersection?.isIntersecting) setActiveId(title)
  }, [intersection?.isIntersecting, title])
  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="mb-5 font-extrabold" />
      <div className="grid grid-cols-3 gap-[50px]">
        {items.map((item, i) => (
          <ProductCard
            key={item}
            name="Маргарита"
            imageUrl="https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp"
            price={390}
            count={i % 2}
          />
        ))}
      </div>
    </div>
  )
}
