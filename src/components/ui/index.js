import React from 'react';

/* Buttons */
export function Button({ children, onClick, className = '' }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded bg-primary-blue text-white hover:bg-secondary-blue transition ${className}`}
    >
      {children}
    </button>
  );
}

/* Input */
export function Input({ type = "text", placeholder, value, onChange, className = '' }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`px-3 py-2 rounded border border-gray-600 bg-black text-white w-full ${className}`}
    />
  );
}

/* Textarea */
export function Textarea({ placeholder, value, onChange, className = '' }) {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`px-3 py-2 rounded border border-gray-600 bg-black text-white w-full ${className}`}
    />
  );
}

/* Card */
export function Card({ children, className = '' }) {
  return (
    <div className={`bg-secondary-black rounded-2xl p-4 shadow-md ${className}`}>
      {children}
    </div>
  );
}

/* Navbar link */
export function NavLink({ href, children }) {
  return (
    <a href={href} className="nav-link-hover text-white hover:text-primary-yellow">
      {children}
    </a>
  );
}

/* Section Title */
export function SectionTitle({ children }) {
  return (
    <h2 className="text-3xl font-bold text-primary-yellow mb-6">{children}</h2>
  );
}
