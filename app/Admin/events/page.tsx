"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Event = {
  id: string;
  event_id: string;
  title: string;
  description: string;
  image_url: string;
  start_date?: string;
  end_date?: string;
  time?: string;
  location?: string;
  registration_link?: string;
};

type Gallery = {
  id: string;
  image_url: string;
};

export default function EventsPage() {
  const router = useRouter();

  // ---------------- STATE ----------------
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [viewEvent, setViewEvent] = useState<Event | null>(null);
  const [editingEvent, setEditingEvent] = useState<any>(null);
  const [gallery, setGallery] = useState<Gallery[]>([]);
  const [eventSuccess, setEventSuccess] = useState(false);
  const [eventSuccessMessage, setEventSuccessMessage] = useState("");
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [uploadedCount, setUploadedCount] = useState(0);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  // ---------------- FETCH EVENTS ----------------
  const fetchEvents = async (showSuccess = false) => {
    const { data } = await supabase.from("events").select("*");
    setEvents(data || []);

    if (showSuccess) {
      setEventSuccessMessage("Event added successfully");
      setEventSuccess(true);
      setTimeout(() => setEventSuccess(false), 2500);
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

  // ---------------- UPLOAD IMAGE ----------------
  const uploadImage = async (eventId: string, file: File) => {
    const fileName = `${eventId}/${Date.now()}-${file.name}`;

    const { error } = await supabase.storage
      .from("Gallery")
      .upload(fileName, file);

    if (error) return alert(error.message);

    const { data } = supabase.storage
      .from("Gallery")
      .getPublicUrl(fileName);

    await supabase.from("event_gallery").insert([
      {
        event_id: eventId,
        image_url: data.publicUrl,
      },
    ]);

    fetchGallery(eventId);
  };

  // ---------------- DELETE EVENT ----------------
  const deleteEvent = async () => {
    if (!deleteId) return;

    const { error } = await supabase
      .from("events")
      .delete()
      .eq("id", deleteId);

    if (error) return alert(error.message);

    setDeleteId(null);
    fetchEvents();
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Events</h1>
      </div>

      {/* ---------------- EVENTS LIST ---------------- */}
      <div>
        <h2 className="font-bold text-xl mb-3">Events</h2>

        {events.map((event) => (
          <div key={event.id} className="border p-4 mb-3 rounded shadow-sm bg-white">
            <h3 className="font-bold text-lg mb-2">{event.title}</h3>

            <div className="flex flex-wrap gap-2">

              <button
                onClick={() => {
                  setSelectedEvent(event);
                  fetchGallery(event.event_id);
                }}
                className="bg-pink-700 text-white px-3 py-1 rounded text-sm"
              >
                📸 Gallery
              </button>

              <button
                onClick={() => setEditingEvent(event)}
                className="bg-green-600 text-white px-3 py-1 rounded text-sm"
              >
                ✏️ Edit
              </button>

              <button
                onClick={() => setViewEvent(event)}
                className="bg-teal-600 text-white px-3 py-1 rounded text-sm"
              >
                👁 View
              </button>

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
                if (!files) return;

                let successCount = 0;

                for (let i = 0; i < files.length; i++) {
                  await uploadImage(event.event_id, files[i]);
                  successCount++;
                }

                setUploadedCount(successCount);
                setUploadSuccess(true);

                setTimeout(() => setUploadSuccess(false), 2500);
              }}
            />
          </div>
        ))}
      </div>

      {/* ---------------- GALLERY PREVIEW ---------------- */}
      {selectedEvent ? (
        <>
          <h3 className="font-semibold mb-2">{selectedEvent.title}</h3>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="grid grid-cols-2 gap-1 p-2 bg-gray-50">
              {gallery.length > 0 ? (
                gallery.slice(0, 4).map((img) => (
                  <div key={img.id} className="relative h-28 overflow-hidden rounded-md">
                    <img src={img.image_url} className="w-full h-full object-cover" />
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
        <p className="text-gray-500">Select an event to manage gallery</p>
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



      {/* ---------------- EDIT MODAL ---------------- */}
{editingEvent && (
  <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded w-full max-w-lg">

      {/* IMAGE */}
      {editingEvent.image_url && (
        <div className="relative w-full h-40 mb-3 rounded overflow-hidden group">
          <img
            src={editingEvent.image_url}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* IMAGE INPUT */}
      <input
        type="file"
        accept="image/*"
        className="border p-2 w-full mb-3"
        onChange={async (e) => {
          const file = e.target.files?.[0];
          if (!file) return;

          const fileName = `events/${editingEvent.id}-${Date.now()}`;

          const { error: uploadError } = await supabase.storage
            .from("Gallery")
            .upload(fileName, file, { upsert: true });

          if (uploadError) return alert(uploadError.message);

          const { data } = supabase.storage
            .from("Gallery")
            .getPublicUrl(fileName);

          const newUrl = `${data.publicUrl}?t=${Date.now()}`;

          await supabase
            .from("events")
            .update({ image_url: newUrl })
            .eq("id", editingEvent.id);

          setEditingEvent({ ...editingEvent, image_url: newUrl });

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

            if (error) return alert(error.message);

            setEventSuccessMessage("Event updated successfully");
            setEventSuccess(true);

            setTimeout(() => setEventSuccess(false), 2500);

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

      {/* ---------------- DELETE CONFIRM ---------------- */}
      {deleteId && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60">
          <div className="bg-white p-6 rounded">
            <p>Delete this event?</p>

            <div className="flex gap-2 mt-4">
              <button
                onClick={deleteEvent}
                className="bg-red-600 text-white px-4 py-2"
              >
                Yes
              </button>

              <button
                onClick={() => setDeleteId(null)}
                className="bg-gray-300 px-4 py-2"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SUCCESS */}
      {eventSuccess && (
        <div className="fixed bottom-5 right-5 bg-green-600 text-white p-3 rounded">
          {eventSuccessMessage}
        </div>
      )}

      {uploadSuccess && (
        <div className="fixed bottom-5 left-5 bg-blue-600 text-white p-3 rounded">
          {uploadedCount} images uploaded
        </div>
      )}
    </div>
  );
}