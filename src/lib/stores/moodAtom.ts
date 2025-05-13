import { atom } from "jotai";
import { MoodType, UserMood } from "../types/mood";

// Store the currently selected mood
export const selectedMoodAtom = atom<MoodType | null>(null);

// Store the user input for mood detection
export const moodTextInputAtom = atom<string>("");

// Store the user's mood history
export const userMoodHistoryAtom = atom<UserMood[]>([]);

// Store the currently active content category
export const selectedCategoryAtom = atom<string | null>(null);
