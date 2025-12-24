import React from "react";
import { Link } from "react-router-dom";

export default function EventCard({ event }) {
  const date = new Date(event.date);
  const formattedDate = date.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });

  return (
    <div className="rounded-2xl text-gray-100 bg-gradient-to-br from-white/8 to-white/6 backdrop-blur-lg border border-white/8 p-6 shadow-2xl flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold">{event.name}</h3>
        <p className="text-sm text-gray-200 mt-1">{event.description}</p>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-gray-400">
          <div>{formattedDate} • {event.time}</div>
          <div>{event.venue}</div>
        </div>
        <Link
          to={`/register?event=${encodeURIComponent(event.id)}`}
          className="ml-4 inline-block px-3 py-1.5 bg-indigo-600 text-white rounded hover:bg-indigo-700 text-sm"
        >
          Register
        </Link>
      </div>
    </div>
  );
}
