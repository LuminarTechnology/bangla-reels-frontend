"use client"

import { useState } from "react"
import { Button } from "../../ui/button"


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
]

const sortOptions = ["Popular", "Latest"]

const FilterCategoryButtons =()=> {
  const [activeType, setActiveType] = useState("All")
  const [activeSort, setActiveSort] = useState("Popular")

  return (
    <div className="w-full  space-y-6">
      {/* Type Section */}
      <div className="space-y-3">
        <h3 className="text-white text-sm font-medium">Type</h3>
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
        <h3 className="text-white text-sm font-medium">Sort by</h3>
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
  )
}

export default FilterCategoryButtons