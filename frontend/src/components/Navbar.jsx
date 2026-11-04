import React, { useState, useContext } from "react";
import logoImg from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Hamburger Menu
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false); // Product Dropdown
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  const handleCategorySelect = (categoryId) => {
    setIsProductDropdownOpen(false);
    setIsMobileMenuOpen(false);
    if (categoryId) {
      navigate(`/shop?category=${categoryId}`);
    } else {
      navigate("/shop");
    }
  };

  const handleSearch = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      e.preventDefault();
      if (searchQuery.trim()) {
        navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
        setIsMobileMenuOpen(false);
      }
    }
  };

  const handleLogout = () => {
  const isConfirmed = window.confirm('คุณต้องการออกจากระบบใช่หรือไม่?');
  
  if (isConfirmed) {
    logout();
    setIsMobileMenuOpen(false);
    navigate('/');
  }
};

  return (
    <nav className="bg-neutral-950 text-white border-b border-neutral-800 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <img
                src={logoImg}
                alt="STREET X BASKETBALL Logo"
                className="h-20 w-30"
              />
            </Link>
          </div>

          {/* Search (Desktop) */}
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="ค้นหาลูกบาส, รองเท้า, อุปกรณ์..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearch}
                className="w-full bg-neutral-900 text-sm text-gray-200 placeholder-neutral-500 rounded-full py-2.5 pl-10 pr-4 border border-neutral-800 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
              />
              <svg
                onClick={handleSearch}
                className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3.5 cursor-pointer hover:text-orange-500 transition-colors"
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

          {/* Nav Links (Desktop) */}
          <div className="hidden lg:flex items-center space-x-6 text-sm font-medium">
            <div
              className="relative"
              onMouseEnter={() => setIsProductDropdownOpen(true)}
              onMouseLeave={() => setIsProductDropdownOpen(false)}
            >
              <button
                onClick={() => handleCategorySelect(null)}
                className="flex items-center gap-1 hover:text-orange-500 py-2 transition-colors cursor-pointer"
              >
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

              {/* Dropdown Box */}
              {isProductDropdownOpen && (
                <div className="absolute top-full left-0 w-52 bg-neutral-900 border border-neutral-800 rounded-xl shadow-2xl py-2 z-50">
                  <button
                    onClick={() => handleCategorySelect(null)}
                    className="w-full text-left px-4 py-2.5 text-xs font-black text-orange-400 hover:bg-neutral-800 transition-colors uppercase border-b border-neutral-800 flex items-center justify-between cursor-pointer"
                  >
                    <span>สินค้าทั้งหมด</span>
                    <span>➔</span>
                  </button>

                  <button
                    onClick={() => handleCategorySelect(1)}
                    className="w-full text-left block px-4 py-2.5 text-sm hover:bg-neutral-800 hover:text-orange-500 transition-colors cursor-pointer"
                  >
                    ลูกบาสเกตบอล
                  </button>
                  <button
                    onClick={() => handleCategorySelect(2)}
                    className="w-full text-left block px-4 py-2.5 text-sm hover:bg-neutral-800 hover:text-orange-500 transition-colors cursor-pointer"
                  >
                    รองเท้าบาสเกตบอล
                  </button>
                  <button
                    onClick={() => handleCategorySelect(3)}
                    className="w-full text-left block px-4 py-2.5 text-sm hover:bg-neutral-800 hover:text-orange-500 transition-colors cursor-pointer"
                  >
                    ชุดแข่ง / เสื้อผ้า
                  </button>
                  <button
                    onClick={() => handleCategorySelect(4)}
                    className="w-full text-left block px-4 py-2.5 text-sm hover:bg-neutral-800 hover:text-orange-500 transition-colors cursor-pointer"
                  >
                    อุปกรณ์ซัพพอร์ตร่างกาย
                  </button>
                </div>
              )}
            </div>

            <Link
              to="/services"
              className="hover:text-orange-500 transition-colors"
            >
              Service
            </Link>
            <Link
              to="/contact"
              className="hover:text-orange-500 transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/about"
              className="hover:text-orange-500 transition-colors"
            >
              About
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-3">
            {user ? (
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-orange-500 italic">
                  {user.username}
                </span>
                <button
                  onClick={handleLogout}
                  className="px-4 py-1.5 text-sm font-semibold rounded-lg bg-neutral-800 hover:bg-red-600 hover:text-white transition-colors cursor-pointer"
                >
                  Log out
                </button>
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm font-semibold hover:text-orange-500 transition-colors"
                >
                  Log in
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-1 text-sm font-semibold rounded-lg bg-orange-500 hover:bg-orange-600 text-white shadow-md transition-all hover:scale-105"
                >
                  Sign up
                </Link>
              </>
            )}
          </div>

          {/* Hamburger Mobile */}
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

      {/* Hamburger Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-neutral-900 border-b border-neutral-800 px-4 pt-3 pb-6 space-y-4">
          {/* Mobile Search */}
          <div className="relative w-full">
            <input
              type="text"
              placeholder="ค้นหาอุปกรณ์..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearch}
              className="w-full bg-neutral-950 text-sm text-gray-200 placeholder-neutral-500 rounded-full py-2.5 pl-10 pr-4 border border-neutral-800 focus:outline-none focus:border-orange-500"
            />
            <svg
              onClick={handleSearch}
              className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3.5 cursor-pointer hover:text-orange-500"
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
                  <button
                    onClick={() => handleCategorySelect(null)}
                    className="block w-full text-left text-sm text-orange-400 font-bold hover:text-white"
                  >
                    สินค้าทั้งหมด
                  </button>
                  <button
                    onClick={() => handleCategorySelect(1)}
                    className="block w-full text-left text-sm text-neutral-400 hover:text-white"
                  >
                    ลูกบาสเกตบอล
                  </button>
                  <button
                    onClick={() => handleCategorySelect(2)}
                    className="block w-full text-left text-sm text-neutral-400 hover:text-white"
                  >
                    รองเท้าบาสเกตบอล
                  </button>
                  <button
                    onClick={() => handleCategorySelect(3)}
                    className="block w-full text-left text-sm text-neutral-400 hover:text-white"
                  >
                    ชุดแข่ง / เสื้อผ้า
                  </button>
                  <button
                    onClick={() => handleCategorySelect(4)}
                    className="block w-full text-left text-sm text-neutral-400 hover:text-white"
                  >
                    อุปกรณ์ซัพพอร์ตร่างกาย
                  </button>
                </div>
              )}
            </div>

            <Link
              to="/services"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 hover:text-orange-500"
            >
              Service
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 hover:text-orange-500"
            >
              Contact
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 hover:text-orange-500"
            >
              About
            </Link>
          </div>

          <div className="pt-4 border-t border-neutral-800 flex flex-col gap-2">
            {user ? (
              <>
                <div className="text-center font-bold text-orange-500 py-1">
                  {user.username}
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full py-2.5 text-center font-semibold rounded-lg bg-red-600 hover:bg-red-700 text-white"
                >
                  Log out
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-2.5 text-center font-semibold rounded-lg border border-neutral-700 hover:bg-neutral-800"
                >
                  Log in
                </Link>
                <Link
                  to="/register"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-2.5 text-center font-semibold rounded-lg bg-orange-500 hover:bg-orange-600 text-black shadow-md"
                >
                  Sign up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
