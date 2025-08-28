import EpisodeTable from "@/src/components/pages/super-admin/episode-list/EpisodeTable";

export default async function EpisodeListPage() {
  return (
    <div className="rounded-2xl bg-[#F3F4F6] p-2 md:px-9 md:py-6">
      <EpisodeTable />
    </div>
  );
}
