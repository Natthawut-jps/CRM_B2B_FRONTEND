"use client"
import { useState } from "react";
import { AppSidebar } from "@/app/(components)/app-sidebar/app-sidebar";
import { TopBar } from "@/app/(components)/top-bar";

export function LayoutClient({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <TopBar onSidebarToggle={() => setSidebarOpen((prev) => !prev)} />
      <div className="max-w-7xl mx-auto w-full px-3 sm:px-4">
        <div className="relative flex w-full gap-3 sm:gap-5 border border-border rounded-sm overflow-visible">
          <div className="shrink-0 relative">
            <AppSidebar open={sidebarOpen} setOpen={setSidebarOpen} />
          </div>
          <main className="flex-1 min-w-0 border-l border-border">
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
