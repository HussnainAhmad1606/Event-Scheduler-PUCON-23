import { create } from 'zustand'

export const useUserStore = create(() => ({
  username: "",
  email: "",
//   setUsername: (newUsername) => set((state) => ({ username:newUsername })),
//   setEmail: (newEmail) => set((state) => ({ username:newEmail })),
//   removeUser: () => set({ username: "", email: "" }),
}))