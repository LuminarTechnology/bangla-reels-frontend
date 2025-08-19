"use client";
import { getEpisodeNumber } from "@/src/utils/getEpisodeNumber";
import Link from "next/link";
import React, { useState } from "react";

const episodes = [
  { number: "Trailer", active: false },
  { number: "EP 1", active: false },
  { number: "EP 2", active: false },
  { number: "EP 3", active: false },
  { number: "EP 4", active: false },
  { number: "EP 5", active: false },
  { number: "EP 6", active: false },
  { number: "EP 7", active: false },
  { number: "EP 8", active: false },
  { number: "EP 9", active: false },
  { number: "EP 10", active: false },
  { number: "EP 11", active: false },
  { number: "EP 12", active: false },
  { number: "EP 13", active: false },
  { number: "EP 14", active: false },
  { number: "EP 15", active: false },
  { number: "EP 16", active: false },
  { number: "EP 17", active: false },
  { number: "EP 18", active: false },
  { number: "EP 19", active: false },
  { number: "EP 20", active: false },
  { number: "EP 21", active: false },
  { number: "EP 22", active: false },
  { number: "EP 23", active: false },
  { number: "EP 24", active: false },
  { number: "EP 25", active: false },
  { number: "EP 26", active: false },
  { number: "EP 27", active: false },
  { number: "EP 29", active: false },
  { number: "EP 30", active: false },
];

const EpisodeList = () => {
  const [activeRange, setActiveRange] = useState(0);

  const totalRanges = Math.ceil(episodes.length / 30);
  const ranges = Array.from({ length: totalRanges }, (_, i) => {
    const start = i * 50 + 1;
    const end = Math.min((i + 1) * 30, episodes.length);
    return { start, end };
  });

  // Now filter based on active range
  const displayedEpisodes = episodes.filter((ep) => {
    const num = getEpisodeNumber(ep);
    return num >= ranges[activeRange].start && num <= ranges[activeRange].end;
  });
  return (
    <div>
      <h2 className="mb-4 text-xl font-semibold text-white">Episode List</h2>

      {/* Episode Range Selector */}
      <div className="mb-6 flex flex-wrap gap-4">
        {ranges.map((range, idx) => (
          <button
            key={idx}
            onClick={() => setActiveRange(idx)}
            className={`pb-1 font-medium transition-colors ${
              activeRange === idx
                ? "border-b-2 border-red-500 text-red-500"
                : "text-white/60 hover:text-white/80"
            }`}
          >
            {range.start}-{range.end}
          </button>
        ))}
      </div>

      {/* Episodes Grid */}
      <div className="grid grid-cols-5 gap-2 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 xl:grid-cols-15">
        {activeRange === 0 && (
          <Link href={`/episode/trailer`}>
            <button className="rounded border border-gray-600/30 bg-gray-800/50 px-3 py-2 text-sm font-medium text-white/80 transition-colors hover:border-red-500/50 hover:bg-red-700/50 hover:text-white">
              Trailer
            </button>
          </Link>
        )}

        {displayedEpisodes.map((episode, index) => (
          <Link href={`/episode/${episode.number}`}>
            <button
              key={index}
              className="rounded border border-gray-600/30 bg-gray-800/50 px-3 py-2 text-sm font-medium text-white/80 transition-colors hover:border-red-500/50 hover:bg-red-700/50 hover:text-white"
            >
              {episode.number}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EpisodeList;
