"use client";

import { useState } from "react";
import { Button } from "../../ui/button";
import { cn } from "@/src/lib/utils";

const mainCategories = ["Actors", "Actress", "Identities", "Story Beats"];

const typeCategories = [
  "All",
  "TorturedLove",
  "Comeback",
  "Revenge",
  "Urbon",
  "Werewolf",
  "CEO",
  "WarGod",
  "Mafia",
  "SweetLove",
];

const sortOptions = ["Popular", "Latest"];

const FilterCategoryButtons = () => {
  const [activeCategory, setActiveCategory] = useState("Actors");
  const [activeType, setActiveType] = useState("All");
  const [activeSort, setActiveSort] = useState("Popular");

  return (
    <div className="mt-6 w-full space-y-6">
      {/* Main Categories Section */}
      <div className="space-y-3">
        <div className="flex flex-wrap gap-2 border-b border-gray-100 pb-4">
          {mainCategories.map((category) => (
            <Button
              key={category}
              variant="filter"
              size="sm"
              active={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 text-xl transition-colors",
                activeCategory === category
                  ? "bg-primary-rose text-white"
                  : "bg-transparent text-gray-300 hover:bg-gray-700 hover:text-white"
              )}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Type Section */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-white">
          {activeCategory === "Actors"
            ? "Actor Types"
            : activeCategory === "Actress"
              ? "Actress Types"
              : activeCategory === "Identities"
                ? "Identity Types"
                : "Story Beat Types"}
        </h3>
        <div className="flex flex-wrap gap-2">
          {typeCategories.map((category) => (
            <Button
              key={category}
              variant="filter"
              size="sm"
              active={activeType === category}
              onClick={() => setActiveType(category)}
              className="px-4 py-2"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Sort by Section */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-white">Sort by</h3>
        <div className="flex gap-2">
          {sortOptions.map((option) => (
            <Button
              key={option}
              variant="filter"
              size="sm"
              active={activeSort === option}
              onClick={() => setActiveSort(option)}
              className="px-4 py-2"
            >
              {option}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterCategoryButtons;
