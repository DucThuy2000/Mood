import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { MoodType } from "./types/mood";
import { MOOD_TYPES } from "./constants/mood";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Get appropriate Tailwind class based on mood
export function getMoodColorClass(
  mood: MoodType | null,
  prefix: string = "bg",
  opacity?: string
): string {
  if (!mood) return `${prefix}-primary`;

  const moodColor = MOOD_TYPES[mood]?.color || "primary";
  return opacity
    ? `${prefix}-${moodColor}/${opacity}`
    : `${prefix}-${moodColor}`;
}

// Get Tailwind text color class based on mood
export function getMoodTextClass(mood: MoodType | null): string {
  return getMoodColorClass(mood, "text");
}
