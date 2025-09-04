import React from "react";
import { entriesData } from "@/src/constants/ContestEntries";
import EntryCard from "@/src/components/common/GalleryEntryCard";

const GalleryOfEntries = () => {
  return (
    <div>
      <h2 className="mb-6 text-xl font-bold text-white sm:text-2xl">Recently Updated</h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {entriesData.map((entry) => (
          <EntryCard key={entry.id} {...entry} />
        ))}
      </div>
    </div>
  );
};

export default GalleryOfEntries;
