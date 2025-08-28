import React from "react";

import Image from "next/image";

import { Eye, Heart, MessageSquare } from "lucide-react";

interface Entry {
  id: number;
  title: string;
  tags: string;
  authorName: string;
  authorAvatar: string;
  description: string;
  views: string;
  likes: string;
  comments: string;
  poster: string;
}

const entriesData: Entry[] = [
  {
    id: 1,
    title: "Forever After, Never Again to born",
    tags: "Love After Divorce, Heiress",
    authorName: "Tom Konkle",
    authorAvatar: "/images/contest/avatar.jpg",
    description: "Based on true events, in our darkest of times, the Tickle Mons...",
    views: "866k",
    likes: "866k",
    comments: "866k",
    poster: "/images/contest/GalleryofContestcardPoster.png",
  },
  {
    id: 2,
    title: "Forever After, Never Again to born",
    tags: "Love After Divorce, Heiress",
    authorName: "Tom Konkle",
    authorAvatar: "/images/contest/avatar.jpg",
    description: "Based on true events, in our darkest of times, the Tickle Mons...",
    views: "866k",
    likes: "866k",
    comments: "866k",
    poster: "/images/contest/GalleryofContestcardPoster.png",
  },
  {
    id: 3,
    title: "Forever After, Never Again to born",
    tags: "Love After Divorce, Heiress",
    authorName: "Tom Konkle",
    authorAvatar: "/images/contest/avatar.jpg",
    description: "Based on true events, in our darkest of times, the Tickle Mons...",
    views: "866k",
    likes: "866k",
    comments: "866k",
    poster: "/images/contest/GalleryofContestcardPoster.png",
  },
  {
    id: 4,
    title: "Forever After, Never Again to born",
    tags: "Love After Divorce, Heiress",
    authorName: "Tom Konkle",
    authorAvatar: "/images/contest/avatar.jpg",
    description: "Based on true events, in our darkest of times, the Tickle Mons...",
    views: "866k",
    likes: "866k",
    comments: "866k",
    poster: "/images/contest/GalleryofContestcardPoster.png",
  },
  {
    id: 5,
    title: "Forever After, Never Again to born",
    tags: "Love After Divorce, Heiress",
    authorName: "Tom Konkle",
    authorAvatar: "/images/contest/avatar.jpg",
    description: "Based on true events, in our darkest of times, the Tickle Mons...",
    views: "866k",
    likes: "866k",
    comments: "866k",
    poster: "/images/contest/GalleryofContestcardPoster.png",
  },
  {
    id: 6,
    title: "Forever After, Never Again to born",
    tags: "Love After Divorce, Heiress",
    authorName: "Tom Konkle",
    authorAvatar: "/images/contest/avatar.jpg",
    description: "Based on true events, in our darkest of times, the Tickle Mons...",
    views: "866k",
    likes: "866k",
    comments: "866k",
    poster: "/images/contest/GalleryofContestcardPoster.png",
  },
  {
    id: 7,
    title: "Forever After, Never Again to born",
    tags: "Love After Divorce, Heiress",
    authorName: "Tom Konkle",
    authorAvatar: "/images/contest/avatar.jpg",
    description: "Based on true events, in our darkest of times, the Tickle Mons...",
    views: "866k",
    likes: "866k",
    comments: "866k",
    poster: "/images/contest/GalleryofContestcardPoster.png",
  },
  {
    id: 8,
    title: "Forever After, Never Again to born",
    tags: "Love After Divorce, Heiress",
    authorName: "Tom Konkle",
    authorAvatar: "/images/contest/avatar.jpg",
    description: "Based on true events, in our darkest of times, the Tickle Mons...",
    views: "866k",
    likes: "866k",
    comments: "866k",
    poster: "/images/contest/GalleryofContestcardPoster.png",
  },
  {
    id: 9,
    title: "Forever After, Never Again to born",
    tags: "Love After Divorce, Heiress",
    authorName: "Tom Konkle",
    authorAvatar: "/images/contest/avatar.jpg",
    description: "Based on true events, in our darkest of times, the Tickle Mons...",
    views: "866k",
    likes: "866k",
    comments: "866k",
    poster: "/images/contest/GalleryofContestcardPoster.png",
  },
  {
    id: 10,
    title: "Forever After, Never Again to born",
    tags: "Love After Divorce, Heiress",
    authorName: "Tom Konkle",
    authorAvatar: "/images/contest/avatar.jpg",
    description: "Based on true events, in our darkest of times, the Tickle Mons...",
    views: "866k",
    likes: "866k",
    comments: "866k",
    poster: "/images/contest/GalleryofContestcardPoster.png",
  },
  {
    id: 11,
    title: "Forever After, Never Again to born",
    tags: "Love After Divorce, Heiress",
    authorName: "Tom Konkle",
    authorAvatar: "/images/contest/avatar.jpg",
    description: "Based on true events, in our darkest of times, the Tickle Mons...",
    views: "866k",
    likes: "866k",
    comments: "866k",
    poster: "/images/contest/GalleryofContestcardPoster.png",
  },
  {
    id: 12,
    title: "Forever After, Never Again to born",
    tags: "Love After Divorce, Heiress",
    authorName: "Tom Konkle",
    authorAvatar: "/images/contest/avatar.jpg",
    description: "Based on true events, in our darkest of times, the Tickle Mons...",
    views: "866k",
    likes: "866k",
    comments: "866k",
    poster: "/images/contest/GalleryofContestcardPoster.png",
  },
];

const GalleryofEntries = () => {
  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold text-white">Recently Updated</h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {entriesData.map((entry) => (
          <div
            key={entry.id}
            className="flex gap-4 rounded-xl border border-white/10 bg-[#1C162E] p-4"
          >
            {/* Left Column: Poster Image */}

            <div className="relative w-2/5 flex-shrink-0">
              <Image
                src={entry.poster}
                alt={entry.title}
                fill
                className="rounded-lg object-cover"
              />
            </div>

            {/* Right Column: Card Content */}

            <div className="flex w-3/5 flex-col justify-between">
              {/* Top section of text content */}

              <div className="flex flex-col gap-2">
                <div>
                  <h3 className="text-lg leading-tight font-bold text-white">{entry.title}</h3>

                  <p className="text-xs text-gray-400">{entry.tags}</p>
                </div>

                <div className="flex items-center gap-2">
                  <Image
                    src={entry.authorAvatar}
                    alt={entry.authorName}
                    width={24}
                    height={24}
                    className="rounded-full object-cover"
                  />

                  <span className="text-sm text-gray-300">{entry.authorName}</span>
                </div>

                <p className="line-clamp-2 text-sm text-gray-400">{entry.description}</p>
              </div>

              {/* Bottom section: Stats */}

              <div className="flex items-center gap-4 border-t border-white/10 pt-2 text-gray-400">
                <div className="flex items-center gap-1.5">
                  <Eye className="size-4" />

                  <span className="text-xs">{entry.views}</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <Heart className="size-4" />

                  <span className="text-xs">{entry.likes}</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <MessageSquare className="size-4" />

                  <span className="text-xs">{entry.comments}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryofEntries;
