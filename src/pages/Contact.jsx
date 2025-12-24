import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 1600);
  };

  return (
    <div className="max-w-2xl mx-auto mt-32 p-6 rounded-2xl text-gray-100 bg-gradient-to-br from-white/8 to-white/6 backdrop-blur-lg">
      <h2 className="text-xl font-semibold mb-4">Contact Us</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-400">Email</label>
          <input name="email" value={form.email} onChange={handleChange} className="mt-1 block w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-400">Phone</label>
          <input name="phone" value={form.phone} onChange={handleChange} className="mt-1 block w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-400">Message</label>
          <textarea name="message" value={form.message} onChange={handleChange} rows="4" className="mt-1 block w-full border rounded px-3 py-2"></textarea>
        </div>
        <div>
          <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded">Send</button>
        </div>
      </form>

      {sent && <div className="mt-4 p-2 bg-green-100 text-green-700 rounded">Thanks for your message — we’ll get back shortly.</div>}

      <div className="mt-6 text-sm text-gray-500">
        Or email us at <span className="text-indigo-600">support@eventease.example</span>
      </div>
    </div>
  );
}
