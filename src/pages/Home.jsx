import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, Calendar, Plus, UserCheck } from "lucide-react";

const cardVariants = {
  rest: { scale: 1, boxShadow: "0 0 0 rgba(0,0,0,0)" },
  hover: { scale: 1.03, boxShadow: "0 18px 40px rgba(2,6,23,0.12)" },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#0b1220] to-[#0f172a] text-gray-100">
      {/* HERO with decorative blobs */}
      <section className="relative overflow-hidden pt-28 pb-16">
        {/* decorative gradient blobs */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <svg className="absolute left-[-10%] top-[-10%] w-[55rem] h-[55rem] opacity-30" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="g1" x1="0" x2="1">
                <stop offset="0%" stopColor="#7c3aed" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
            <g transform="translate(0,0)">
              <circle cx="200" cy="140" r="220" fill="url(#g1)" />
              <circle cx="450" cy="420" r="180" fill="#4f46e5" opacity="0.5" />
            </g>
          </svg>

          <svg className="absolute right-[-5%] bottom-[-8%] w-[36rem] h-[36rem] opacity-20" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="g2" x1="0" x2="1">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#7c3aed" />
              </linearGradient>
            </defs>
            <rect x="0" y="0" width="400" height="400" rx="200" fill="url(#g2)" />
          </svg>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* LEFT: Headline + CTAs */}
            <div className="space-y-6 max-w-2xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                <span>Create unforgettable experiences</span>
                <br />
                <span className="bg-gradient-to-r from-[#a78bfa] via-[#7c3aed] to-[#06b6d4] bg-clip-text text-transparent">
                  — effortlessly
                </span>
              </h1>

              <p className="text-gray-200/85 text-lg">
                EventEase helps you discover local happenings, build beautiful event pages, and manage registrations —
                all in a friendly, modern interface that puts the spotlight on your experiences.
              </p>

              {/* Search + Actions glass card */}
              <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                <div className="flex items-center gap-3 bg-white/6 border border-white/8 rounded-full px-3 py-2 shadow-sm backdrop-blur">
                  <Search className="w-5 h-5 text-white/80" />
                  <input
                    aria-label="Search events"
                    placeholder="Search events, locations, or organizers"
                    className="ml-3 outline-none text-gray-100 placeholder-gray-300 bg-transparent flex-1"
                  />
                  <button className="ml-3 px-4 py-1 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] text-white text-sm font-medium shadow-sm hover:opacity-95 transition">
                    Search
                  </button>
                </div>

                <div className="flex gap-3">
                  <Link
                    to="/events"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/6 text-white text-sm hover:bg-white/10 transition"
                  >
                    <Calendar className="w-4 h-4" />
                    Browse Events
                  </Link>

                  <Link
                    to="/create"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] text-white text-sm font-semibold shadow-lg hover:translate-y-[-1px] transition"
                  >
                    <Plus className="w-4 h-4" />
                    Create Event
                  </Link>
                </div>
              </div>

              {/* Quick stats, subtle */}
              <div className="flex gap-6 mt-2 flex-wrap text-sm text-gray-200/80">
                <div className="flex items-center gap-2">
                  <div className="text-indigo-300 font-semibold">1.2k+</div>
                  <div>Events listed</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-indigo-300 font-semibold">18k+</div>
                  <div>Attendees helped</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-indigo-300 font-semibold">750+</div>
                  <div>Organizers onboarded</div>
                </div>
              </div>
            </div>

            {/* RIGHT: Featured card — glass over gradient */}
            <div className="relative">
              <div className="rounded-2xl bg-gradient-to-br from-white/8 to-white/6 backdrop-blur-lg border border-white/8 p-6 shadow-2xl">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm font-semibold text-white/85 opacity-95">Featured</div>
                    <h3 className="text-2xl font-bold text-white mt-2">Sunset Music Festival</h3>
                    <p className="text-sm mt-1 text-white/80">
                      Live music, food trucks, and community vibes — Sat, Dec 13 • Beachfront Park
                    </p>
                  </div>

                  <div className="text-right">
                    <div className="text-xs text-white/70">From</div>
                    <div className="text-lg font-bold text-white">₹499</div>
                  </div>
                </div>

                <div className="mt-4 flex gap-2">
                  <Link
                    to="/events"
                    className="inline-block px-4 py-2 rounded-full bg-white/12 border border-white/8 hover:bg-white/16 transition text-sm font-medium text-white"
                  >
                    View Event
                  </Link>
                  <Link
                    to="/register"
                    className="inline-block px-4 py-2 rounded-full bg-white text-indigo-700 font-semibold hover:translate-y-[-1px] transition text-sm"
                  >
                    Register
                  </Link>
                </div>
              </div>

              {/* soft glowing orb */}
              <div className="absolute -bottom-8 right-6 w-28 h-28 rounded-full bg-gradient-to-br from-[#a78bfa]/60 to-[#06b6d4]/40 blur-3xl pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE CARDS - glass on dark */}
      <section className="container mx-auto px-4 mt-8">
        <h2 className="text-xl font-semibold text-gray-100 mb-4">Get started</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <motion.div
            className="bg-white/6 rounded-2xl p-6 shadow-sm border border-white/6 cursor-pointer backdrop-blur"
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={cardVariants}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-white/8 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-indigo-200" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-100">Discover events</h3>
                <p className="text-sm text-gray-300/80 mt-1">Find local and virtual events tailored to your interests.</p>
              </div>
            </div>
            <div className="mt-4">
              <Link to="/events" className="text-indigo-300 text-sm font-medium hover:underline inline-flex items-center gap-2">
                Browse events
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="bg-white/6 rounded-2xl p-6 shadow-sm border border-white/6 cursor-pointer backdrop-blur"
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={cardVariants}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-white/8 flex items-center justify-center">
                <Plus className="w-6 h-6 text-indigo-200" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-100">Create events</h3>
                <p className="text-sm text-gray-300/80 mt-1">Beautiful event pages with ticketing and schedules in minutes.</p>
              </div>
            </div>
            <div className="mt-4">
              <Link to="/create" className="text-indigo-300 text-sm font-medium hover:underline inline-flex items-center gap-2">
                Create your event
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="bg-white/6 rounded-2xl p-6 shadow-sm border border-white/6 cursor-pointer backdrop-blur"
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={cardVariants}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-white/8 flex items-center justify-center">
                <UserCheck className="w-6 h-6 text-indigo-200" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-100">Manage attendees</h3>
                <p className="text-sm text-gray-300/80 mt-1">Track registrations, check-ins, and export attendee lists easily.</p>
              </div>
            </div>
            <div className="mt-4">
              <Link to="/my-registrations" className="text-indigo-300 text-sm font-medium hover:underline inline-flex items-center gap-2">
                View registrations
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

     

      <div className="h-24" />
    </main>
  );
}
