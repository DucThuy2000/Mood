"use client";

import { useAtom } from "jotai";
import { selectedMoodAtom } from "@/lib/stores/moodAtom";
import { MoodPicker } from "./mood-picker";
import { MoodInput } from "./mood-input";
import { MoodTabs } from "./mood-tabs";

export const MoodSelection = () => {
  const [selectedMood] = useAtom(selectedMoodAtom);

  const tabs = [
    {
      id: "picker",
      label: "😊 Mood Emojis",
      content: <MoodPicker />,
    },
    {
      id: "text",
      label: "✍️ Describe It",
      content: <MoodInput />,
    },
  ];

  return (
    <section className="transition-all duration-300">
      <h1 className="text-4xl font-bold mb-2 text-center">
        How are you feeling?
      </h1>
      <p className="text-muted-foreground mb-6 text-center">
        Tell us how you're feeling to get content suggestions
      </p>

      <MoodTabs defaultTab="picker" tabs={tabs} />
    </section>
  );
};
