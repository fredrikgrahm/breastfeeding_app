import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div id="bottomNavBar">
      <button className="navButton" onClick={() => navigate('/')}>Start</button>
      <button className="navButton" onClick={() => navigate('/history')}>History</button>
      <button className="navButton" onClick={() => navigate('/settings')}>Settings</button>
    </div>
  );
}