"use client";

import { useState } from "react";
import { useAtom } from "jotai";
import { MoodType } from "@/lib/types/mood";
import {
  moodTextInputAtom,
  selectedMoodAtom,
  userMoodHistoryAtom,
} from "@/lib/stores/moodAtom";
import { Button } from "@/components/ui/button";

export const MoodInput = () => {
  const [inputText, setInputText] = useAtom(moodTextInputAtom);
  const [_, setSelectedMood] = useAtom(selectedMoodAtom);
  const [__, setUserMoodHistory] = useAtom(userMoodHistoryAtom);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Super simple mood detection based on keywords
  const detectMood = (text: string): MoodType | null => {
    const lowerText = text.toLowerCase();

    const moodKeywords: Record<MoodType, string[]> = {
      HAPPY: [
        "happy",
        "joy",
        "glad",
        "excellent",
        "good",
        "great",
        "wonderful",
        "cheerful",
        "delighted",
      ],
      EXCITED: [
        "excited",
        "thrilled",
        "eager",
        "enthusiastic",
        "pumped",
        "stoked",
        "hyped",
        "ecstatic",
        "amped",
      ],
      RELAXED: [
        "relaxed",
        "calm",
        "peaceful",
        "chill",
        "zen",
        "tranquil",
        "serene",
        "laid back",
        "content",
      ],
      NEUTRAL: [
        "fine",
        "okay",
        "neutral",
        "alright",
        "meh",
        "so-so",
        "average",
        "neither",
        "indifferent",
      ],
      BORED: [
        "bored",
        "boring",
        "dull",
        "uninterested",
        "tedious",
        "mundane",
        "monotonous",
        "tired of",
        "uninspired",
      ],
      SAD: [
        "sad",
        "unhappy",
        "depressed",
        "down",
        "blue",
        "gloomy",
        "miserable",
        "heartbroken",
        "upset",
      ],
      ANGRY: [
        "angry",
        "mad",
        "frustrated",
        "annoyed",
        "irritated",
        "furious",
        "enraged",
        "outraged",
        "pissed",
      ],
      CONFUSED: [
        "confused",
        "unsure",
        "perplexed",
        "baffled",
        "uncertain",
        "puzzled",
        "bewildered",
        "lost",
        "disoriented",
      ],
      RANDOM: [],
    };

    // Count matching keywords for each mood
    const moodCounts = Object.entries(moodKeywords).reduce(
      (counts, [mood, keywords]) => {
        const matchCount = keywords.filter((word) =>
          lowerText.includes(word)
        ).length;
        counts[mood as MoodType] = matchCount;
        return counts;
      },
      {} as Record<MoodType, number>
    );

    // Find the mood with the most matches
    let maxCount = 0;
    let detectedMood: MoodType | null = null;

    Object.entries(moodCounts).forEach(([mood, count]) => {
      if (count > maxCount) {
        maxCount = count;
        detectedMood = mood as MoodType;
      }
    });

    // If no matches or tied matches, return null
    return maxCount > 0 ? detectedMood : "NEUTRAL";
  };

  const handleSubmit = () => {
    if (!inputText.trim()) {
      setErrorMessage("Please tell us how you're feeling!");
      return;
    }

    setIsAnalyzing(true);
    setErrorMessage("");

    // Simulate AI processing with a timeout
    setTimeout(() => {
      const detectedMood = detectMood(inputText);

      if (detectedMood) {
        setSelectedMood(detectedMood);

        // Add to history with timestamp
        setUserMoodHistory((prev) => [
          ...prev,
          {
            type: detectedMood,
            timestamp: new Date(),
          },
        ]);
      } else {
        setErrorMessage(
          "I couldn't quite detect your mood. Try using more descriptive words!"
        );
      }

      setIsAnalyzing(false);
    }, 1500); // 1.5s delay to simulate processing
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-8 p-6 rounded-xl bg-card shadow-sm">
      <h3 className="text-xl font-bold mb-4">Tell us how you're feeling</h3>

      <div className="flex flex-col gap-4">
        <div className="relative">
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Describe your mood... (e.g., 'I'm feeling really excited about my weekend plans!')"
            className="w-full p-4 h-24 rounded-lg border bg-background focus:ring-2 focus:ring-primary"
          />
        </div>

        {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}

        <Button
          onClick={handleSubmit}
          disabled={isAnalyzing || !inputText.trim()}
          className="self-end"
        >
          {isAnalyzing ? "Analyzing..." : "Detect My Mood"}
        </Button>
      </div>

      <p className="text-sm text-muted-foreground mt-4">
        Our mood-sensing AI will analyze your text and try to figure out how
        you're feeling. The more detail you provide, the better!
      </p>
    </div>
  );
};
