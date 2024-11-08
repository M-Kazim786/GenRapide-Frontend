import React, { useState } from "react";
import { ArrowsPointingOutIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { CubeIcon } from "@heroicons/react/24/solid";
import ResultMessage from "./ResultMessage.jsx";
import "boxicons/css/boxicons.min.css";

export default function UploadForm({
  onUpload,
  isLoading,
  matchPercentage,
  resultMessage,
  finalResult,
}) {
  const [requirementsFile, setRequirementsFile] = useState(null);
  const [resumeFile, setResumeFile] = useState(null);
  const [requirementsText, setRequirementsText] = useState("");
  const [resumeText, setResumeText] = useState("");
  const [includeRequirements, setIncludeRequirements] = useState(true);
  const [expandRequirements, setExpandRequirements] = useState(false);
  const [expandResume, setExpandResume] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    if (includeRequirements) {
      if (requirementsText)
        formData.append("requirementsText", requirementsText);
      if (requirementsFile)
        formData.append("requirementsFile", requirementsFile);
    }

    if (resumeText) formData.append("resumeText", resumeText);
    if (resumeFile) formData.append("resumeFile", resumeFile);

    for (const [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    onUpload(formData);
  };

  const handleCancelProcessing = () => {
    // cancel functionality here...
    console.log("Processing cancelled");
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
                  includeRequirements
                    ? "translate-x-4 bg-blue-600"
                    : "translate-x-0 bg-white"
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
              <div
                className={`bg-[#1E1E1E] rounded-lg p-4 transition-all duration-300 ${
                  expandRequirements
                    ? "fixed top-0 left-0 w-full h-full z-50 bg-[#1E1E1E] p-6"
                    : ""
                }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-lg font-medium">Requirements</h2>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-400">
                      {wordCount(requirementsText)} Words
                    </span>
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
                      value={requirementsText}
                      onChange={(e) => setRequirementsText(e.target.value)}
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
                    value={requirementsText}
                    onChange={(e) => setRequirementsText(e.target.value)}
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

            <div
              className={`bg-[#1E1E1E] rounded-lg p-4 transition-all duration-300 ${
                expandResume
                  ? "fixed top-0 left-0 w-full h-full z-50 bg-[#1E1E1E] p-6"
                  : ""
              }`}
            >
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-medium">Projects / Resume</h2>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-400">
                    {wordCount(resumeText)} Words
                  </span>
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
                    value={resumeText}
                    onChange={(e) => setResumeText(e.target.value)}
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
                  value={resumeText}
                  onChange={(e) => setResumeText(e.target.value)}
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

          {isLoading ? (
            <div className="bg-[#1E1E1E] rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <CubeIcon className="h-6 w-6 text-orange-500 animate-pulse" />
                  <span className="text-[#cccfd0]">
                    Generating Content (Analyze)
                  </span>
                </div>
                <button
                  onClick={handleCancelProcessing}
                  className="px-4 py-2 bg-[#232428] text-[#cccfd0] rounded hover:bg-[#2a2b2f] transition-colors"
                >
                  Cancel Processing
                </button>
              </div>
            </div>
          ) : (
            matchPercentage !== null && (
              <ResultMessage
                matchPercentage={matchPercentage}
                finalResult={finalResult}
              />
            )
          )}

          <div className="bg-[#1E1E1E] rounded-lg p-4">
            <h2 className="text-lg font-medium mb-2">Actions</h2>
            <div className="flex items-center space-x-2">
              <div className="relative flex-grow">
                <select
                  className="w-full bg-[#232428] text-white py-2 px-4 pr-8 rounded appearance-none focus:outline-none cursor-pointer"
                  defaultValue="Analyze"
                >
                  <option value="Analyze">Analyze</option>
                  <option value="Check Plagiarism">Check Plagiarism</option>
                </select>
                <div className="absolute right-0 top-0 bottom-0 flex items-center px-3 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Analyze
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
