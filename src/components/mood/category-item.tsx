"use client";

import { ContentCategory, ContentCategoryData } from "@/lib/types/mood";
import { cn } from "@/lib/utils";
import {
  FiFilm,
  FiMusic,
  FiVideo,
  FiImage,
  FiHelpCircle,
  FiStar,
} from "react-icons/fi";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

// Map category icons to react-icons components
const CATEGORY_ICONS = {
  Film: FiFilm,
  Music: FiMusic,
  Video: FiVideo,
  Image: FiImage,
  Sparkles: FiStar,
};

// Add colors for each category
const CATEGORY_COLORS = {
  film: {
    text: "text-blue-500 hover:text-blue-600",
    bg: "bg-blue-100 dark:bg-blue-900/40",
  },
  music: {
    text: "text-green-500 hover:text-green-600",
    bg: "bg-green-100 dark:bg-green-900/40",
  },
  video: {
    text: "text-red-500 hover:text-red-600",
    bg: "bg-red-100 dark:bg-red-900/40",
  },
  memes: {
    text: "text-purple-500 hover:text-purple-600",
    bg: "bg-purple-100 dark:bg-purple-900/40",
  },
  surprise: {
    text: "text-amber-500 hover:text-amber-600",
    bg: "bg-amber-100 dark:bg-amber-900/40",
  },
};

interface CategoryItemProps {
  category: ContentCategory;
  categoryData: ContentCategoryData;
  isSelected: boolean;
  onSelect: (category: ContentCategory) => void;
}

export const CategoryItem = ({
  category,
  categoryData,
  isSelected,
  onSelect,
}: CategoryItemProps) => {
  // Get the icon component based on the icon name in categoryData
  const IconComponent =
    CATEGORY_ICONS[categoryData.icon as keyof typeof CATEGORY_ICONS] ||
    FiHelpCircle;

  // Get the color classes for this category
  const colorData = CATEGORY_COLORS[
    categoryData.id as keyof typeof CATEGORY_COLORS
  ] || { text: "text-gray-500", bg: "bg-gray-100" };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex flex-col items-center">
            <Button
              variant={isSelected ? "outline" : "outline"}
              size="icon"
              className={cn(
                "w-12 h-12 rounded-full transition-all duration-200 cursor-pointer",
                isSelected
                  ? cn("shadow-md scale-110", colorData.text, colorData.bg)
                  : colorData.text
              )}
              onClick={() => onSelect(category)}
              aria-label={`Select ${categoryData.name} category`}
              aria-pressed={isSelected}
              leftIcon={IconComponent}
            />
            <span
              className={cn(
                "mt-2 text-sm font-medium",
                isSelected && "font-bold"
              )}
            >
              {categoryData.name}
            </span>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{categoryData.description}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
