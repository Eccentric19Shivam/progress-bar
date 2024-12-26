import  { useState } from "react";
import ProgressBar from "./assets/ProgressBar";

const App = () => {
  const [progress, setProgress] = useState(0);

  const updateProgress = () => {
    setProgress((prevProgress) => (prevProgress + 10 > 100 ? 0 : prevProgress + 10));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Full viewport height
        width: "100vw", // Full viewport width
        backgroundColor: "#ffffff",
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "90%",
          maxWidth: "500px", // Max width for larger screens
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#f8f9fa", // Light gray background for the card
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "24px", marginBottom: "20px", color: "#333" }}>Progress Bar</h1>
        <ProgressBar progress={progress} />
        <button
          onClick={updateProgress}
          style={{
            marginTop: "20px",
            padding: "12px 24px",
            fontSize: "16px",
            fontWeight: "600",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
        >
          Increase Progress
        </button>
      </div>
    </div>
  );
};

export default App;
