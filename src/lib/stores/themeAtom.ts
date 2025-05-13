import { atom } from "jotai";
import { LocalStorageKeys, Theme } from "../types/common";

const getInitialTheme = () => {
  if (typeof window !== "undefined") {
    const storedTheme = localStorage.getItem(LocalStorageKeys.THEME);
    if (storedTheme) {
      return storedTheme as Theme;
    }
    // Always default to dark theme instead of checking system preference
    return "dark";
  }
  return "dark"; // Default to dark theme if window is not defined
};
export const themeAtom = atom<Theme>(getInitialTheme());

export const themeAtomWithPersistence = atom(
  (get) => get(themeAtom),
  (get, set, newTheme: Theme) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(LocalStorageKeys.THEME, newTheme);
    }

    set(themeAtom, newTheme);
  }
);
