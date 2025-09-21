import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignupPage from "./SignupPage";
import LoginPage from "./LoginPage";
import ResumeBuilder from "./ResumeBuilder"; // import resume builder

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Default route → send to login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Auth routes */}
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Resume Builder route */}
        <Route path="/resume-builder" element={<ResumeBuilder />} />

        {/* Fallback for unknown routes */}
        <Route path="*" element={<h2 style={{ textAlign: "center" }}>404 - Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}
