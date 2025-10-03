import React from "react";

function About() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex items-center justify-center px-6 py-16">
      <div className="max-w-5xl text-center">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-teal-300 text-transparent bg-clip-text">
          🙋‍♂️ About Us
        </h1>

        {/* Intro */}
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Our mission is simple — to help job seekers build{" "}
          <span className="text-blue-400 font-medium">professional, stunning resumes</span>{" "}
          without the hassle of formatting. Whether you're a student, fresher, or experienced
          professional, our{" "}
          <span className="text-teal-400 font-medium">AI-powered resume generator</span> creates
          resumes in seconds from just a short description of your background.
        </p>

        <p className="text-gray-300 text-lg leading-relaxed mb-10">
          We believe everyone deserves a chance to make a{" "}
          <span className="text-blue-400">powerful first impression</span>. With a user-friendly
          interface and instant results, our tool saves time so you can focus on landing your dream job.
        </p>

        {/* How it Works */}
        <div className="my-10 text-left bg-gray-900/60 backdrop-blur-md rounded-2xl p-6 border border-gray-700 shadow-lg hover:shadow-blue-500/20 transition">
          <h2 className="text-2xl font-semibold mb-4 text-white">🚀 How It Works</h2>
          <ul className="list-disc list-inside text-gray-300 text-base space-y-2">
            <li>Type a brief description (skills, experience, goals).</li>
            <li>Our AI (OpenAI or custom models) generates tailored resume content.</li>
            <li>Preview your resume instantly, edit sections as needed.</li>
            <li>Download as PDF or share with recruiters in one click.</li>
          </ul>
        </div>

        {/* Vision */}
        <div className="my-10 text-left bg-gray-900/60 backdrop-blur-md rounded-2xl p-6 border border-gray-700 shadow-lg hover:shadow-purple-500/20 transition">
          <h2 className="text-2xl font-semibold mb-4 text-white">💡 Our Vision</h2>
          <p className="text-gray-300 text-base leading-relaxed">
            To become the{" "}
            <span className="text-teal-400 font-medium">
              #1 AI-powered resume builder
            </span>{" "}
            for students, job seekers, and professionals worldwide —{" "}
            <span className="text-blue-400">fast, free, and future-ready</span>.
          </p>
        </div>

        {/* Technologies */}
        <div className="my-10 text-left bg-gray-900/60 backdrop-blur-md rounded-2xl p-6 border border-gray-700 shadow-lg hover:shadow-teal-500/20 transition">
          <h2 className="text-2xl font-semibold mb-6 text-white">🔍 Core Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-300 text-sm">
            {[
              "React.js",
              "Tailwind CSS",
              "Node.js",
              "OpenAI API",
              "Spring Boot (optional)",
              "PDF Generator",
            ].map((tech, idx) => (
              <span
                key={idx}
                className="bg-gray-800/60 px-3 py-2 rounded-lg text-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 hover:text-black font-medium transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
