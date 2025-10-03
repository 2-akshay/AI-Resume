import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 px-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-2xl border border-white/20 animate-fade-in">
        {/* Title */}
        <h2 className="text-2xl font-bold text-white text-center mb-4">📬 Contact Us</h2>

        {/* Contact Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-md bg-white/20 text-white placeholder-white/70 border border-white/30 
                       focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
            required
          />
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full p-3 rounded-md bg-white/20 text-white placeholder-white/70 border border-white/30 
                       focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
            required
          />
          <textarea
            rows="4"
            placeholder="Your message..."
            className="w-full p-3 rounded-md bg-white/20 text-white placeholder-white/70 border border-white/30 
                       resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-teal-400 text-black font-semibold py-2 rounded-md 
                       hover:opacity-90 transition duration-300"
          >
            ✉️ Send Message
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 border-t border-white/20"></div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 text-white text-xl">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-sky-400 transition">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition">
            <FaLinkedin />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-gray-300 transition">
            <FaGithub />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-400 transition">
            <FaInstagram />
          </a>
        </div>

        {/* Footer Note */}
        <p className="text-center text-gray-400 text-sm mt-4">
          © {new Date().getFullYear()} AI Resume Maker. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Contact;
