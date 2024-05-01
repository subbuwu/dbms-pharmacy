import { create } from 'zustand'

export const useAuthStore = create((set) => ({
  currentUser: "",
  updateCurrentUser: (newUser) => set({ currentUser: newUser }),
  currentlyActive: "medicines",
  updateCurrentlyActive: (newCurrentlyActive) => set({ currentlyActive: newCurrentlyActive }),
  allMedicines: [],
  updateAllMedicineCost: (newMedicines) => set({ allMedicines: newMedicines }),
  globalAverageMedicineCost: 0,
  updateGlobalAverageMedicineCost: (newGlobalAverageMedicineCost) => set({ globalAverageMedicineCost: newGlobalAverageMedicineCost }),
})) 