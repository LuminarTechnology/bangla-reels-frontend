import { CategoriesTable } from "@/src/components/pages/super-admin/category/CategoriesTable";

export default async function CategoriesPage() {
  return (
    <div className="rounded-2xl bg-[#F3F4F6] p-2 md:px-9 md:py-6">
      <CategoriesTable />
    </div>
  );
}
