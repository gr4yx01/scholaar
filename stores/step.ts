import { create } from 'zustand'

type Step = {
  current: number
  setStep: (step: number) => void
}

export const useStep = create<Step>((set) => ({
  current: 1,
  setStep: (step) => set({ current: step }),
}))
