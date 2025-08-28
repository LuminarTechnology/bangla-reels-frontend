import { UsersTable } from "../../../../../components/pages/super-admin/user/UsersTable";

export default async function UserTablePage() {
  return (
    <div className="bg-[#F3F4F6] rounded-2xl p-2 md:px-9 md:py-6">
        <UsersTable/>
    </div>
  );
}