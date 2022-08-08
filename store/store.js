import create from 'zustand'
import { persist } from 'zustand/middleware'

export const useBearStore = create(persist((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  decreasePopulation: () => set((state) => ({ bears: state.bears - 1 })),
  removeAllBears: () => set({ bears: 0 }),
})))
