import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FeedingApp from './components/FeedingApp';
import History from './components/History';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<FeedingApp />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  );
}
