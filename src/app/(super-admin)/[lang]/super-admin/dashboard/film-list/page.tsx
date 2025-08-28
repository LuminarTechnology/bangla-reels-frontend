import FilmTable from "@/src/components/pages/super-admin/film-list/FilmTable";

export default async function FilmListPage() {
  return (
    <div className="rounded-2xl bg-[#F3F4F6] p-2 md:px-9 md:py-6">
      <FilmTable />
    </div>
  );
}
