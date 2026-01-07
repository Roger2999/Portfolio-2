import { create } from "zustand";
import { persist } from "zustand/middleware";
const THEME_KEY = "Theme";
export type Theme = string | null;

interface ThemeState {
  theme: Theme;
  toggleTheme: () => void;
}

const getInitialTheme = (): Theme => {
  const ls = localStorage.getItem(THEME_KEY);
  return ls ? ls : "dark";
};

export const ThemeStore = create(
  persist<ThemeState>(
    (set) => ({
      theme: getInitialTheme(),
      toggleTheme: () =>
        set((state) => {
          const newTheme = state.theme === "light" ? "dark" : "light";
          if (typeof document !== "undefined") {
            document.documentElement.setAttribute("data-theme", newTheme);
          }
          return { theme: newTheme };
        }),
    }),
    { name: "Theme" }
  )
);
