"use client";

import { MoodData, MoodType } from "@/lib/types/mood";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface EmojiItemProps {
  mood: MoodType;
  moodData: MoodData;
  onSelect: (mood: MoodType) => void;
  isSelected?: boolean;
}

export const EmojiItem = ({
  mood,
  moodData,
  onSelect,
  isSelected = false,
}: EmojiItemProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            className={cn(
              "text-3xl p-2 transition-all duration-300 hover:scale-125 focus:outline-none cursor-pointer",
              isSelected && "scale-180 text-primary" // Scale up when selected
            )}
            onClick={() => onSelect(mood)}
            aria-label={`Select ${moodData.name} mood`}
          >
            {moodData.emoji}
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <div className="text-center">
            <p className={cn("font-medium", isSelected && "font-bold")}>
              {moodData.name}
            </p>
            <p className="text-xs text-muted-foreground">
              {moodData.description}
            </p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
