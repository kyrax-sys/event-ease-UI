import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";


import Home from "./pages/Home";
import ViewEvents from "./pages/ViewEvents";
import Register from "./pages/Register";
import CreateEvent from "./pages/CreateEvent";
import MyRegistrations from "./pages/MyRegistrations";
import Contact from "./pages/Contact";

import { loadEventsFromStorage, saveEventsToStorage } from "./utils/storage";
import initialEvents from "./data/events";

export default function App() {
  const [events, setEvents] = useState(() => loadEventsFromStorage() || initialEvents);
  const [registrations, setRegistrations] = useState(() => {
    const raw = localStorage.getItem("registrations_v1");
    return raw ? JSON.parse(raw) : [];
  });

  useEffect(() => {
    saveEventsToStorage(events);
  }, [events]);

  useEffect(() => {
    localStorage.setItem("registrations_v1", JSON.stringify(registrations));
  }, [registrations]);

  const addEvent = (event) => {
    setEvents((prev) => [{ ...event, id: Date.now().toString() }, ...prev]);
  };

  const registerUser = (registration) => {
    // prevent duplicate registration for same email+event
    const exists = registrations.some(
      (r) => r.email === registration.email && r.eventId === registration.eventId
    );
    if (!exists) {
      setRegistrations((prev) => [{ id: Date.now().toString(), ...registration }, ...prev]);
      return { success: true, message: "Registered successfully." };
    } else {
      return { success: false, message: "You are already registered for this event." };
    }
  };

  const cancelRegistration = (regId) => {
    setRegistrations((prev) => prev.filter((r) => r.id !== regId));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<ViewEvents events={events} />} />
          <Route
            path="/register"
            element={<Register events={events} onRegister={registerUser} />}
          />
          <Route path="/create" element={<CreateEvent onCreate={addEvent} />} />
          <Route
            path="/my-registrations"
            element={
              <MyRegistrations
                registrations={registrations}
                events={events}
                onCancel={cancelRegistration}
              />
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<div className="text-center py-20">Page not found</div>} />
        </Routes>
      </main>
     
    </div>
  );
}
