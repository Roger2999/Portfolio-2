import { ThemeStore } from "../stores";

export const useThemeClasses = () => {
  const theme=  ThemeStore((state)=> state.theme)
  const textClass = theme === "dark" ? "text-gray-300" : "text-gray-700";
  const borderClass = theme === "dark" ? "border-gray-200" : "border-gray-900";
  const bgClass = theme === "dark" ? "bg-gray-800" : "bg-gray-100";

  return { textClass, borderClass, bgClass };
};