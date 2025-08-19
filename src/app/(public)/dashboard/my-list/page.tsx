import { PosterCard } from "@/src/components/common/PosterCard";

export default function MyListPage() {
  const shows = new Array(12).fill(null);
  return (
    <div className="">
      <h1 className="mb-6 text-2xl font-bold">My List</h1>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
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
}
