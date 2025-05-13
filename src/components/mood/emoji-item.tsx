"use client";

import { MoodData, MoodType } from "@/lib/types/mood";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface EmojiItemProps {
  mood: MoodType;
  moodData: MoodData;
  onSelect: (mood: MoodType) => void;
}

export const EmojiItem = ({ mood, moodData, onSelect }: EmojiItemProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            className="text-3xl p-2 transition-all duration-200 hover:scale-125 focus:outline-none cursor-pointer"
            onClick={() => onSelect(mood)}
            aria-label={`Select ${moodData.name} mood`}
          >
            {moodData.emoji}
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <div className="text-center">
            <p className="font-medium">{moodData.name}</p>
            <p className="text-xs text-muted-foreground">
              {moodData.description}
            </p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
