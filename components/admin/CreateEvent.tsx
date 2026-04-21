"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function CreateEvent() {
  const router = useRouter();
  const [eventSuccess, setEventSuccess] = useState(false);
    const [eventSuccessMessage, setEventSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    title: "",
    description: "",
    location: "",
    time: "",
    start_date: "",
    end_date: "",
    registration_link: "",
    image: null as File | null,
  });

  // ---------------- CREATE EVENT ----------------
  const handleCreate = async () => {
    if (!form.title) return alert("Title is required");

    setLoading(true);

    try {
      let image_url = "";

      // 1. Upload image if exists
      if (form.image) {
        const fileName = `events/${Date.now()}-${form.image.name}`;

        const { error: uploadError } = await supabase.storage
          .from("Gallery")
          .upload(fileName, form.image);

        if (uploadError) throw uploadError;

        const { data } = supabase.storage
          .from("Gallery")
          .getPublicUrl(fileName);

        image_url = data.publicUrl;
      }

      // 2. Insert event
      const { error } = await supabase.from("events").insert([
        {
          title: form.title,
          description: form.description,
          location: form.location,
          time: form.time,
          start_date: form.start_date,
          end_date: form.end_date,
          registration_link: form.registration_link,
          image_url,
          event_id: crypto.randomUUID(),
        },
      ]);

      if (error) throw error;

      // reset form
      setForm({
        title: "",
        description: "",
        location: "",
        time: "",
        start_date: "",
        end_date: "",
        registration_link: "",
        image: null,
      });

      router.refresh();// refresh parent
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <div className="bg-white p-4 rounded shadow space-y-3">

      <h2 className="text-lg font-bold">Create Event</h2>

      {/* TITLE */}
      <input
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        className="border p-2 w-full"
      />

      {/* DESCRIPTION */}
      <textarea
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        className="border p-2 w-full"
      />

      {/* LOCATION */}
      <input
        placeholder="Location"
        value={form.location}
        onChange={(e) => setForm({ ...form, location: e.target.value })}
        className="border p-2 w-full"
      />

      {/* TIME */}
      <input
        placeholder="Time"
        value={form.time}
        onChange={(e) => setForm({ ...form, time: e.target.value })}
        className="border p-2 w-full"
      />

      {/* DATES */}
      <div className="flex gap-2">
        <input
          type="date"
          value={form.start_date}
          onChange={(e) =>
            setForm({ ...form, start_date: e.target.value })
          }
          className="border p-2 w-full"
        />

        <input
          type="date"
          value={form.end_date}
          onChange={(e) =>
            setForm({ ...form, end_date: e.target.value })
          }
          className="border p-2 w-full"
        />
      </div>

      {/* REGISTRATION */}
      <input
        placeholder="Registration link"
        value={form.registration_link}
        onChange={(e) =>
          setForm({ ...form, registration_link: e.target.value })
        }
        className="border p-2 w-full"
      />

      {/* IMAGE */}
      <input
        type="file"
        accept="image/*"
        onChange={(e) =>
          setForm({ ...form, image: e.target.files?.[0] || null })
        }
        className="border p-2 w-full"
      />

      {/* BUTTON */}
      <button
        onClick={handleCreate}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded w-full"
      >
        {loading ? "Creating..." : "Create Event"}
      </button>
    </div>
  
  {eventSuccess && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md">

    <div className="bg-white/10 border border-white/20 backdrop-blur-xl text-white rounded-2xl p-6 w-full max-w-sm text-center shadow-2xl">

      {/* Icon */}
      <div className="text-4xl mb-2">
        {eventSuccessMessage.includes("added") ? "🎉" : "✏️"}
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold mb-2">
        Success
      </h2>

      {/* Message */}
      <p className="text-sm text-gray-200">
        {eventSuccessMessage}
      </p>

      {/* Progress bar */}
      <div className="mt-4 h-1 w-full bg-white/20 rounded overflow-hidden">
        <div className="h-full bg-green-400 w-full animate-pulse"></div>
      </div>

    </div>
  </div>
)}
</>
  )}
