"use client";

import { useEffect } from "react";
import { useAtom } from "jotai";
import { themeAtomWithPersistence } from "../stores/themeAtom";

export const useTheme = () => {
  const [theme, setTheme] = useAtom(themeAtomWithPersistence);

  const toggleTheme = () => {
    // Directly set the new theme value instead of using a function
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    // Apply the theme to the document body
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return { theme, toggleTheme };
};
