import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../pages/AuthContext";

function Navbar() {
  const { username, isLoggedIn, logout } = useContext(AuthContext);

  return (
    <nav className="bg-gradient-to-r from-black via-gray-900 to-blue-900 shadow-lg px-6 py-4 fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="text-3xl font-extrabold tracking-wide bg-gradient-to-r from-pink-500 via-purple-400 to-blue-400 bg-clip-text text-transparent"
        >
          AI Resume<span className="text-white">Maker</span>
        </Link>

        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/about" className="text-gray-300 hover:text-pink-400 font-medium transition">
            About
          </Link>
          <Link to="/services" className="text-gray-300 hover:text-purple-400 font-medium transition">
            Services
          </Link>
          <Link to="/contact" className="text-gray-300 hover:text-blue-400 font-medium transition">
            Contact
          </Link>

          {isLoggedIn ? (
            <div className="flex items-center space-x-4">
              <span className="text-white font-medium">Hi, {username}!</span>
              <button
                onClick={logout}
                className="px-4 py-2 bg-red-500 rounded-lg text-white hover:bg-red-600 transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link 
              to="/login" 
              className="px-5 py-2 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white rounded-lg shadow-md hover:opacity-90 transition"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <details className="relative">
            <summary className="px-3 py-2 bg-gray-800 text-white rounded-md cursor-pointer select-none">
              ☰ Menu
            </summary>
            <ul className="absolute right-0 mt-2 w-48 bg-gray-900 rounded-lg shadow-lg p-2 space-y-2 border border-gray-700">
              <li>
                <Link to="/about" className="block px-3 py-2 rounded-md text-gray-300 hover:bg-gray-800 hover:text-pink-400">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="block px-3 py-2 rounded-md text-gray-300 hover:bg-gray-800 hover:text-purple-400">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="block px-3 py-2 rounded-md text-gray-300 hover:bg-gray-800 hover:text-blue-400">
                  Contact
                </Link>
              </li>
              <li>
                {isLoggedIn ? (
                  <div className="flex flex-col space-y-2 px-3 py-2">
                    <span className="text-white font-medium">Hi, {username}!</span>
                    <button
                      onClick={logout}
                      className="px-3 py-1 bg-red-500 rounded-lg text-white hover:bg-red-600 transition"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <Link 
                    to="/login" 
                    className="block px-3 py-2 rounded-md bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white text-center"
                  >
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </details>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
