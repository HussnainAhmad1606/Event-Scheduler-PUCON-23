import { create } from 'zustand'

export const useUserStore = create((set) => ({
  username: "",
  email: "",
  setUsername: (newUsername) => set({ username:newUsername })
//   setEmail: (newEmail) => set((state) => ({ username:newEmail })),
//   removeUser: () => set({ username: "", email: "" }),
}))