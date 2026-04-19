import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

const EventDashboard = ({ onSelect }) => {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    const { data } = await supabase.from("event_gallery").select("*");

    const grouped = data?.reduce((acc, item) => {
      if (!acc[item.event_id]) {
        acc[item.event_id] = [];
      }
      acc[item.event_id].push(item);
      return acc;
    }, {});

    setEvents(grouped ? Object.entries(grouped) : []);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">📁 Event Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-4">
        {events.map(([eventId, images]) => (
          <div
            key={eventId}
            className="shadow rounded-xl overflow-hidden cursor-pointer"
            onClick={() => onSelect(eventId)}
          >
            <img
              src={images[0]?.image_url}
              className="h-40 w-full object-cover"
            />

            <div className="p-4">
              <h2 className="font-bold capitalize">
                {eventId.replace("-", " ")}
              </h2>

              <p className="text-gray-500">
                {images.length} photos
              </p>

              <p className="text-blue-600 mt-2">View →</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventDashboard;