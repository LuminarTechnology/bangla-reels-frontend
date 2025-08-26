import React from "react";
import EpisodeList from "./EpisodeList";
import { Play, Download, Heart, SquarePlay } from "lucide-react";
import Image from "next/image";

const tags = [
  "Female",
  "Janilla Thensern",
  "Hevie Yonne Hurts",
  "Dylan Ven",
  "Jake",
  "Hobbs",
  "Drama",
  "Strong Heroine",
  "Modern",
  "Contemporary",
  "All Ages",
  "CEO",
  "Single Mom",
  "Independent Woman",
  "Hidden Identity",
  "Revenge",
  "Mistaken Identity",
  "Misunderstanding",
  "Identity Reveal",
  "Emotional",
  "Mother and Daughter",
  "Dysfunctional Family",
  "USA",
  "Villa",
  "Banquet",
  "Office",
];

const MovieDetailsMainSection = () => {
  return (
    <div className="pb-8">
      <div className="flex flex-col gap-8 lg:flex-row">
        <Image
          src={"/images/banner/banner-1.jpg"}
          alt="movie"
          width={200}
          height={400}
          className="rounded-xl object-cover"
        />

        {/* Content */}
        <div className="flex-1">
          <div className="mb-6">
            <h1 className="mb-4 text-3xl font-bold text-white">John Wick 4</h1>
            <div className="flex items-center gap-6 text-white/70">
              <div className="flex items-center gap-2">
                <SquarePlay className="h-5 w-5" />
                <span>56.6k</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5" />
                <span>3.2k</span>
              </div>
              <div className="flex items-center gap-2">
                <Image src={"/icons/share.png"} alt="Copy" width={20} height={20} />
                <span>3.2k</span>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur-sm transition-colors hover:bg-white/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-8 flex gap-4">
            <button className="flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3 font-medium text-white transition-colors hover:bg-red-700">
              <Play className="h-5 w-5 fill-current" />
              Go Watching
            </button>
            <button className="flex items-center gap-2 rounded-lg border border-gray-600/50 bg-gray-700/50 px-6 py-3 font-medium text-white transition-colors hover:bg-gray-600/50">
              <Download className="h-5 w-5" />
              Download
            </button>
          </div>
        </div>
      </div>
      {/* Plot */}
      <div className="my-8">
        <h2 className="mb-4 text-xl font-semibold text-white">Plot of Queen Mom Rules</h2>
        <p className="leading-relaxed text-white/80">
          At her parents' anniversary party, a successful CEO is dismissed as a low-class nobody,
          her diamond gift called fake, and she's even banned from the table!
        </p>
      </div>

      {/* Episode List */}
      <EpisodeList />
    </div>
  );
};

export default MovieDetailsMainSection;
