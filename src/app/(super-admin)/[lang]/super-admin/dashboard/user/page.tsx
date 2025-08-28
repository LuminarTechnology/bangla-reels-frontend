import { UsersTable } from "@/src/components/pages/super-admin/user/UsersTable";

export default async function UserTablePage() {
  return (
    <div className="rounded-2xl bg-[#F3F4F6] p-2 md:px-9 md:py-6">
      <UsersTable />
    </div>
  );
}
