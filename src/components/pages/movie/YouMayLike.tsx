import React from "react";
import { PosterCard } from "../../common/PosterCard";

const YouMayLike = () => {
  const shows = new Array(12).fill(null);
  return (
    <div>
      <h2 className="mb-4 text-xl font-semibold text-white">You May Like</h2>

      <div className="my-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
        {shows.map((_, i) => (
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
};

export default YouMayLike;
