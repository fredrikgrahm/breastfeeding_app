// History.js
import React from 'react';
import './styles.css';

export default function History() {
  const feedingHistory = JSON.parse(localStorage.getItem('feedingHistory')) || [];

  return (
    <div className="app-container">
      <h2>Feeding History</h2>
      <ul>
        {feedingHistory.map(session => (
          <li key={session.id}>
            Date: {new Date(session.date).toLocaleString()}, 
            Duration: {session.duration}s, 
            Side: {session.side}
          </li>
        ))}
      </ul>
    </div>
    
  );
}