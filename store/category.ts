import { create } from "zustand"

interface State {
  activeId: string
  setActiveId: (activeId: string) => void
}

export const useCategoryStore = create<State>()((set) => ({
  activeId: "Пиццы",
  setActiveId: (activeId: string) => set({ activeId }),
}))
