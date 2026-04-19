"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function GalleryPage() {
  const params = useParams();
  const eventId = Array.isArray(params.eventId)
    ? params.eventId[0]
    : params.eventId;

  const [images, setImages] = useState<any[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (eventId) fetchGallery();
  }, [eventId]);

  const fetchGallery = async () => {
    setLoading(true);

    const res = await fetch(`/api/gallery?event_id=${eventId}`);
    const data = await res.json();

    setImages(data || []);
    setLoading(false);
  };

  return (
    <div className="p-6">

      {/* HEADER */}
<div className="flex flex-col items-center text-center mb-10">

  {/* Title */}
  <h1 className="text-4xl md:text-5xl font-extrabold capitalize tracking-tight">
    {eventId?.replace(/-/g, " ")}
  </h1>

  {/* Decorative line */}
  <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-3 mb-4" />

  {/* Subtitle / badge */}
  <p className="text-gray-500 text-sm md:text-base">
    Event Memories Gallery
  </p>

  {/* Image count badge */}
  <div className="mt-4 inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gray-100 shadow-sm">
    <span className="text-sm font-medium text-gray-700">
      📸 {images.length} photo{images.length !== 1 ? "s" : ""}
    </span>
  </div>

</div>

      {/* LOADING SKELETON */}
      {loading && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="h-40 bg-gray-200 rounded-xl animate-pulse"
            />
          ))}
        </div>
      )}

      {/* EMPTY STATE */}
      {!loading && images.length === 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center py-24 text-gray-500"
        >
          <div className="text-6xl mb-3 animate-bounce">📷</div>

          <p className="text-lg font-semibold">
            No memories yet
          </p>

          <p className="text-sm text-center max-w-sm">
            This event doesn’t have photos yet. Check back soon!
          </p>
        </motion.div>
      )}

      {/* IMAGE GRID */}
      {!loading && images.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">

          <AnimatePresence>
            {images.map((img, index) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.03 }}
                className="relative group overflow-hidden rounded-xl cursor-pointer"
                onClick={() => setSelectedImage(img.image_url)}
              >

                <img
                  src={img.image_url}
                  className="w-full h-44 object-cover transform group-hover:scale-110 transition duration-300"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-center justify-center">
                  <span className="text-white text-sm opacity-0 group-hover:opacity-100 transition">
                    View Photo
                  </span>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>

        </div>
      )}

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >

            <motion.img
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.25 }}
              src={selectedImage}
              className="max-h-[90%] max-w-[90%] object-contain rounded-lg shadow-2xl"
            />

            {/* CLOSE BUTTON */}
            <button
              className="absolute top-5 right-5 bg-white/10 hover:bg-white/20 text-white px-3 py-1 rounded-full"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}