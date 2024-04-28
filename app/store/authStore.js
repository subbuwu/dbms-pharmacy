import { create } from 'zustand'

export const useAuthStore = create((set) => ({
  currentUser: "",
  updateCurrentUser: (newUser) => set({ currentUser: newUser }),
  currentlyActive: "medicines",
  updateCurrentlyActive: (newCurrentlyActive) => set({ currentlyActive: newCurrentlyActive }),
  allMedicines: [],
  updateAllMedicines: (newMedicines) => set({ allMedicines: newMedicines }),
}))