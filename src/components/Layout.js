import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "../utils"; // ✅ fixed import
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

  return (
    <div className="min-h-screen bg-black text-white">
      {/* ✅ Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center space-x-3">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/b01fe91d3_Screenshot2025-09-01134431.png" 
                alt="AXIOM Logo" 
                className="h-10 w-auto object-contain opacity-80 mix-blend-lighten"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div 
                className="h-10 w-10 bg-gradient-to-br from-blue-500 to-yellow-500 rounded-lg items-center justify-center text-black font-bold text-lg hidden"
              >
                A
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
                  AXIOM
                </h1>
                <p className="text-xs text-gray-400">Mathematics Club</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.url}
                  className={`nav-link-hover px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.url
                      ? 'text-yellow-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.title}
                </Link>
              ))}
            </div>

            {/* Mobile menu button (not wired yet) */}
            <div className="md:hidden">
              <button className="text-gray-300 hover:text-white p-2">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Math symbols background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="math-symbol" style={{top: '10%', left: '10%', animationDelay: '0s'}}>∑</div>
        <div className="math-symbol" style={{top: '20%', right: '15%', animationDelay: '2s'}}>∮</div>
        <div className="math-symbol" style={{top: '50%', left: '5%', animationDelay: '4s'}}>∞</div>
        <div className="math-symbol" style={{bottom: '30%', right: '20%', animationDelay: '1s'}}>π</div>
        <div className="math-symbol" style={{bottom: '20%', left: '20%', animationDelay: '3s'}}>√</div>
        <div className="math-symbol" style={{top: '60%', right: '10%', animationDelay: '5s'}}>∆</div>
        <div className="math-symbol text-blue-500/10" style={{top: '80%', left: '30%', fontSize: '3rem', animationDelay: '1.5s'}}>∫</div>
        <div className="math-symbol text-yellow-500/10" style={{top: '35%', left: '40%', fontSize: '2.5rem', animationDelay: '3.5s'}}>∂</div>
        <div className="math-symbol text-green-500/10" style={{bottom: '10%', right: '5%', fontSize: '4rem', animationDelay: '0.5s'}}>∇</div>
        <div className="math-symbol" style={{top: '15%', left: '60%', animationDelay: '4.5s'}}>≈</div>
        <div className="math-symbol" style={{bottom: '5%', left: '50%', animationDelay: '2.5s'}}>∀</div>
        <div className="math-symbol text-blue-500/10" style={{top: '75%', right: '35%', fontSize: '3rem', animationDelay: '5.5s'}}>∃</div>
      </div>

      {/* Main content */}
      <main className="pt-16 geometric-bg relative z-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center py-4 px-8 border-t border-gray-900 bg-black">
        <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} AXIOM - DPS Dwarka. All rights reserved.</p>
        <p className="absolute bottom-1 right-1 text-[8px] text-gray-800 hover:text-gray-600 transition-colors cursor-default" title="The Best School is My School, For Learning">TBSM4L</p>
      </footer>
    </div>
  );
}
