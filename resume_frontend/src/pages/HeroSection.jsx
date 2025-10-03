import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row justify-center items-center px-6 md:px-16 overflow-hidden bg-black text-white">
      
      {/* Starry Night Background */}
      <div className="absolute inset-0 bg-black overflow-hidden">
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="shooting-star"></div>
      </div>

      {/* Left Content */}
      <div className="text-center md:text-left max-w-xl z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-pink-500 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
          Build Your Resume with AI Instantly
        </h1>
        <p className="text-base md:text-lg text-gray-300 mb-10">
            Create a professional resume in minutes. <br />
          Sleek, modern, and ATS-ready templates. <br />
          Let AI handle the formatting while you focus on your career goals.
        </p>
        <Link
          to="/GenerateResume"
          className="px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 hover:opacity-90 text-white rounded-2xl font-semibold text-lg transition duration-300 shadow-lg"
        >
          🚀 Start Now — Free
        </Link>
      </div>

      
      {/* Right Content - Product Info Card */}
<div className="relative mt-12 md:mt-0 md:ml-16 w-full md:w-1/2 flex justify-center z-10">
  <div className="group bg-gray-900 bg-opacity-80 shadow-2xl rounded-2xl p-6 w-80 h-[420px] border border-gray-700 backdrop-blur-md relative overflow-hidden 
    transform transition duration-700 hover:rotate-3 hover:-translate-y-3 hover:shadow-[0_0_40px_rgba(168,85,247,0.6)]">
    
    <h2 className="text-xl font-bold mb-4 text-gradient">✨ Why Choose Our AI Resume Builder?</h2>
    <ul className="space-y-4 text-sm text-gray-300">
      <li>⚡ Instant resume generation with AI</li>
      <li>🎨 Professionally designed templates</li>
      <li>📄 Export to PDF in one click</li>
      <li>🔍 Optimized for ATS (Job Portals)</li>
      <li>🌐 100% Free & Easy to Use</li>
    </ul>

    <div className="absolute bottom-4 left-0 w-full text-center">
      <button className="bg-gradient-to-r from-pink-600 via-purple-500 to-blue-600 text-white px-4 py-2 rounded-xl shadow-md hover:opacity-90 transition">
        Learn More
      </button>
          </div>
        </div>
      </div>

      {/* Rainbow Glow Effects */}
      <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 blur-3xl opacity-30 animate-bounce-slow"></div>
    </section>
  );
};

export default HeroSection;