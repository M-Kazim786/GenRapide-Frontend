import React, { useState } from "react";
import { ArrowsPointingOutIcon, XMarkIcon } from "@heroicons/react/24/outline";
import 'boxicons/css/boxicons.min.css';

export default function UploadForm({ onUpload }) {
  const [requirementsFile, setRequirementsFile] = useState(null);
  const [resumeFile, setResumeFile] = useState(null);
  const [requirements, setRequirements] = useState("");
  const [resume, setResume] = useState("");
  const [includeRequirements, setIncludeRequirements] = useState(true);
  const [expandRequirements, setExpandRequirements] = useState(false);
  const [expandResume, setExpandResume] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    if (requirementsFile) {
      formData.append("requirementsFile", requirementsFile);
    } else if (requirements) {
      formData.append("requirements", requirements);
    }

    if (resumeFile) {
      formData.append("resumeFile", resumeFile);
    } else if (resume) {
      formData.append("resume", resume);
    }

    // Log FormData entries
    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    onUpload(formData);
  };

  const wordCount = (text) => {
    return text.trim() ? text.trim().split(/\s+/).length : 0;
  };

  return (
    <div className="min-h-screen bg-[#101115] text-[#cccfd0] p-6 flex justify-center">
      <div className="max-w-4xl w-full z-50 relative">
        <div className="flex justify-between items-center mb-6 flex-wrap">
          <h1 className="text-1xl font-bold">PRORESHAPE</h1>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <span className="text-sm">Include requirements</span>
            <div className="relative inline-block w-10 mr-2 align-middle select-none">
              <input
                type="checkbox"
                name="toggle"
                id="toggle"
                className={`toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer transition-transform duration-300 ease-in-out ${
                  includeRequirements ? "translate-x-4 bg-blue-600" : "translate-x-0 bg-white"
                }`}
                checked={includeRequirements}
                onChange={() => setIncludeRequirements(!includeRequirements)}
              />
              <label
                htmlFor="toggle"
                className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer transition-colors duration-300 ${
                  includeRequirements ? "bg-blue-600" : "bg-gray-300"
                }`}
              ></label>
            </div>
          </div>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {includeRequirements && (
              <div className={`bg-[#1E1E1E] rounded-lg p-4 transition-all duration-300 ${expandRequirements ? "fixed top-0 left-0 w-full h-full z-50 bg-[#1E1E1E] p-6" : ""}`}>
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-lg font-medium">Requirements</h2>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-400">{wordCount(requirements)} Words</span> {/* Updated */}
                    <button
                      type="button"
                      onClick={() => setExpandRequirements(!expandRequirements)}
                      className="text-gray-400 hover:text-white"
                    >
                      <ArrowsPointingOutIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                {expandRequirements ? (
                  <>
                    <textarea
                      value={requirements}
                      onChange={(e) => setRequirements(e.target.value)}
                      placeholder="Enter Your Requirements."
                      className="w-full h-[calc(100vh-200px)] bg-[#1E1E1E] text-white placeholder-gray-500 resize-none focus:outline-none"
                    ></textarea>
                    <button
                      type="button"
                      onClick={() => setExpandRequirements(false)}
                      className="text-gray-400 hover:text-white mt-2"
                    >
                      <XMarkIcon className="w-5 h-5" />
                    </button>
                  </>
                ) : (
                  <textarea
                    value={requirements}
                    onChange={(e) => setRequirements(e.target.value)}
                    placeholder="Enter Your Requirements."
                    className="w-full h-64 bg-[#1E1E1E] text-white placeholder-gray-500 resize-none focus:outline-none"
                  ></textarea>
                )}
                <input
                  type="file"
                  accept=".pdf"
                  onChange={(e) => setRequirementsFile(e.target.files[0])}
                  className="mt-2 text-sm text-gray-400"
                />
              </div>
            )}

            <div className={`bg-[#1E1E1E] rounded-lg p-4 transition-all duration-300 ${expandResume ? "fixed top-0 left-0 w-full h-full z-50 bg-[#1E1E1E] p-6" : ""}`}>
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-medium">Projects / Resume</h2>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-400">{wordCount(resume)} Words</span> {/* Updated */}
                  <button
                    type="button"
                    onClick={() => setExpandResume(!expandResume)}
                    className="text-gray-400 hover:text-white"
                  >
                    <ArrowsPointingOutIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
              {expandResume ? (
                <>
                  <textarea
                    value={resume}
                    onChange={(e) => setResume(e.target.value)}
                    placeholder="Enter Your Projects."
                    className="w-full h-[calc(100vh-200px)] bg-[#1E1E1E] text-white placeholder-gray-500 resize-none focus:outline-none"
                  ></textarea>
                  <button
                    type="button"
                    onClick={() => setExpandResume(false)}
                    className="text-gray-400 hover:text-white mt-2"
                  >
                    <XMarkIcon className="w-5 h-5" />
                  </button>
                </>
              ) : (
                <textarea
                  value={resume}
                  onChange={(e) => setResume(e.target.value)}
                  placeholder="Enter Your Projects."
                  className="w-full h-64 bg-[#1E1E1E] text-white placeholder-gray-500 resize-none focus:outline-none"
                ></textarea>
              )}
              <input
                type="file"
                accept=".pdf"
                onChange={(e) => setResumeFile(e.target.files[0])}
                className="mt-2 text-sm text-gray-400"
              />
            </div>
          </div>

          <div className="bg-[#1E1E1E] rounded-lg p-4">
            <h2 className="text-lg font-medium mb-2">Actions</h2>
            <div className="flex items-center space-x-2">
              <div className="relative flex-grow">
                <select
                  className="w-full bg-[#232428] text-white py-2 px-4 pr-8 rounded appearance-none focus:outline-none cursor-pointer"
                  defaultValue="Analyze"
                >
                  <option value="Analyze">Analyze</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
              <button
                onClick={handleSubmit}
                type="button"
                className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded"
              >
                <i className="bx bx-send w-5 h-5 -rotate-33"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
