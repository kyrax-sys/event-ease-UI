import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

export default function Register({ events = [], onRegister }) {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const prefillEventId = searchParams.get("event") || "";

  const [form, setForm] = useState({
    name: "",
    email: "",
    eventId: prefillEventId || (events[0] && events[0].id) || ""
  });

  useEffect(() => {
    if (prefillEventId) setForm((f) => ({ ...f, eventId: prefillEventId }));
  }, [prefillEventId]);

  const [message, setMessage] = useState(null);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.eventId) {
      setMessage({ type: "error", text: "Please fill all fields." });
      return;
    }
    const result = onRegister({
      name: form.name.trim(),
      email: form.email.trim(),
      eventId: form.eventId
    });
    if (result.success) {
      setMessage({ type: "success", text: result.message });
      // optional: redirect to My Registrations
      setTimeout(() => navigate("/my-registrations"), 700);
    } else {
      setMessage({ type: "error", text: result.message });
    }
  };

  return (
    <div className="max-w-2xl mt-32 mx-auto rounded-2xl text-gray-100 bg-gradient-to-br from-white/8 to-white/6 backdrop-blur-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Register for an event</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-400">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="mt-1 block w-full border rounded px-3 py-2"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400">Email</label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            className="mt-1 block w-full border rounded px-3 py-2"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400">Event</label>
          <select
            name="eventId"
            value={form.eventId}
            onChange={handleChange}
            className="mt-1 block w-full border rounded px-3 py-2"
          >
            <option value="">-- choose an event --</option>
            {events.map((ev) => (
              <option key={ev.id} value={ev.id}>
                {ev.name} — {ev.date}
              </option>
            ))}
          </select>
        </div>

        <div>
          <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded">
            Submit
          </button>
        </div>

        {message && (
          <div className={`mt-2 p-2 rounded ${message.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
            {message.text}
          </div>
        )}
      </form>

      <p className="mt-4 text-sm text-gray-500 italic">“Users can fill this simple form to register for an event.”</p>
    </div>
  );
}
