import ContainerWrapper from "@/src/components/common/ContainerWrapper";
import { PosterCard } from "@/src/components/common/PosterCard";
import BlogCard from "@/src/components/pages/fandom/BlogCard";
import Banner from "@/src/components/pages/home/banner";
import React from "react";

export default function HomePage() {
  return (
    <div>
      <Banner />
      <div className="grid xl:grid-cols-4 gap-5 my-10 items-center justify-between">
        {[1, 2, 3, 4].map((_, i) => (
          <BlogCard
            key={i}
            backgroundImage="https://www.reelshort.com/fandom/wp-content/uploads/2025/08/the-tutor-trap-cast.jpg"
            topic="Movie Cast List"
            title="FUTURE"
            date="2025-06-05"
            headline="Exploring Tomorrow's Cinematic Landscape"
            description="A deep dive into upcoming releases that promise to reshape our understanding of modern storytelling and visual narrative."
          />
        ))}
      </div>

      <div className="grid xl:grid-cols-6 gap-5 my-10 items-center mx-auto justify-center">
        {[1, 2, 3, 4, 5, 6].map((_, i) => (
          <PosterCard
            key={i}
            title="The Life List"
            posterImage="https://www.reelshort.com/fandom/wp-content/uploads/2025/08/the-tutor-trap-cast.jpg"
            category="TV SERIES"
          />
        ))}
      </div>
    </div>
  );
}
