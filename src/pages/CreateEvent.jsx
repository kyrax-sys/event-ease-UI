import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateEvent({ onCreate }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    description: "",
    date: "",
    time: "",
    venue: ""
  });
  const [message, setMessage] = useState(null);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.date || !form.time || !form.venue) {
      setMessage({ type: "error", text: "Please fill required fields." });
      return;
    }
    onCreate(form);
    setMessage({ type: "success", text: "Event created." });
    setTimeout(() => navigate("/events"), 700);
  };

  return (
    <div className="max-w-2xl mt-32 mx-auto rounded-2xl text-gray-100 bg-gradient-to-br from-white/8 to-white/6 backdrop-blur-lg p-7">
      <h2 className="text-2xl font-semibold mb-4">Create Event</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-200">Event Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="mt-1 block w-full border rounded px-3 py-2"
            placeholder="Awesome Conference"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-200">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="mt-1 block w-full border rounded px-3 py-2"
            rows="3"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-200">Date</label>
            <input name="date" value={form.date} onChange={handleChange} type="date" className="mt-1 block w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-200">Time</label>
            <input name="time" value={form.time} onChange={handleChange} type="time" className="mt-1 block w-full border rounded px-3 py-2" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-200">Venue</label>
          <input name="venue" value={form.venue} onChange={handleChange} className="mt-1 block w-full border rounded px-3 py-2" />
        </div>

        <div>
          <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded">Submit</button>
        </div>

        {message && (
          <div className={`mt-2 p-2 rounded ${message.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
            {message.text}
          </div>
        )}
      </form>

      <p className="mt-4 text-sm text-gray-500 italic">“Organizers can use this page to create new events easily.”</p>
    </div>
  );
}
