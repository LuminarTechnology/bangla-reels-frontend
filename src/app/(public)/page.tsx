import BlogCard from "@/src/components/pages/fandom/BlogCard";
import React from "react";

export default function HomePage() {
  return (
    <div className="grid xl:grid-cols-4 gap-5 my-10">
      {[1, 2, 3, 4].map((_, i) => (
        <BlogCard
          key={i}
          backgroundImage="https://www.reelshort.com/fandom/wp-content/uploads/2025/08/the-tutor-trap-cast.jpg"
          topic="Drama"
          title="FUTURE"
          date="2025-06-05"
          headline="Exploring Tomorrow's Cinematic Landscape"
          description="A deep dive into upcoming releases that promise to reshape our understanding of modern storytelling and visual narrative."
        />
      ))}
    </div>
  );
}
