import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AppSidebar } from "@/app/(components)/app-sidebar/app-sidebar";
import { TopBar } from "@/app/(components)/top-bar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CRM_B2B",
  description: "System Manage CRM for B2B.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TopBar />
        <div className="max-w-7xl mx-auto flex gap-x-5.5  border border-[#737373] rounded-sm w-full">
            <AppSidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
