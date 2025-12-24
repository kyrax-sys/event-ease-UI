import React from "react";
import EventCard from "../components/EventCard";

export default function ViewEvents({ events = [] }) {
  return (
    <div className="relative">
      <h2 className="mt-32 text-5xl font-bold mb-20">Upcoming Events</h2>

      {events.length === 0 ? (
        <div className="p-6 bg-white rounded shadow text-gray-600">No events yet.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {events.map((ev) => (
            <EventCard key={ev.id} event={ev} />
          ))}
        </div>
      )}

      <p className="mt-4 text-sm text-gray-500 italic">
        “This page displays all upcoming events in a clean card layout where users can easily register.”
      </p>
    </div>
  );
}
