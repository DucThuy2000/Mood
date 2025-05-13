"use client";

import { MoodPicker } from "./mood-picker";
import { MoodInput } from "./mood-input";
import { MoodTabs } from "./mood-tabs";

export const MoodSelection = () => {
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
    <section className="py-10">
      <div className="container">
        <h1 className="text-4xl font-bold text-center mb-6">
          How are you feeling?
        </h1>
        <p className="text-center text-muted-foreground mb-8">
          Let's figure out your current mood so we can suggest the perfect
          content for you!
        </p>

        <MoodTabs defaultTab="picker" tabs={tabs} />
      </div>
    </section>
  );
};
