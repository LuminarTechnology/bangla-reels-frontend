"use server";
import { Roles } from "@/src/types/globals";
import { hasRole } from "@/src/utils/roles";
import { clerkClient } from "@clerk/nextjs/server";

export async function setRole(formData: FormData) {
  const client = await clerkClient();

  // Check that the user trying to set the role is an admin
  if (!hasRole("superAdmin")) {
    return { message: "Not Authorized" };
  }

  // set new role
  try {
    const res = await client.users.updateUserMetadata(formData.get("id") as string, {
      publicMetadata: { roles: [formData.get("role")] },
    });
    return { message: res.publicMetadata };
  } catch (err) {
    return { message: err };
  }
}

export async function removeRole(formData: FormData) {
  const client = await clerkClient();

  const user = await client.users.getUser(formData.get("id") as string);

  // assert that roles is Roles[]
  const roles = (user.publicMetadata.roles as Roles[] | undefined) || [];

  const updatedRoles = roles.filter((r) => r !== "superAdmin");
  // remove role
  try {
    const res = await client.users.updateUserMetadata(formData.get("id") as string, {
      publicMetadata: { roles: updatedRoles },
    });
    return { message: res.publicMetadata };
  } catch (err) {
    return { message: err };
  }
}
