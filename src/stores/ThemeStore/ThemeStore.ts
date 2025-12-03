import { create } from "zustand";
import { persist } from "zustand/middleware";
const THEME_KEY = "theme_key";
export type Theme = string | null;

interface ThemeState {
  theme: Theme;
  toggleTheme: () => void;
}

const getInitialTheme = () => {
  return localStorage.getItem(THEME_KEY);
};

export const ThemeStore = create(
  persist<ThemeState>(
    (set) => ({
      theme: getInitialTheme(),
      toggleTheme: () =>
        set((state) => {
          const next = state.theme === "light" ? "dark" : "light";
          return { theme: next };
        }),
    }),
    { name: "Theme" }
  )
);
