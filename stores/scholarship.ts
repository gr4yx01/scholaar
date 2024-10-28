import { create } from 'zustand'

type Scholarship = {
    scholarships: any;
    setScholarships: (scholarship: any[]) => void;
}

export const useScholarship = create<Scholarship>((set) => ({
    scholarships: [],
    setScholarships: (scholarships) => set({ scholarships })
  }));