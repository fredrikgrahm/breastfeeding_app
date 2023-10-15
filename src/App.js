import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FeedingApp from "./components/FeedingApp";
import History from "./components/History";
import Navbar from "./components/Navbar";
import Settings from "./components/Settings";
import { ThemeProvider } from "./components/ThemeContext"; // Make sure it's correctly imported

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<FeedingApp />} />
          <Route path="/history" element={<History />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}



