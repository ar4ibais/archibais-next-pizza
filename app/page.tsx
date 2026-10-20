import Categories from "@/components/shared/categories"
import { Container } from "@/components/shared/container"
import { Filters } from "@/components/shared/filters"
import { ProductsGroupList } from "@/components/shared/products-group-list"
import SortPopup from "@/components/shared/sort-popup"
import { Title } from "@/components/shared/title"

export default function Page() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Пицца" size="lg" className="font-extrabold" />
      </Container>

      <div className="sticky top-0 bg-white py-5 shadow-lg shadow-black/5">
        <Container className="flex items-center justify-between">
          <Categories />
          <SortPopup />
        </Container>
      </div>

      <Container className="pt-10 pb-14">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList title="Пиццы" items={[1, 2, 3, 4, 5]} />
              <ProductsGroupList title="Комбо" items={[1, 2, 3, 4, 5]} />
            </div>
            {/* <div className="mt-12 flex items-center gap-6">
              <Pagination pageCount={3} />
              <span className="text-sm text-gray-400">5 из 65</span>
            </div> */}
          </div>
        </div>
      </Container>
    </>
  )
}
