'use client'
import { useState } from 'react';
import { AlignJustify } from 'lucide-react';
import UserDashboardSidebar from "@/src/components/common/UserDashboardSidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-[calc(100vh-50px)] gap-5 text-white">
      <button
        className="lg:hidden fixed top-4 left-4 z-10 p-2 bg-[#0B0000] rounded-md"
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
      >
        <AlignJustify className='size-4' />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed lg:static top-0 -left-20 transform transition-transform duration-300 ease-in-out z-30
          ${isSidebarOpen ? 'translate-x-20' : '-translate-x-full'} lg:translate-x-0`}
      >
        <UserDashboardSidebar toggleSidebar={toggleSidebar} />
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 bg-opacity-50 z-20 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Main Content */}
      <main className="w-full flex-1 space-y-8 overflow-y-auto rounded-2xl bg-[#0B0000] p-6 sm:p-8 mt-14 sm:mt-0">
        {children}
      </main>
    </div>
  );
}
