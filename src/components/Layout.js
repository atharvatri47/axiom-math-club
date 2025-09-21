import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "../utils";
import { Home, Users, Calendar, BookOpen, Mail, Activity } from "lucide-react";

const navigationItems = [
  { title: "Home", url: createPageUrl("Home"), icon: Home },
  { title: "What We Do", url: createPageUrl("Activities"), icon: Activity },
  { title: "Members", url: createPageUrl("Members"), icon: Users },
  { title: "Events", url: createPageUrl("Events"), icon: Calendar },
  { title: "Resources", url: createPageUrl("Resources"), icon: BookOpen },
  { title: "Contact", url: createPageUrl("Contact"), icon: Mail },
];

export default function Layout({ children }) {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center space-x-3">
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
                AXIOM
              </h1>
              <p className="text-xs text-gray-400">Mathematics Club</p>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.url}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.url
                      ? "text-yellow-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.title}
                </Link>
              ))}
            </div>

            {/* Mobile button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="text-gray-300 hover:text-white p-2"
              >
                {mobileOpen ? (
                  // X icon
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                ) : (
                  // Hamburger icon
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileOpen && (
          <div className="md:hidden bg-black border-t border-gray-800 px-4 py-2 space-y-2">
            {navigationItems.map((item) => (
              <Link
                key={item.title}
                to={item.url}
                className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.url
                    ? "text-yellow-400"
                    : "text-gray-300 hover:text-white"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Main content */}
      <main className="pt-16 relative z-10">{children}</main>

      {/* Footer */}
      <footer className="relative z-10 text-center py-4 px-8 border-t border-gray-900 bg-black">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} AXIOM - DPS Dwarka. All rights reserved.
        </p>
        <p
          className="absolute bottom-1 right-1 text-[8px] text-gray-800 hover:text-gray-600 transition-colors cursor-default"
          title="The Best School is My School, For Learning"
        >
          TBSM4L
        </p>
      </footer>
    </div>
  );
}
