"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  return (
    <div className="flex min-h-screen">

      {/* SIDEBAR */}
      <aside className="w-64 bg-black text-white p-5 flex flex-col">

  {/* TOP */}
  <div>
    <h1 className="text-xl font-bold mb-8 mt-10">Admin</h1>

    <nav className="flex flex-col gap-4 mt-10">
        <Link href="/Admin" className="hover:text-gray-300">
        🏠 Dashboard
      </Link>

      <Link href="/Admin/events" className="hover:text-gray-300">
        📅 Events
      </Link>

      <Link href="/Admin/events/CreateEvent" className="hover:text-gray-300">
        ➕ Create Event
      </Link>
    </nav>
  </div>

  {/* BOTTOM */}
  <button
    onClick={handleLogout}
    className="mt-20 bg-red-600 px-3 py-2 rounded w-full"
  >
    Logout
  </button>

</aside>

      {/* CONTENT */}
      <main className="flex-1 bg-gray-100 p-6">
        {children}
      </main>
    </div>
  );
}