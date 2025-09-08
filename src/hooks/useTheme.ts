import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useLocalStorage<"light" | "dark">("theme", "light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  // Apply theme to document
  useEffect(() => {
    if (typeof window !== "undefined") {
      const root = window.document.documentElement;

      if (theme === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    }
  }, [theme]);

  // Initialize theme on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const root = window.document.documentElement;
      const storedTheme = localStorage.getItem("theme");

      if (storedTheme) {
        const parsedTheme = JSON.parse(storedTheme);
        if (parsedTheme === "dark") {
          root.classList.add("dark");
        } else {
          root.classList.remove("dark");
        }
      } else {
        // Check system preference
        const prefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        if (prefersDark) {
          setTheme("dark");
          root.classList.add("dark");
        }
      }
    }
  }, [setTheme]);

  return {
    theme,
    setTheme,
    toggleTheme,
    isDark: theme === "dark",
  };
};
