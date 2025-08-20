"use client";
import { useRouter } from "next/navigation";

export default function SuperAdminPage() {
  const router = useRouter();

  router.push("/super-admin/login");
}
