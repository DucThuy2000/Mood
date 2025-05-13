"use client";

import { useAtom } from "jotai";
import { selectedCategoryAtom } from "@/lib/stores/moodAtom";
import { CONTENT_CATEGORIES } from "@/lib/constants/mood";
import { ContentCategory } from "@/lib/types/mood";
import { CategoryItem } from "./category-item";

export const CategorySelection = () => {
  const [selectedCategory, setSelectedCategory] = useAtom(selectedCategoryAtom);

  const handleCategorySelection = (category: ContentCategory) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  return (
    <div className="w-full transition-all duration-300">
      <h2 className="text-2xl font-bold mb-2 text-center">
        Choose your content type
      </h2>
      <p className="text-muted-foreground mb-6 text-center">
        Select what kind of content you want to see
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        {Object.entries(CONTENT_CATEGORIES).map(([key, categoryData]) => (
          <CategoryItem
            key={key}
            category={key as ContentCategory}
            categoryData={categoryData}
            isSelected={selectedCategory === key}
            onSelect={handleCategorySelection}
          />
        ))}
      </div>
    </div>
  );
};
