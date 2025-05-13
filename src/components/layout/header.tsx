"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { BsCloudMoonFill, BsStars } from "react-icons/bs";
import { ThemeToggle } from "../theme/theme-toggle";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [bouncing, setBouncing] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  // Bounce animation for logo on interval
  useEffect(() => {
    const interval = setInterval(() => {
      setBouncing(true);
      setTimeout(() => setBouncing(false), 1000);
    }, 10000); // Bounce every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full backdrop-blur-sm transition-all duration-200 ${
        scrolled ? "bg-background/80 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <div
            className={`relative transition-transform ${
              bouncing ? "animate-bounce" : ""
            }`}
          >
            <BsCloudMoonFill className="h-7 w-7 text-primary" />
            <BsStars className="absolute -top-1 -right-1 h-3 w-3 text-yellow-400" />
          </div>
          <span className="text-xl font-bold tracking-tighter">
            <span className="text-primary">Mood</span>
            <span className="text-accent-foreground">Vibes</span>
          </span>
        </Link>
        <nav className="flex items-center gap-4">
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};
