"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

const generateEventId = (title: string) =>
  title.toLowerCase().replace(/[^a-z0-9 ]/g, "").replace(/\s+/g, "-");

export default function CreateEvent({ onCreated }: any) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    start_date: "",
    end_date: "",
    time: "",
    location: "",
    registration_link: "",
  });

  const handleChange = (e: any) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async () => {
    const { error } = await supabase.from("events").insert([
      {
        event_id: generateEventId(form.title),
        ...form,
      },
    ]);

    if (error) return alert(error.message);

    alert("Event created");
    onCreated?.();
  };

  return (
    <div className="p-4 border rounded">
      <h2 className="font-bold mb-2">Create Event</h2>

      {Object.keys(form).map((key) => (
        <input
          key={key}
          name={key}
          placeholder={key}
          value={(form as any)[key]}
          onChange={handleChange}
          className="border p-2 w-full mb-2"
        />
      ))}

      <button onClick={submit} className="bg-blue-600 text-white px-4 py-2 w-full">
        Create
      </button>
    </div>
  );
}