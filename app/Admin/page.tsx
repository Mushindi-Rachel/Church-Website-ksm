"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AdminDashboard() {
  const router = useRouter();
  const [eventCount, setEventCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      const { count, error } = await supabase
        .from("events")
        .select("*", { count: "exact", head: true });

      if (!error) {
        setEventCount(count || 0);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div className="bg-white border rounded-xl p-6 shadow-sm">
        <h1 className="text-2xl font-semibold text-gray-800">
          Dashboard
        </h1>
        <p className="text-sm text-gray-500">
          Overview of your admin activity
        </p>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* EVENTS COUNT */}
        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <h2 className="text-sm text-gray-500 mb-2">Total Events</h2>
          <p className="text-3xl font-bold text-gray-800">
            {eventCount !== null ? eventCount : "..."}
          </p>
        </div>

        {/* MANAGE EVENTS */}
        <div
          onClick={() => router.push("/Admin/events")}
          className="bg-white border rounded-xl p-6 shadow-sm cursor-pointer hover:shadow-md transition"
        >
          <h2 className="text-lg font-semibold text-gray-800 mb-1">
            📅 Manage Events
          </h2>
          <p className="text-sm text-gray-500">
            View, edit and organize events
          </p>
        </div>

      </div>

    </div>
  );
}