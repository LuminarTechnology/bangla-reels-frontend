import UserDashboardSidebar from "@/src/components/common/UserDashboardSidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex my-10 gap-6 text-white">
      {/* Sidebar */}
      <UserDashboardSidebar />

      {/* Main Content */}
      <main className="flex-1 rounded-2xl bg-[#0B0000] p-6">
        {children}
      </main>
    </div>
  );
}
