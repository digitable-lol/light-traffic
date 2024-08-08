import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProjectPage from "./pages/project/ProjectPage.tsx";
import "./App.css";
import ReportPage from "./pages/report/ReportPage.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProjectPage />} />
        <Route path="/report" element={<ReportPage />} />
        <Route path="*" element={<h3>404</h3>} />
      </Routes>
    </Router>
  );
}

export default App;
