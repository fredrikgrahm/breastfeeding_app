import React from 'react';
import { useTheme } from './ThemeContext';
import './styles.css';

export default function Settings() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="settings-container">
      <button className="settings-button" onClick={toggleTheme}>
        { theme === 'pinkish-light' ? 'Switch to Dark Mode' : 'Switch to Light Mode' }
      </button>
    </div>
  );
}
