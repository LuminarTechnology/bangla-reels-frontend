import { Counter } from "@/src/components/counter/Counter";
import BlogCard from "@/src/components/pages/fandom/BlogCard";
import React from "react";

export default function HomePage() {
  return (
    <div>
      {/* <Counter /> */}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <BlogCard
            backgroundImage="/images/Poster.png"
            topic="General Topic"
            title="PAST"
            date="2025-06-04"
            headline="What Can We Consider As The Charming Points Of Poolboy ReelShort Dailymotion Movie?"
            description="We love how Poolboy Dailymotion is a LGBTQ+ friendly movie since the first episode. We love how ReelShort Will Harrison's ways of [...]"
          />

          <BlogCard
            backgroundImage="/images/Poster 2.png"
            topic="Drama"
            title="FUTURE"
            date="2025-06-05"
            headline="Exploring Tomorrow's Cinematic Landscape"
            description="A deep dive into upcoming releases that promise to reshape our understanding of modern storytelling and visual narrative."
          />

          <BlogCard
            backgroundImage="https://www.reelshort.com/fandom/wp-content/uploads/2025/08/the-tutor-trap-cast.jpg"
            topic="Drama"
            title="FUTURE"
            date="2025-06-05"
            headline="Exploring Tomorrow's Cinematic Landscape"
            description="A deep dive into upcoming releases that promise to reshape our understanding of modern storytelling and visual narrative."
          />
      </div>
    </div>
  );
}
