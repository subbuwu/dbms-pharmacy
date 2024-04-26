import { create } from 'zustand'

export const useAuthStore = create((set) => ({
  currentUser: "",
  updateCurrentUser: (newUser) => set({ currentUser: newUser }),
}))