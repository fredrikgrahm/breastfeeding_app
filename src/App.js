import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FeedingApp from "./components/FeedingApp";
import History from "./components/History";
import Navbar from "./components/Navbar";
import Settings from "./components/Settings";
import { ThemeProvider, useTheme } from "./components/ThemeContext";

export default function App() {
  return (
    <ThemeProvider> {/* ThemeProvider wraps everything */}
      <AppContent />
    </ThemeProvider>
  );
}

// New component AppContent where you can use useTheme safely
function AppContent() {
  const { theme } = useTheme();
  return (
    <div className={`app-container ${theme}`}>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<FeedingApp />} />
          <Route path="/history" element={<History />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </div>
  );
}

