import React from "react";
import { StreamingCard } from "../../common/StreamingCard";

const NewRelease = () => {
  return (
    <div className="my-10">
      <h2 className="text-2xl font-bold text-white">New Releases</h2>
      <div className="my-10 grid items-center justify-between gap-5 xl:grid-cols-3">
        {[1, 2, 3].map((_, i) => (
          <StreamingCard
            key={i}
            title="Stranger Things"
            description="Stranger Things takes you to Hawkins, a small town where the strange is normal and secrets run deep. When a young boy goes missing, his friends uncover a hidden world known as the Upside Down. Along the way, they discover that friendship is the real superpower against the darkness. As minds bend and monsters rise, ordinary kids become unexpected heroes."
            genres={["Action", "Horror"]}
            type="TV SERIES"
            imageUrl="/images/new-release-1.jpg"
          />
        ))}
      </div>
    </div>
  );
};

export default NewRelease;
