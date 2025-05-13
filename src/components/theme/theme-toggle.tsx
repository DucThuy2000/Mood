"use client";

import { BsSun, BsMoon, BsLaptop } from "react-icons/bs";
import { useMemo } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/lib/hooks/useTheme";
import { Button } from "@/components/ui/button";

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle = ({ className }: ThemeToggleProps) => {
  const { theme, toggleTheme } = useTheme();

  const CurrentIcon = useMemo(() => {
    if (theme === "light") return BsSun;
    if (theme === "dark") return BsMoon;
    return BsLaptop;
  }, [theme]);

  return (
    <div className={cn("relative theme-dropdown", className)}>
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        aria-label="Toggle theme"
        leftIcon={CurrentIcon}
        className="cursor-pointer"
      />
    </div>
  );
};
