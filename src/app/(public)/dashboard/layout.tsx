import UserDashboardSidebar from "@/src/components/common/UserDashboardSidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-[calc(100vh-50px)] gap-5 text-white">
      {/* Sidebar */}
      <UserDashboardSidebar />

      {/* Main Content */}
      <main className="w-full flex-1 space-y-8 overflow-y-auto rounded-xl bg-[#111] p-6 sm:p-8">
        {children}
      </main>
    </div>
  );
}
