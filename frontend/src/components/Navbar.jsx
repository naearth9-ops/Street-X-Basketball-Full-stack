import React, { useState } from "react";
import logoImg from "../assets/logo.png";
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); //Hamburger Menu
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false); //Product Dropdown

  return (
    <nav className="bg-neutral-950 text-white border-b border-neutral-800 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/*Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center gap-2 group">
              <img
                src={logoImg}
                alt="STREET X BASKETBALL Logo"
                className="h-20 w-30 "
              />
            </a>
          </div>

          {/*Search */}
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="ค้นหาลูกบาส, รองเท้า, อุปกรณ์..."
                className="w-full bg-neutral-900 text-sm text-gray-200 placeholder-neutral-500 rounded-full py-2.5 pl-10 pr-4 border border-neutral-800 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
              />
              <svg
                className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-6 text-sm font-medium">
            {/* Product Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsProductDropdownOpen(true)}
              onMouseLeave={() => setIsProductDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-orange-500 py-2 transition-colors">
                Products
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${isProductDropdownOpen ? "rotate-180 text-orange-500" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown */}
              {isProductDropdownOpen && (
                <div className="absolute top-full left-0 w-48 bg-neutral-900 border border-neutral-800 rounded-xl shadow-2xl py-2 z-50">
                  <a
                    href="#"
                    className="block px-4 py-2.5 hover:bg-neutral-800 hover:text-orange-500 transition-colors"
                  >
                    ลูกบาสเกตบอล
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2.5 hover:bg-neutral-800 hover:text-orange-500 transition-colors"
                  >
                    รองเท้าบาสเกตบอล
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2.5 hover:bg-neutral-800 hover:text-orange-500 transition-colors"
                  >
                    ชุดแข่ง / เสื้อผ้า
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2.5 hover:bg-neutral-800 hover:text-orange-500 transition-colors"
                  >
                    อุปกรณ์ซัพพอร์ตร่างกาย
                  </a>
                </div>
              )}
            </div>

            <Link to="/services" className="hover:text-orange-500 transition-colors">
              Service
            </Link>
            <Link to="/contact" className="hover:text-orange-500 transition-colors">
              Contact
            </Link>
            <Link to="/about" className="hover:text-orange-500 transition-colors">
              About
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="#"
              className="px-4 py-2 text-sm font-semibold hover:text-orange-500 transition-colors"
            >
              Log in
            </a>
            <a
              href="#"
              className="px-4 py-1 text-sm font-semibold rounded-lg bg-orange-500 hover:bg-orange-600 text-white shadow-md shadow-blue-600/30 transition-all hover:scale-105"
            >
              Sign up
            </a>
          </div>

          {/* ปุ่ม Hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* เมนู Hamburger */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-neutral-900 border-b border-neutral-800 px-4 pt-3 pb-6 space-y-4">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="ค้นหาอุปกรณ์..."
              className="w-full bg-neutral-950 text-sm text-gray-200 placeholder-neutral-500 rounded-full py-2.5 pl-10 pr-4 border border-neutral-800 focus:outline-none focus:border-orange-500"
            />
            <svg
              className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <div className="space-y-2 font-medium">
            <div>
              <button
                onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
                className="w-full flex justify-between items-center py-2 text-left hover:text-orange-500"
              >
                <span>Products</span>
                <svg
                  className={`w-4 h-4 transition-transform ${isProductDropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isProductDropdownOpen && (
                <div className="pl-4 space-y-2 pt-1 pb-2 border-l-2 border-orange-500 my-1">
                  <a
                    href="#"
                    className="block text-sm text-neutral-400 hover:text-white"
                  >
                    ลูกบาสเกตบอล
                  </a>
                  <a
                    href="#"
                    className="block text-sm text-neutral-400 hover:text-white"
                  >
                    รองเท้าบาสเกตบอล
                  </a>
                  <a
                    href="#"
                    className="block text-sm text-neutral-400 hover:text-white"
                  >
                    ชุดแข่ง / เสื้อผ้า
                  </a>
                  <a
                    href="#"
                    className="block text-sm text-neutral-400 hover:text-white"
                  >
                    อุปกรณ์ซัพพอร์ตร่างกาย
                  </a>
                </div>
              )}
            </div>
            <a href="#" className="block py-2 hover:text-orange-500">
              Service
            </a>
            <a href="#" className="block py-2 hover:text-orange-500">
              Contact
            </a>
            <a href="#" className="block py-2 hover:text-orange-500">
              About
            </a>
          </div>

          <div className="pt-4 border-t border-neutral-800 flex flex-col gap-2">
            <a
              href="#"
              className="w-full py-2.5 text-center font-semibold rounded-lg border border-neutral-700 hover:bg-neutral-800"
            >
              Log in
            </a>
            <a
              href="#"
              className="w-full py-2.5 text-center font-semibold rounded-lg bg-orange-500 hover:bg-orange-600 text-black shadow-md"
            >
              Sign up
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
