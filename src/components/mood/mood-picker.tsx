"use client";

import { useAtom } from "jotai";
import { MOOD_TYPES } from "@/lib/constants/mood";
import { MoodType } from "@/lib/types/mood";
import { selectedMoodAtom } from "@/lib/stores/moodAtom";
import { EmojiItem } from "./emoji-item";

export const MoodPicker = () => {
  const [selectedMood, setSelectedMood] = useAtom(selectedMoodAtom);

  // Handle mood selection
  const handleMoodSelect = (mood: MoodType) => {
    setSelectedMood(mood === selectedMood ? null : mood);
  };

  return (
    <div className="w-full max-w-xl mx-auto px-4">
      <div className="text-center mb-4">
        <p className="text-muted-foreground">
          Select an emoji that matches your mood
        </p>
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        {Object.entries(MOOD_TYPES).map(([key, data]) => (
          <EmojiItem
            key={key}
            mood={key as MoodType}
            moodData={data}
            onSelect={handleMoodSelect}
            isSelected={selectedMood === key}
          />
        ))}
      </div>

      {selectedMood && (
        <div className="mt-4 text-center">
          <p>
            You're feeling{" "}
            <span className="font-bold">{MOOD_TYPES[selectedMood].name}</span>
          </p>
        </div>
      )}
    </div>
  );
};
