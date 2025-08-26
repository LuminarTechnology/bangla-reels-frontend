import { PosterCard } from "@/src/components/common/PosterCard";
import ReusableBreadcrumb from "@/src/components/common/ReusableBreadcrumb";
import FilterCategoryButtons from "@/src/components/pages/categories/FilterCategoryButtons";

export default async function CategoriesPage() {
  return (
    <div className="p-6">
      <ReusableBreadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Categories", href: "/categories" },
        ]}
      />
      <FilterCategoryButtons />

      <div className="mt-6 space-y-4">
        <p className="text-[#B3B1B0]">Total 61 Videos</p>

        {/* <div className="mx-auto grid items-center justify-center gap-5 xl:grid-cols-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((_, i) => (
            <PosterCard
              key={i}
              title="The Life List"
              link="movie"
              posterImage="https://www.reelshort.com/fandom/wp-content/uploads/2025/08/the-tutor-trap-cast.jpg"
              category="TV SERIES"
            />
          ))}
        </div> */}
        <div className="mx-auto grid grid-cols-2 items-center justify-center gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((_, i) => (
            <PosterCard
              key={i}
              title="The Life List"
              link="movie"
              posterImage="https://www.reelshort.com/fandom/wp-content/uploads/2025/08/the-tutor-trap-cast.jpg"
              category="TV SERIES"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
