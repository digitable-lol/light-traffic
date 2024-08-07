import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProjectPage from "./pages/project/ProjectPage.tsx";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProjectPage />} />
        <Route path="*" element={<h3>404</h3>} />
      </Routes>
    </Router>
  );
}

export default App;
