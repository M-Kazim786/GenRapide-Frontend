import React from "react";

function ResultMessage({ score, missingExperience }) {
  let message = "";

  if (score < 30) {
    message = "This candidate is not suitable.";
  } else if (score >= 30 && score <= 50) {
    message = "Please review candidate in detail.";
  } else if (score > 50) {
    message = `Candidate is a good fit. Missing experience: ${missingExperience}`;
  }

  return (
    <div>
      <h2>Score: {score}%</h2>
      <p>{message}</p>
    </div>
  );
}

export default ResultMessage;
