import React from "react";
import MyEntryCard from "../../common/MyEntryCard";
import { Plus } from "lucide-react";
import myEntriesData from "@/src/constants/MyEntries"

const MyVideos = () => {
  return (
    <div className="text-white">
      <h2 className="mb-2 text-2xl font-bold">My Entries</h2>
      <p className="mb-6 text-gray-400">
        Your current contest status:{" "}
        <span className="text-red-500">2 videos under review.</span>
      </p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {myEntriesData.map((entry, index) => (
          <MyEntryCard key={`${entry.title}-${index}`} {...entry} />
        ))}

        <button className="flex h-[397px] w-full max-w-xs flex-col items-center justify-center gap-4 rounded-xl border-2 border-dashed border-white/20 bg-[#1C162E] p-4 text-gray-400 transition-colors hover:bg-white/5 hover:text-white">
          <Plus className="size-16" />
          <span className="text-xl font-semibold">New Upload</span>
        </button>
      </div>
    </div>
  );
};

export default MyVideos;