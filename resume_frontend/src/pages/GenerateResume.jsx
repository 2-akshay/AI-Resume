import React, { useState } from "react";
import { generateResume } from "../api/ResumeService";
import toast from "react-hot-toast";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import ResumePreview from "./ResumePreview"; // ✅ Preview component

const GenerateResume = () => {
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [resumeData, setResumeData] = useState(null);
  const [showPreview, setShowPreview] = useState(false); // ✅ New state

  // Generate resume from description (JSON)
  const handleGenerate = async (e) => {
    e.preventDefault();
    if (!description) return;
    try {
      setLoading(true);
      const data = await generateResume(description);
      setResumeData(data);
      toast.success("Resume Generated Successfully!", {
        duration: 3000,
        position: "top-center",
      });
    } catch (error) {
      console.error(error);
      toast.error("Error Generating Resume");
    } finally {
      setLoading(false);
      setDescription("");
    }
  };

  const handleClear = () => {
    setDescription("");
    setResumeData(null);
    setShowPreview(false); // ✅ Reset preview also
  };

  // Editable field change
  const handleChangeField = (section, index, field, value) => {
    const updated = { ...resumeData };
    if (section === "personalInformation") {
      updated[section][field] = value;
    } else {
      if (field === null) {
        updated[section][index] = value;
      } else {
        updated[section][index][field] = value;
      }
    }
    setResumeData(updated);
  };

  // Add field dynamically
  const handleAddField = (section) => {
    const updated = { ...resumeData };
    const defaults = {
      experience: { role: "", company: "", duration: "" },
      education: { degree: "", institution: "", year: "" },
      projects: { name: "", description: "" },
      certifications: { title: "", year: "" },
      achievements: { title: "" },
      interests: { hobby: "" },
      languages: { language: "", level: "" },
      skills: "",
    };
    updated[section].push(defaults[section] || {});
    setResumeData(updated);
  };

  // Remove field dynamically
  const handleRemoveField = (section, index) => {
    const updated = { ...resumeData };
    updated[section].splice(index, 1);
    setResumeData(updated);
  };

  return (
   <div className="min-h-screen w-full bg-gradient-to-br from-black via-black to-black-800 text-white flex justify-center items-center px-6 py-16">
  <div className="w-full max-w-6xl backdrop-blur-md bg-black/60 border border-gray-700 rounded-xl shadow-lg p-20">
        <h1 className="text-2xl font-bold text-center text-white mb-3">
          📝 AI Resume Generator
        </h1>
        <p className="text-center text-gray-400 text-sm mb-8">
          Enter a short description of your skills or goals, and AI will create
          a professional resume for you.
        </p>

        {/* 🔹 Show Preview Mode Only */}
        {showPreview ? (
          <>
            <div className="flex gap-4 mb-4">
              <button
                type="button"
                onClick={() => setShowPreview(false)}
                className="flex-1 bg-blue-600 hover:bg-blue-500 py-3 rounded-xl font-semibold"
              >
                🔙 Back to Edit
              </button>

              <PDFDownloadLink
                document={<ResumePreview resumeData={resumeData} />}
                fileName="resume.pdf"
              >
                {({ loading }) =>
                  loading ? (
                    <button className="flex-1 py-3 bg-gray-500 text-white rounded-xl" disabled>
                      Preparing...
                    </button>
                  ) : (
                    <button className="flex-1 py-3 bg-green-600 hover:bg-green-500 rounded-xl font-semibold">
                      ⬇ Download Resume
                    </button>
                  )
                }
              </PDFDownloadLink>
            </div>

            {/* ✅ PDF Preview */}
            <div className="border border-gray-600 rounded-lg overflow-hidden h-[600px] mt-6">
              <PDFViewer width="100%" height="100%">
                <ResumePreview resumeData={resumeData} />
              </PDFViewer>
            </div>
          </>
        ) : (
          <>
            {/* Form */}
            {!loading && !resumeData && (
              <form onSubmit={handleGenerate} className="mb-8 space-y-4">
                <label className="block text-gray-200 font-medium mb-1">
                  Your Description
                </label>
                <textarea
                  className="w-full h-32 p-4 rounded-lg bg-gray-800/60 border border-gray-700 text-white 
                   focus:ring-2 focus:ring-blue-400 focus:outline-none resize-none placeholder-gray-400"
                  placeholder="Write a short summary about your skills, experience, or goals..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={handleClear}
                    className="flex-1 py-2.5 rounded-lg bg-red-600 hover:bg-red-500 transition font-medium"
                  >
                    ❌ Clear
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 py-2.5 rounded-lg bg-gradient-to-r from-blue-500 to-teal-400 
                     hover:opacity-90 transition font-medium text-black"
                  >
                    ⚡ Generate Resume
                  </button>
                </div>
              </form>
            )}

            {/* Loader */}
            {loading && (
              <div className="flex flex-col items-center justify-center py-20">
                <div className="loader ease-linear rounded-full border-8 border-t-8 border-blue-400 h-20 w-20 mb-6"></div>
                <p className="text-gray-300 text-lg">
                  Generating your resume, please wait...
                </p>
              </div>
            )}

            {/* Editable Resume */}
            {resumeData && !loading && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="col-span-1 md:col-span-2 text-center">
                    <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                      🖋 Editable Resume
                    </h2>
                  </div>

                  {/* Personal Info */}
                  <div className="bg-gray-900/60 rounded-xl p-4 border border-gray-700">
                    <h3 className="font-semibold mb-3 text-lg text-blue-300">
                      Personal Information
                    </h3>
                    {Object.keys(resumeData.personalInformation).map((key) => (
                      <input
                        key={key}
                        type="text"
                        value={resumeData.personalInformation[key]}
                        onChange={(e) =>
                          handleChangeField(
                            "personalInformation",
                            null,
                            key,
                            e.target.value
                          )
                        }
                        className="w-full mb-2 p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-1 focus:ring-blue-400"
                        placeholder={key}
                      />
                    ))}
                  </div>

                  {/* Other Sections */}
                  {[
                    "experience",
                    "education",
                    "skills",
                    "certifications",
                    "achievements",
                    "projects",
                    "interests",
                    "languages",
                  ].map(
                    (section) =>
                      resumeData[section] && (
                        <div
                          key={section}
                          className="bg-black-900/60 rounded-xl p-4 border border-gray-700"
                        >
                          <h3 className="font-semibold mb-3 flex justify-between items-center text-lg text-teal-300">
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                            <button
                              type="button"
                              onClick={() => handleAddField(section)}
                              className="text-xs bg-black-700 px-2 py-1 rounded hover:bg-gray-600"
                            >
                              + Add
                            </button>
                          </h3>

                          {resumeData[section].map((item, idx) => (
                            <div
                              key={idx}
                              className="mb-3 p-3 bg-gray-800/80 rounded-lg border border-gray-700 flex flex-col gap-2"
                            >
                              {typeof item === "string" ? (
                                <input
                                  type="text"
                                  value={item}
                                  onChange={(e) =>
                                    handleChangeField(section, idx, null, e.target.value)
                                  }
                                  className="w-full p-3 rounded bg-gray-900 text-white focus:ring-1 focus:ring-teal-400"
                                />
                              ) : (
                                Object.keys(item).map((field) => (
                                  <input
                                    key={field}
                                    type="text"
                                    value={item[field]}
                                    onChange={(e) =>
                                      handleChangeField(section, idx, field, e.target.value)
                                    }
                                    className="w-full p-3 rounded bg-gray-900 text-white focus:ring-1 focus:ring-teal-400"
                                    placeholder={field}
                                  />
                                ))
                              )}
                              <button
                                type="button"
                                onClick={() => handleRemoveField(section, idx)}
                                className="text-gray-400 text-sm self-end hover:text-red-400"
                              >
                                Remove
                              </button>
                            </div>
                          ))}
                        </div>
                      )
                  )}
                </div>

                {/* ✅ Preview + Cancel Buttons */}
                <div className="flex gap-4 mt-6">
                  <button
                    type="button"
                    onClick={() => setShowPreview(true)}
                    className="flex-1 bg-blue-600 hover:bg-blue-500 py-3 rounded-xl font-semibold"
                  >
                    👀 Preview Resume
                  </button>
                  <button
                    type="button"
                    onClick={handleClear}
                    className="flex-1 bg-red-600 hover:bg-red-500 py-3 rounded-xl font-semibold"
                  >
                    Cancel
                  </button>
                </div>
              </>
            )}
          </>
        )}
      </div>

      {/* Loader styles */}
      <style>
        {`
        .loader {
          border-top-color: #38bdf8;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
      `}
      </style>
    </div>
  );
};

export default GenerateResume;
