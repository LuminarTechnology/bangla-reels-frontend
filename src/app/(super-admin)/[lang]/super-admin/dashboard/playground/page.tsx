import { clerkClient } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { SearchUsers } from "../../SearchUsers";
import { hasRole } from "@/src/utils/roles";
import { removeRole, setRole } from "@/src/app/actions/clerk-role-manage";

export default async function AdminDashboard(params: {
  searchParams: Promise<{ search?: string }>;
}) {
  if (!hasRole("superAdmin")) {
    redirect("/sign-in");
  }

  const query = (await params.searchParams).search;

  const client = await clerkClient();

  const users = query ? (await client.users.getUserList({ query })).data : [];

  return (
    <>
      <p>This is the protected admin dashboard restricted to users with the `admin` role.</p>

      <SearchUsers />

      {users.map((user) => {
        return (
          <div key={user.id}>
            <div>
              {user.firstName} {user.lastName}
            </div>

            <div>
              {
                user.emailAddresses.find((email) => email.id === user.primaryEmailAddressId)
                  ?.emailAddress
              }
            </div>

            <div>{user.publicMetadata.role as string}</div>

            <form action={setRole}>
              <input type="hidden" value={user.id} name="id" />
              <input type="hidden" value="super-admin" name="role" />
              <button type="submit">Make Super Admin</button>
            </form>

            <form action={setRole}>
              <input type="hidden" value={user.id} name="id" />
              <input type="hidden" value="contestant" name="role" />
              <button type="submit">Make Contestant</button>
            </form>

            <form action={removeRole}>
              <input type="hidden" value={user.id} name="id" />
              <button type="submit">Remove Role</button>
            </form>
          </div>
        );
      })}
    </>
  );
}
