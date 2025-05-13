"use client";

import { useState, useEffect } from "react";
import { BsHeartFill } from "react-icons/bs";

// List of fun emojis that will rotate in the footer
const MOOD_EMOJIS = ["😄", "😎", "🤔", "😌", "🥳", "😴", "🙃", "🤩", "😊"];

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [currentEmoji, setCurrentEmoji] = useState(MOOD_EMOJIS[0]);

  // Change emoji every few seconds for a fun effect
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * MOOD_EMOJIS.length);
      setCurrentEmoji(MOOD_EMOJIS[randomIndex]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full py-6 border-t border-border bg-muted/20">
      <div className="container mx-auto flex flex-col items-center justify-center gap-2 text-center md:flex-row">
        <p className="text-sm text-muted-foreground">
          © {currentYear} MoodVibes. Made with{" "}
          <BsHeartFill className="inline h-3 w-3 text-red-500" /> for your
          emotional rollercoaster {currentEmoji}
        </p>
      </div>
      <div className="container mx-auto mt-2 flex justify-center">
        <p className="text-xs text-muted-foreground/70">
          Tell us how you feel, we'll tell you what to watch/listen/enjoy!
        </p>
      </div>
    </footer>
  );
};
