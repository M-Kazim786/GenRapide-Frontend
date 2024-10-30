import axios from 'axios';
import React, { useState } from "react";
import UploadForm from "./components/UploadForm.jsx";
import ResultMessage from "./components/ResultMessage";

function App() {
  const [score, setScore] = useState(null);
  const [missingExperience, setMissingExperience] = useState("");

  // const handleUpload = async (data) => {
  //   try {
  //     const response = await axios.post("/api/v1/rewriter/submit", data, {
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //     });

  //     const responseData = response.data;
  //     console.log("Response data:", responseData);

  //     setScore(responseData.score);
  //     setMissingExperience(responseData.missingExperience || "");
  //   } catch (error) {
  //     console.error("Error uploading data:", error);
  //   }
  // };


  const handleUpload = async (formData) => { // Renamed parameter to formData for clarity
    try {
      const response = await axios.post("/api/v1/rewriter/match", formData, {
        headers: {
          "Content-Type": "multipart/form-data" // Set content type to multipart/form-data
        },
      });

      const responseData = response.data;
      console.log("Response data:", responseData);

      setScore(responseData.score);
      setMissingExperience(responseData.missingExperience || "");
    } catch (error) {
      console.error("Error uploading data:", error);
    }
  };




  return (
    <div className="App">
      <UploadForm onUpload={handleUpload} />
      {score !== null && (
        <ResultMessage score={score} missingExperience={missingExperience} />
      )}
    </div>
  );
}

export default App;
