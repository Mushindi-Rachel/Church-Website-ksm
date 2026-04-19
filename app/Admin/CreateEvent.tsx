"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

const generateEventId = (title: string) => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/\s+/g, "-");
};

export default function CreateEvent({ onCreated }: any) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    time: "",
    location: "",
    registrationLink: "",
    image: "",
  });

  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ NEW: Upload to Supabase
  const uploadImage = async () => {
    if (!file) {
      alert("Please select an image first");
      return;
    }

    const event_id = generateEventId(form.title);
    const fileName = `${event_id}/${Date.now()}-${file.name}`;

    const { error: uploadError } = await supabase.storage
      .from("Gallery") 
      .upload(fileName, file);

    if (uploadError) {
      console.error(uploadError);
      alert("Upload failed");
      return;
    }

    const { data } = supabase.storage
      .from("Gallery")
      .getPublicUrl(fileName);

    setForm({ ...form, image: data.publicUrl });
  };

  const createEvent = async () => {
  setLoading(true);

  const event_id = generateEventId(form.title);

  let imageUrl = "";

  // ✅ Upload image automatically if file exists
  if (file) {
    const fileName = `${event_id}/${Date.now()}-${file.name}`;

    const { error: uploadError } = await supabase.storage
      .from("Gallery")
      .upload(fileName, file);

    if (uploadError) {
      alert("Image upload failed");
      setLoading(false);
      return;
    }

    const { data } = supabase.storage
      .from("Gallery")
      .getPublicUrl(fileName);

    imageUrl = data.publicUrl;
  }

  const { error } = await supabase.from("events").insert([
    {
      event_id,
      title: form.title,
      description: form.description,
      start_date: form.startDate,
      end_date: form.endDate,
      time: form.time,
      location: form.location,
      registration_link: form.registrationLink,
      image_url: imageUrl, 
    },
  ]);

  setLoading(false);

  if (error) {
    alert(error.message);
    return;
  }

  alert("Event created successfully 🎉");

  setForm({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    time: "",
    location: "",
    registrationLink: "",
    image: "",
  });

  setFile(null);

  onCreated?.();
};

  return (
    <div className="p-4 border rounded-xl bg-white shadow mb-6">
      <h2 className="text-xl font-bold mb-4">➕ Create Event</h2>

      <input name="title" placeholder="Title" value={form.title} onChange={handleChange} className="border p-2 w-full mb-2" />

      <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} className="border p-2 w-full mb-2" />

      <input name="startDate" type="date" value={form.startDate} onChange={handleChange} className="border p-2 w-full mb-2" />

      <input name="endDate" type="date" value={form.endDate} onChange={handleChange} className="border p-2 w-full mb-2" />

      <input name="time" placeholder="Time" value={form.time} onChange={handleChange} className="border p-2 w-full mb-2" />

      <input name="location" placeholder="Location" value={form.location} onChange={handleChange} className="border p-2 w-full mb-2" />

      <input name="registrationLink" placeholder="Registration Link" value={form.registrationLink} onChange={handleChange} className="border p-2 w-full mb-2" />

      {/* ✅ FILE INPUT */}
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="border p-2 w-full mb-2"
      />

      {/* ✅ PREVIEW */}
      {file && (
  <img
    src={URL.createObjectURL(file)}
    className="w-full h-40 object-cover mb-2 rounded"
  />
)}

      <button
        onClick={createEvent}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 w-full rounded"
      >
        {loading ? "Creating..." : "Create Event"}
      </button>
    </div>
  );
}