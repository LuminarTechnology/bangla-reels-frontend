import FilmTable from "../../../../../components/pages/super-admin/film-list/FilmTable";

export default async function FilmListPage() {
  return (
    <div className="bg-[#F3F4F6] rounded-2xl p-2 md:px-9 md:py-6">
      <FilmTable />
    </div>
  );
}
