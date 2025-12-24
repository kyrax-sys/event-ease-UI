import React from "react";

export default function MyRegistrations({ registrations = [], events = [], onCancel }) {
  // join registrations with event info
  const enriched = registrations.map((r) => ({
    ...r,
    event: events.find((e) => e.id === r.eventId) || { name: "Unknown event", date: r.eventDate }
  }));

  return (
    <div>
      <h2 className="mt-32 text-5xl font-bold mb-20">My Registrations</h2>

      {enriched.length === 0 ? (
        <div className="p-6 rounded-2xl text-gray-400 bg-gradient-to-br from-white/8 to-white/6 backdrop-blur-lg">You have no registrations yet.</div>
      ) : (
        <div className="space-y-4">
          {enriched.map((r) => (
            <div key={r.id} className="rounded-2xl text-gray-100 bg-gradient-to-br from-white/8 to-white/6 backdrop-blur-lg p-4 flex items-center justify-between">
              <div>
                <div className="font-semibold">{r.event.name}</div>
                <div className="text-sm text-gray-200">{r.name} • {r.email}</div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onCancel(r.id)}
                  className="px-3 py-1.5 bg-red-100 text-red-700 rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <p className="mt-4 text-sm text-gray-500 italic">“This page helps users keep track of events they’ve registered for.”</p>
    </div>
  );
}
