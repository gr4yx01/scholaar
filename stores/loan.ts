import { create } from "zustand";

type Loan = {
  countries: any;
  selection: {
    "Are you a citizen of Nigeria?": string;
    "country": string;
    "state": string;
    "university": string;
  },
  setCountries: (countries: any[]) => void;
  setSelection: (selection: any) => void;
};

export const useLoan = create<Loan>((set) => ({
  countries: [],
    selection: {
        "Are you a citizen of Nigeria?": "",
        "country": "",
        "state": "",
        "university": "",
        },
    setCountries: (countries) => set({ countries }),
    setSelection: (selection) => set((state) => ({
        selection: { ...state.selection, ...selection },
    })),
}));