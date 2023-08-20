import Navbar from "@/components/admin/Navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface LayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main className={`p-4 ${inter.className}`}>{children}</main>
    </>
  );
}
