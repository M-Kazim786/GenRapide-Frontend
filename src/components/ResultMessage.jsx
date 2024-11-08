import React, { useState } from "react";
import { ArrowsPointingOutIcon, DocumentArrowDownIcon } from "@heroicons/react/24/outline";

function ResultMessage({ matchPercentage, finalResult }) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className={`bg-[#1E1E1E] rounded-lg p-4 m-0 transition-all duration-300 ${
      isFullscreen ? "fixed top-0 left-0 w-full h-full z-50 p-6" : ""
    }`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium text-[#cccfd0]">Result</h2>
        <div className="flex items-center space-x-2">
          <button
            onClick={toggleFullscreen}
            className="hover:text-white transition-colors"
          >
            <ArrowsPointingOutIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="text-[#cccfd0] space-y-2">
        {matchPercentage !== undefined && (
          <p className="font-medium">Match Percentage: {matchPercentage}%</p>
        )}
        {finalResult && (
          <div className="whitespace-pre-line">
            <strong>Final Result:</strong> {finalResult}
          </div>
        )}
      </div>
    </div>
  );
}

export default ResultMessage;
