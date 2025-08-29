"use client";

import { useState } from "react";
import { ChevronDown, Gem } from "lucide-react";

import Image from "next/image";
import { Label } from "../../ui/label";
import { Switch } from "../../ui/switch";
import { Button } from "../../ui/button";
import Link from "next/link";

interface EpisodeSelectionProps {
  totalEpisodes?: number;
  selectedEpisode?: number;
  onEpisodeSelect?: (episode: number) => void;
  onAutoPlayToggle?: (enabled: boolean) => void;
}

export default function EpisodeSelection({
  totalEpisodes = 71,
  selectedEpisode = 1,
  onEpisodeSelect,
  onAutoPlayToggle,
}: EpisodeSelectionProps) {
  const [activeRange, setActiveRange] = useState("1-30");
  const [showMore, setShowMore] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
  // Define which episodes are premium (have diamond icons)
  const premiumEpisodes = [
    6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70,
  ];

  // Generate episode ranges
  const ranges = [];
  for (let i = 1; i <= totalEpisodes; i += 30) {
    const end = Math.min(i + 29, totalEpisodes);
    ranges.push(`${i}-${end}`);
  }

  // Get episodes for current range
  const getCurrentRangeEpisodes = () => {
    const [start, end] = activeRange.split("-").map(Number);
    const episodes = [];
    for (let i = start; i <= end; i++) {
      episodes.push(i);
    }
    return episodes;
  };

  const currentEpisodes = getCurrentRangeEpisodes();
  const displayedEpisodes = showMore ? currentEpisodes : currentEpisodes.slice(0, 15);

  const handleAutoPlayChange = (checked: boolean) => {
    setAutoPlay(checked);
    onAutoPlayToggle?.(checked);
  };
  return (
    <div className="mt-10 rounded-lg bg-[#16151A] p-6">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xl font-semibold text-white">Selections</h3>
        <div className="flex items-center gap-2">
          <Label className="text-base text-[#B3B1B0]">Auto Play</Label>
          <Switch
            checked={autoPlay}
            onCheckedChange={handleAutoPlayChange}
            className="data-[state=checked]:bg-primary-rose cursor-pointer"
          />
        </div>
      </div>

      {/* Episode count */}
      <p className="mb-4 text-base text-[#B3B1B0]">{totalEpisodes} Episodes • Finished</p>

      {/* Range selector */}
      <div className="mb-4 flex gap-4">
        {ranges.map((range) => (
          <Button
            key={range}
            onClick={() => setActiveRange(range)}
            className={`mb-2 cursor-pointer text-sm font-medium transition-colors ${
              activeRange === range ? "text-primary-rose" : "text-[#B3B1B0]"
            }`}
          >
            {range}
            {activeRange === range && <div className="bg-primary-rose mx-auto h-[1.5px] w-3"></div>}
          </Button>
        ))}
      </div>

      {/* Episode grid */}
      <div className="mb-4 grid grid-cols-5 gap-3">
        {displayedEpisodes.map((episode) => (
          <Link href={"/episode/john-wick"}>
            <Button
              key={episode}
              onClick={() => onEpisodeSelect?.(episode)}
              className={`relative aspect-square cursor-pointer rounded-[8px] text-sm font-medium text-white transition-colors ${
                selectedEpisode === episode ? "bg-primary-rose" : "bg-black"
              }`}
            >
              {episode}
              {premiumEpisodes.includes(episode) && (
                <div className="absolute top-0 -right-0 rounded-bl-[4px] bg-[#2B115B33] p-[2px]">
                  <div className="relative">
                    <Image
                      src="/icons/gem.svg"
                      alt="Gem Icon"
                      width={16}
                      height={16}
                      className=""
                    />
                  </div>
                </div>
              )}
            </Button>
          </Link>
        ))}
      </div>

      {/* See more Button */}
      {currentEpisodes.length > 15 && (
        <Button
          onClick={() => setShowMore(!showMore)}
          className="mb-4 flex cursor-pointer items-center gap-2 text-sm text-white transition-colors hover:text-blue-300"
        >
          <span>{showMore ? "See less" : "See more"}</span>
          <ChevronDown className={`h-4 w-4 transition-transform ${showMore ? "rotate-180" : ""}`} />
        </Button>
      )}

      {/* Warning text */}
      <p className="text-xs leading-relaxed text-[#B3B1B0]">
        Episodes that need to be unlocked will consume 3 diamond per episode. Video can't be played?{" "}
        <span className="text-primary-rose cursor-pointer hover:text-blue-300">Feedback</span>
      </p>
    </div>
  );
}
