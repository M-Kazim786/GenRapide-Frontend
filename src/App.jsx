import axios from 'axios'
import React, { useState } from "react";
import UploadForm from "./components/UploadForm.jsx";
import ResultMessage from "./components/ResultMessage";


function App() {
  const [score, setScore] = useState(null);   // Store score from backend
  const [missingExperience, setMissingExperience] = useState("");   // Missing experience info

  // const backendUrl=import.meta.env.VITE_BACKEND_URL;


  // const handleUpload = async (formData) => {
  //   console.log("working");

  //   try {
  //     const response = await axios.post(`/api/v1/modules/proreshape/submit`, formData)

  //     const data = response.data;

  //     // Assuming `setScore` and `setMissingExperience` are state setters
  //     setScore(data.score);
  //     setMissingExperience(data.missingExperience || "");
  //   } catch (error) {
  //     console.error("erorrrrrrrrrr");
  //   }
  // };


  const handleUpload = async (formData) => {
    console.log("woring");

    try {
      const response = await axios.post("/api/v1/modules/proreshape/submit", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });

      const data = response.data;
      console.log(data);

      setScore(data.score);
      setMissingExperience(data.missingExperience || "");
    } catch (error) {
      console.error("Error uploading data:", error);
    }
  };










  return (
    <div className="App">
      {/* <h1>Resume Scoring System</h1> */}
      <UploadForm onUpload={handleUpload} />
      {score !== null && (
        <ResultMessage score={score} missingExperience={missingExperience} />
      )}
    </div>
  );
}

export default App;
