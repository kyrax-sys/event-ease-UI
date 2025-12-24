import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NavLinkItem = ({ to, children, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      "block px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 " +
      (isActive
        ? "bg-indigo-600 text-white shadow-lg scale-105"
        : "text-gray-100 hover:text-indigo-600 hover:bg-indigo-50")
    }
  >
    {children}
  </NavLink>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl shadow-sm">
      <div className="container mx-auto p-7 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold shadow-md">
            EE
          </div>
          <div>
            <h1 className="text-lg font-extrabold text-gray-100 tracking-tight">
              EventEase
            </h1>
            <p className="text-xs text-gray-100 -mt-1 hidden sm:block">
              Discover • Create • Enjoy
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          <NavLinkItem to="/">Home</NavLinkItem>
          <NavLinkItem to="/events">Events</NavLinkItem>
          <NavLinkItem to="/create">Create</NavLinkItem>
          <NavLinkItem to="/register">Register</NavLinkItem>
          <NavLinkItem to="/my-registrations">My Registrations</NavLinkItem>
          <NavLinkItem to="/contact">Contact</NavLinkItem>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-100 hover:text-indigo-600 transition"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden backdrop-blur-md shadow-lg"
          >
            <div className="flex flex-col items-start px-4 py-3 space-y-2">
              <NavLinkItem to="/" onClick={() => setOpen(false)}>
                Home
              </NavLinkItem>
              <NavLinkItem to="/events" onClick={() => setOpen(false)}>
                Events
              </NavLinkItem>
              <NavLinkItem to="/create" onClick={() => setOpen(false)}>
                Create Event
              </NavLinkItem>
              <NavLinkItem to="/register" onClick={() => setOpen(false)}>
                Register
              </NavLinkItem>
              <NavLinkItem to="/my-registrations" onClick={() => setOpen(false)}>
                My Registrations
              </NavLinkItem>
              <NavLinkItem to="/contact" onClick={() => setOpen(false)}>
                Contact
              </NavLinkItem>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
