import React from 'react';

function Services() {
  const features = [
    {
      title: '⚡ Instant Resume Generation',
      description: 'Generate a professional resume in seconds using AI from a simple description.',
    },
    {
      title: '🎨 Clean and Modern Templates',
      description: 'Your resume will be designed with clean, recruiter-friendly formatting — no manual editing needed.',
    },
    {
      title: '📄 Download as PDF',
      description: 'Easily download your generated resume as a print-ready PDF.',
    },
    {
      title: '🛠️ Customizable',
      description: 'Edit your resume contents, tweak sections, or regenerate — full control at your fingertips.',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-4 py-16 flex flex-col items-center justify-center">
      <div className="w-full max-w-5xl text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">🧰 Our Services</h1>
        <p className="text-gray-400 mb-10">
          We provide smart tools to help you build your resume effortlessly.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-xl border border-gray-700 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
