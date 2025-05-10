import { create } from "zustand";
import { persist } from "zustand/middleware";

type ThemeSwitcher = {
  dark: boolean;
  switch: () => void;
};

export const useThemeSwitcher = create<ThemeSwitcher>()(
  persist(
    (set) => ({
      dark: false,
      switch: () =>
        set((state) => ({
          dark: !state.dark,
        })),
    }),
    {
      name: "contries-app",
    },
  ),
);
