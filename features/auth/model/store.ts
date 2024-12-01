import { create } from "zustand";

export const useUserStore = create<{
  user: object | undefined;
  setUser: (user?: object) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}>((set) => ({
  user: undefined,
  setUser: (user) => set({ user }),
  loading: false,
  setLoading: (loading) => set({ loading }),
}));
