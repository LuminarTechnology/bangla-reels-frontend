import { PosterCard } from "@/src/components/common/PosterCard";
import FilterCategoryButtons from "@/src/components/pages/categories/FilterCategoryButtons";



export default async function CategoriesPage() {
  return (
    <div className="p-6">
      <FilterCategoryButtons />

      <div className="space-y-4 mt-6">
        <p className="text-[#B3B1B0]">Total 61 Videos</p>

     <div className="grid xl:grid-cols-6 gap-5  items-center mx-auto justify-center">
             {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((_, i) => (
               <PosterCard
                 key={i}
                 title="The Life List"
                 posterImage="https://www.reelshort.com/fandom/wp-content/uploads/2025/08/the-tutor-trap-cast.jpg"
                 category="TV SERIES"
               />
             ))}
           </div>
      </div>
    </div>
  );
}