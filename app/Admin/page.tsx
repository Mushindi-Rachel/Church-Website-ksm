"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import CreateEvent from "./CreateEvent";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Event = {
  id: string;
  event_id: string;
  title: string;
  description: string;
  image_url: string;
};

type Gallery = {
  id: string;
  image_url: string;
};

export default function AdminPage() {
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);
const [uploadedCount, setUploadedCount] = useState(0);
const [eventSuccess, setEventSuccess] = useState(false);
const [eventSuccessMessage, setEventSuccessMessage] = useState("");
const [viewEvent, setViewEvent] = useState<Event | null>(null);
  const [gallery, setGallery] = useState<Gallery[]>([]);
  const [openGallery, setOpenGallery] = useState(false);
const [startIndex, setStartIndex] = useState(0);
  const [editingEvent, setEditingEvent] = useState<any>(null);
  const router = useRouter();
  

  const handleLogout = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    alert(error.message);
    return;
  }

  router.push("/login");
};
  // ---------------- FETCH EVENTS ----------------
 const fetchEvents = async (showSuccess = false) => {
  const { data } = await supabase.from("events").select("*");
  setEvents(data || []);

  if (showSuccess) {
    setEventSuccessMessage("Event added successfully");
    setEventSuccess(true);

    setTimeout(() => {
      setEventSuccess(false);
    }, 2500);
  }
};

  // ---------------- FETCH GALLERY ----------------
  const fetchGallery = async (event_id: string) => {
    const { data } = await supabase
      .from("event_gallery")
      .select("*")
      .eq("event_id", event_id);

    setGallery(data || []);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // ---------------- DELETE EVENT ----------------
const deleteEvent = async () => {
  if (!deleteId) return;

  const { error } = await supabase
    .from("events")
    .delete()
    .eq("id", deleteId);

  if (error) {
    console.error(error);
    alert(error.message);
    return;
  }

  setDeleteId(null);
  fetchEvents();
};

  // ---------------- EDIT EVENT ----------------
  const updateEvent = async (event: Event) => {
    const title = prompt("New title", event.title);
    if (!title) return;

    await supabase
      .from("events")
      .update({ title })
      .eq("id", event.id);

    fetchEvents();
  };

  // ---------------- SUPABASE IMAGES UPLOAD ----------------
const uploadImage = async (eventId: string, file: File) => {
  const bucket = "gallery";

  const fileName = `${eventId}/${Date.now()}-${file.name}`;

  // Upload to storage
  const { error: uploadError } = await supabase.storage
    .from(bucket)
    .upload(fileName, file);

  if (uploadError) {
    alert("Upload failed: " + uploadError.message);
    return;
  }

  // Get public URL
  const { data } = supabase.storage
    .from(bucket)
    .getPublicUrl(fileName);

  const imageUrl = data.publicUrl;

  // Insert into DB 
  const { error: insertError } = await supabase
    .from("event_gallery")
    .insert([
      {
        event_id: eventId,
        image_url: imageUrl,
      },
    ]);

  if (insertError) {
    console.error(insertError);
    alert("DB insert failed: " + insertError.message);
    return;
  }

  fetchGallery(eventId);
};

  // redirect to login page
useEffect(() => {
  const checkUser = async () => {
    const { data } = await supabase.auth.getUser();

    if (!data.user) {
      router.push("/login");
    }
  };

  checkUser();
  fetchEvents();
}, []);

  return (
  <>
  <div className="flex justify-between items-center mb-4">
  <h1 className="text-2xl font-bold">Admin Dashboard</h1>

  <button
    onClick={handleLogout}
    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
  >
    🚪 Logout
  </button>
</div>

    <div className="grid grid-cols-3 gap-6 p-6">

      {/* ---------------- CREATE EVENT ---------------- */}
      <CreateEvent onCreated={() => fetchEvents(true)} />

      {/* ---------------- EVENTS LIST ---------------- */}
      <div>
        <h2 className="font-bold text-xl mb-3">Events</h2>

        {events.map((event) => (
          <div key={event.id} className="border p-4 mb-3 rounded shadow-sm bg-white">
            <h3 className="font-bold text-lg mb-2">{event.title}</h3>

            <div className="flex flex-wrap gap-2">

              {/* 📸 Gallery */}
              <button
                onClick={() => {
                  setSelectedEvent(event);
                  fetchGallery(event.event_id);
                }}
                className="bg-pink-700 text-white px-3 py-1 rounded text-sm"
              >
                📸 Gallery
              </button>

              {/* ✏️ Edit */}
              <button
                onClick={() => setEditingEvent(event)}
                className="bg-green-600 text-white px-3 py-1 rounded text-sm"
              >
                ✏️ Edit
              </button>

              {/* 👁 View */}
              <button
                onClick={() => setViewEvent(event)}
                className="bg-teal-600 text-white px-3 py-1 rounded text-sm"
              >
                👁 View
              </button>

              {/* 🗑 Delete */}
              <button
  onClick={() => setDeleteId(event.id)}
  className="bg-red-600 text-white px-3 py-1 rounded text-sm"
>
  🗑 Delete
</button>
            </div>

           <input
  type="file"
  multiple
  accept="image/*"
  onChange={async (e) => {
    const files = e.target.files;

    if (!files || files.length === 0) return;

    let successCount = 0;

for (let i = 0; i < files.length; i++) {
  try {
    await uploadImage(event.event_id, files[i]);
    successCount++;
  } catch (err) {
    console.error(err);
  }
}

fetchGallery(event.event_id);

// show popup
setUploadedCount(successCount);
setUploadSuccess(true);

// auto close after 2.5s
setTimeout(() => {
  setUploadSuccess(false);
}, 2500);
  }}
/>
          </div>
        ))}
      </div>

      {/* ---------------- GALLERY ---------------- */}
<div>
  <h2 className="font-bold text-xl mb-3">Gallery</h2>

  {selectedEvent ? (
    <>
      <h3 className="font-semibold mb-2">
        {selectedEvent.title}
      </h3>

      {/* IMAGE CARD */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">

        {/* 2x2 GRID PREVIEW */}
        <div className="grid grid-cols-2 gap-1 p-2 bg-gray-50">
          {gallery.length > 0 ? (
            gallery.slice(0, 4).map((img) => (
              <div
                key={img.id}
                className="relative h-28 overflow-hidden rounded-md"
              >
                <img
                  src={img.image_url}
                  className="w-full h-full object-cover"
                />

              </div>
            ))
          ) : (
            <p className="text-sm text-gray-500 col-span-2 text-center py-6">
              No images yet
            </p>
          )}
        </div>

        {/* VIEW BUTTON */}
        {gallery.length > 0 && (
          <div className="flex justify-center pb-3 -mt-2">
            <button
              onClick={() => router.push(`/gallery/${selectedEvent.event_id}`)}
              className="bg-black text-white px-6 py-2 rounded-full shadow-lg
                         hover:scale-105 transition-transform"
            >
              View Gallery →
            </button>
          </div>
        )}
      </div>
    </>
  ) : (
    <p className="text-gray-500">
      Select an event to manage gallery
    </p>
  )}
</div>
</div>

 {/* ✅ MODALS*/}
{uploadSuccess && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md">

    <div className="bg-white/10 border border-white/20 backdrop-blur-xl text-white rounded-2xl p-6 w-full max-w-sm text-center shadow-2xl animate-pulse">

      {/* Icon */}
      <div className="text-4xl mb-2">📸</div>

      {/* Title */}
      <h2 className="text-xl font-bold mb-2">
        Upload Complete
      </h2>

      {/* Message */}
      <p className="text-sm text-gray-200">
        {uploadedCount} image{uploadedCount !== 1 ? "s" : ""} uploaded successfully
      </p>

      {/* Loader bar */}
      <div className="mt-4 h-1 w-full bg-white/20 rounded overflow-hidden">
        <div className="h-full bg-green-400 animate-pulse w-full"></div>
      </div>

    </div>
  </div>
)}

{deleteId && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md">
    
    <div className="bg-white/10 border border-white/20 backdrop-blur-2xl rounded-2xl p-6 text-white w-full max-w-md shadow-2xl">

      <h2 className="text-lg font-bold mb-2">
        Delete Event
      </h2>

      <p className="text-sm text-gray-200 mb-5">
        Are you sure you want to delete this event? This action cannot be undone.
      </p>

      <div className="flex gap-3">
        <button
          onClick={deleteEvent}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded w-full"
        >
          Yes, Delete
        </button>

        <button
          onClick={() => setDeleteId(null)}
          className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded w-full"
        >
          Cancel
        </button>
      </div>

    </div>
  </div>
)}

    {editingEvent && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded w-full max-w-md">

      {/* IMAGE PREVIEW (added for consistency with view modal) */}
      {editingEvent.image_url && (
        <div className="relative w-full h-40 mb-3 rounded overflow-hidden group">
  <img
    src={editingEvent.image_url}
    className="w-full h-full object-cover transition group-hover:scale-105"
  />

  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-center justify-center">
    <span className="text-white text-sm opacity-0 group-hover:opacity-100">
      Change Image
    </span>
  </div>
</div>
        
      )}
       <input
        type="file"
        accept="image/*"
        className="border p-2 w-full mb-3"
        onChange={async (e) => {
  const file = e.target.files?.[0];
  if (!file) return;

  const fileName = `events/${editingEvent.id}-${Date.now()}`;

  // ✅ upload to correct bucket
  const { error: uploadError } = await supabase.storage
    .from("Gallery")
    .upload(fileName, file, { upsert: true });

  if (uploadError) {
    alert(uploadError.message);
    return;
  }

  // ✅ get public URL
  const { data } = supabase.storage
    .from("Gallery")
    .getPublicUrl(fileName);

  const newUrl = `${data.publicUrl}?t=${Date.now()}`;

  // ✅ update DB (THIS WAS MISSING)
  const { error: updateError } = await supabase
    .from("events")
    .update({ image_url: newUrl })
    .eq("id", editingEvent.id);

  if (updateError) {
    alert(updateError.message);
    return;
  }

  // ✅ update UI instantly
  setEditingEvent({
    ...editingEvent,
    image_url: newUrl,
  });

  setEvents((prev) =>
    prev.map((e) =>
      e.id === editingEvent.id ? { ...e, image_url: newUrl } : e
    )
  );
}}
      />
      


      <h2 className="text-xl font-bold mb-4">Edit Event</h2>

      <input
        value={editingEvent.title}
        onChange={(e) =>
          setEditingEvent({ ...editingEvent, title: e.target.value })
        }
        className="border p-2 w-full mb-2"
      />

      <textarea
        value={editingEvent.description}
        onChange={(e) =>
          setEditingEvent({ ...editingEvent, description: e.target.value })
        }
        className="border p-2 w-full mb-2"
      />

      <input
        type="date"
        value={editingEvent.start_date || ""}
        onChange={(e) =>
          setEditingEvent({ ...editingEvent, start_date: e.target.value })
        }
        className="border p-2 w-full mb-2"
      />

      <input
        type="date"
        value={editingEvent.end_date || ""}
        onChange={(e) =>
          setEditingEvent({ ...editingEvent, end_date: e.target.value })
        }
        className="border p-2 w-full mb-2"
      />

      <input
        value={editingEvent.time || ""}
        onChange={(e) =>
          setEditingEvent({ ...editingEvent, time: e.target.value })
        }
        className="border p-2 w-full mb-2"
        placeholder="Time"
      />

      <input
        value={editingEvent.location}
        onChange={(e) =>
          setEditingEvent({ ...editingEvent, location: e.target.value })
        }
        className="border p-2 w-full mb-2"
      />

      <input
        value={editingEvent.registration_link || ""}
        onChange={(e) =>
          setEditingEvent({
            ...editingEvent,
            registration_link: e.target.value,
          })
        }
        className="border p-2 w-full mb-2"
        placeholder="Registration Link"
      />

      <div className="flex gap-2 mt-3">

        <button
          onClick={async () => {
            const { error } = await supabase
              .from("events")
              .update(editingEvent)
              .eq("id", editingEvent.id);

            if (error) {
              alert(error.message);
              return;
            }

            setEventSuccessMessage("Event updated successfully");
            setEventSuccess(true);

            setTimeout(() => {
              setEventSuccess(false);
            }, 2500);

            setEditingEvent(null);
            fetchEvents();
          }}
          className="bg-green-600 text-white px-4 py-2 w-full rounded"
        >
          Save
        </button>

        <button
          onClick={() => setEditingEvent(null)}
          className="bg-gray-400 text-white px-4 py-2 w-full rounded"
        >
          Cancel
        </button>

      </div>
    </div>
  </div>
)}

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


{viewEvent && (
  <div
    className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50"
    onClick={() => setViewEvent(null)}
  >
    <div
      className="bg-white rounded-2xl shadow-2xl w-[90%] md:w-[700px] overflow-hidden"
      onClick={(e) => e.stopPropagation()}
    >

      {/* IMAGE */}
      <div className="relative w-full h-[250px] bg-gray-100">
        <img src={viewEvent.image_url}
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="p-5 space-y-3">

        <h2 className="text-2xl font-bold">{viewEvent.title}</h2>

        <p className="text-gray-600">
          {viewEvent.description || "No description provided"}
        </p>

        <div className="text-sm text-gray-700 space-y-1">
          <p><b>📅 Dates:</b> {viewEvent.start_date} → {viewEvent.end_date}</p>
          <p><b>⏰ Time:</b> {viewEvent.time}</p>
          <p><b>📍 Location:</b> {viewEvent.location}</p>
        </div>

        {/* BUTTONS */}
        <div className="flex gap-3 pt-3">

          {viewEvent.registration_link && (
            <a
              href={viewEvent.registration_link}
              target="_blank"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full text-center"
            >
              Register
            </a>
          )}

          <button
            onClick={() => setViewEvent(null)}
            className="bg-gray-200 px-4 py-2 rounded-lg w-full"
          >
            Close
          </button>

        </div>

      </div>
    </div>
  </div>
)}


    {openGallery && (
  <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">

    <button
      onClick={() => setOpenGallery(false)}
      className="absolute top-4 right-4 text-white text-2xl"
    >
      ✕
    </button>

    <Swiper
      initialSlide={startIndex}
      spaceBetween={10}
      navigation
      pagination={{ clickable: true }}
      className="w-full h-full"
    >
      {gallery.map((img) => (
        <SwiperSlide key={img.id}>
          <div className="flex flex-col items-center justify-center h-screen">

            <img
              src={img.image_url}
              className="max-h-[80vh] object-contain"
            />

            {/* Download */}
            <a
              href={img.image_url}
              download
              target="_blank"
              className="mt-4 bg-white text-black px-4 py-2 rounded"
            >
              ⬇ Download
            </a>

          </div>
        </SwiperSlide>
      ))}
    </Swiper>

  </div>
)}
  </>
);
}

