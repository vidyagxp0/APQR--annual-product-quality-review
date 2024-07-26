import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const timeoutRef = useRef(null);

  const showDropdown = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setDropdownOpen(true);
  };

  const hideDropdown = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 500); // 1 second delay
  };

  return (
    <header className="bg-gray-200 shadow-lg py-4">
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/gxplogo.png" alt="Logo" className="h-10 mr-2" />
        </div>

        {/* Name */}
        <div className="text-center flex gap-2">
          <img src="/alogo.jpg" alt="Centered Logo" className="mx-auto mb-2 h-10" />
          <h1 className="text-3xl font-cursive" style={{ fontWeight: "normal" }}>
            APQR
          </h1>
        </div>

        {/* Dropdown Menu */}
        <div
          className="relative"
          onMouseEnter={showDropdown}
          onMouseLeave={hideDropdown}
        >
          <button
            className="flex items-center focus:outline-none border border-gray-400 rounded-md px-4 py-2"
          >
            <span>Gaurav</span>
            <svg
              className="w-6 h-6 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 9l6 6 6-6"
              ></path>
            </svg>
          </button>
          {dropdownOpen && (
            <div
              className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg py-1"
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
            >
              <div className="flex items-center px-4 py-2">
                <img src="/gg.png" alt="User Avatar" className="h-12 w-12 rounded-full mr-2" />
                <span className="text-gray-800">Gaurav Meena</span>
              </div>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200 text-sky-700">
                Help
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200 text-sky-700">
                Settings
              </a>
              <NavLink to={"/"} className="block px-4 py-2 hover:bg-gray-200 text-sky-700">
                Logout
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
