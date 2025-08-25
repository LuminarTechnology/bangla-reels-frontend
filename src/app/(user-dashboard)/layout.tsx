import ContainerWrapper from "@/src/components/common/ContainerWrapper";
import Navbar from "@/src/components/common/Navbar";
import UserDashboardSidebar from "@/src/components/common/UserDashboardSidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="gradient-background">
      <div>
        <Navbar
          mobileDashboard={<UserDashboardSidebar background="bg-transparent md:hidden block" />}
        />
      </div>
      <ContainerWrapper>
        <div className="flex h-screen gap-5 text-white">
          {/* Sidebar */}
          <UserDashboardSidebar />

          {/* Main Content */}
          <main className="w-full flex-1 space-y-8 overflow-y-auto rounded-2xl bg-[#0B0000] p-6 sm:p-8">
            {children}
          </main>
        </div>
      </ContainerWrapper>
    </div>
  );
}
