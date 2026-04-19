"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

const EventGallery = ({ eventId }: { eventId: string }) => {
  const [images, setImages] = useState<any[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const isAdmin = true; // later connect to auth

  const fetchImages = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("gallery")
      .select("*")
      .eq("event_id", eventId)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Fetch error:", error.message);
    }

    setImages(data || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchImages();

    const interval = setInterval(fetchImages, 5000);
    return () => clearInterval(interval);
  }, [eventId]);

  const uploadImage = () => {
    window.cloudinary.openUploadWidget(
      {
        cloudName: "YOUR_CLOUD_NAME",
        uploadPreset: "YOUR_UPLOAD_PRESET",
        folder: `church-events/${eventId}`,
        multiple: true,
      },
      async (error: any, result: any) => {
        if (!error && result.event === "success") {
          await supabase.from("event_gallery").insert([
            {
              event_id: eventId,
              image_url: result.info.secure_url,
            },
          ]);

          fetchImages();
        }
      }
    );
  };

  const deleteImage = async (id: number) => {
    await supabase.from("gallery").delete().eq("id", id);
    fetchImages();
  };

  // ✅ LOADING STATE
  if (loading) {
    return (
      <div className="p-6 text-center text-gray-500">
        Loading gallery...
      </div>
    );
  }

  return (
    <div className="p-6">

      {/* HEADER */}
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-bold capitalize">
          {eventId.replace(/-/g, " ")}
        </h2>

        {isAdmin && images.length > 0 && (
          <button
            onClick={uploadImage}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Upload
          </button>
        )}
      </div>

      {/* ✅ EMPTY STATE */}
      {images.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-gray-500">

          <div className="text-5xl mb-3">🖼️</div>

          <p className="text-lg font-semibold">
            No images yet
          </p>

          <p className="text-sm">
            There are still no images for this event.
          </p>

          {isAdmin && (
            <button
              onClick={uploadImage}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
            >
              Upload First Image
            </button>
          )}
        </div>
      ) : (
        /* ✅ GALLERY */
        <div className="columns-2 md:columns-4 gap-3 space-y-3">
          {images.map((img) => (
            <div key={img.id} className="relative group">
              <img
                src={img.image_url}
                onClick={() => setSelected(img.image_url)}
                className="rounded-xl cursor-pointer"
              />

              {isAdmin && (
                <button
                  onClick={() => deleteImage(img.id)}
                  className="absolute top-2 right-2 bg-black text-white text-xs px-2 hidden group-hover:block"
                >
                  Delete
                </button>
              )}
            </div>
          ))}
        </div>
      )}

      {/* ✅ LIGHTBOX */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <img
            src={selected}
            className="max-h-[90%] rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default EventGallery;