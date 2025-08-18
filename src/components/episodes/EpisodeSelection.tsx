"use client"

import { useState } from "react"
import { ChevronDown, Gem } from "lucide-react"
import { Switch } from "../ui/switch"
import { Label } from "../ui/label"
import Image from "next/image"

interface EpisodeSelectionProps {
  totalEpisodes?: number
  selectedEpisode?: number
  onEpisodeSelect?: (episode: number) => void
  onAutoPlayToggle?: (enabled: boolean) => void
}

export default function EpisodeSelection({
  totalEpisodes = 71,
  selectedEpisode = 1,
  onEpisodeSelect,
  onAutoPlayToggle,
}: EpisodeSelectionProps) {
  const [activeRange, setActiveRange] = useState("1-30")
  const [showMore, setShowMore] = useState(false)
  const [autoPlay, setAutoPlay] = useState(true)
  // Define which episodes are premium (have diamond icons)
  const premiumEpisodes = [
    6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70,
  ]

  // Generate episode ranges
  const ranges = []
  for (let i = 1; i <= totalEpisodes; i += 30) {
    const end = Math.min(i + 29, totalEpisodes)
    ranges.push(`${i}-${end}`)
  }

  // Get episodes for current range
  const getCurrentRangeEpisodes = () => {
    const [start, end] = activeRange.split("-").map(Number)
    const episodes = []
    for (let i = start; i <= end; i++) {
      episodes.push(i)
    }
    return episodes
  }

  const currentEpisodes = getCurrentRangeEpisodes()
  const displayedEpisodes = showMore ? currentEpisodes : currentEpisodes.slice(0, 15)

   const handleAutoPlayChange = (checked: boolean) => {
    setAutoPlay(checked)
    onAutoPlayToggle?.(checked)
  }
  return (
    <div className="bg-[#16151A] p-6 rounded-lg mt-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white text-xl font-semibold">Selections</h3>
        <div className="flex items-center gap-2">
          <Label className="text-[#B3B1B0] text-base">Auto Play</Label>
            <Switch
            checked={autoPlay}
            onCheckedChange={handleAutoPlayChange}
            className="data-[state=checked]:bg-primary-rose cursor-pointer"
          />
        </div>
      </div>

      {/* Episode count */}
      <p className="text-[#B3B1B0] text-base mb-4">{totalEpisodes} Episodes • Finished</p>

      {/* Range selector */}
      <div className="flex gap-4 mb-4">
        {ranges.map((range) => (
          <button
            key={range}
            onClick={() => setActiveRange(range)}
            className={` mb-2 text-sm font-medium transition-colors cursor-pointer ${
              activeRange === range ? "text-primary-rose" : " text-[#B3B1B0] "
            }`}
          >
            {range}
            {activeRange === range && <div className="bg-primary-rose h-[1.5px] w-3 mx-auto"></div>}
          </button>
        ))}
      </div>

      {/* Episode grid */}
      <div className="grid grid-cols-5 gap-3 mb-4">
        {displayedEpisodes.map((episode) => (
          <button
            key={episode}
            onClick={() => onEpisodeSelect?.(episode)}
            className={`relative aspect-square rounded-[8px] font-medium text-sm transition-colors text-white cursor-pointer ${
              selectedEpisode === episode ? "bg-primary-rose " : "bg-black "
            }`}
          >
            {episode}
            {premiumEpisodes.includes(episode) && (
              <div className="absolute top-0 -right-0 bg-[#2B115B33] p-[2px] rounded-bl-[4px]"> 
                <div className=" relative">
      

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
          </button>
        ))}
      </div>

      {/* See more button */}
      {currentEpisodes.length > 15 && (
        <button
          onClick={() => setShowMore(!showMore)}
          className="flex items-center gap-2  text-white text-sm cursor-pointer transition-colors mb-4 hover:text-blue-300"
        >
          <span>{showMore ? "See less" : "See more"}</span>
          <ChevronDown className={`w-4 h-4 transition-transform ${showMore ? "rotate-180" : ""}`} />
        </button>
      )}

      {/* Warning text */}
      <p className="text-[#B3B1B0] text-xs leading-relaxed">
        Episodes that need to be unlocked will consume 3 diamond per episode. Video can't be played?{" "}
        <span className="text-primary-rose hover:text-blue-300 cursor-pointer">Feedback</span>
      </p>
    </div>
  )
}
