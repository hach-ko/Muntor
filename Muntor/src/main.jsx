import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Load dark mode preference from localStorage before rendering
const storedMode = localStorage.getItem("darkMode");
const isDarkMode = storedMode ? storedMode === "true" : true; // Default to dark mode

// Apply the correct mode class to the body before rendering
if (isDarkMode) {
  document.body.classList.add("dark-mode");
} else {
  document.body.classList.remove("dark-mode");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);