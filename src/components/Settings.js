import React from 'react';
import { useTheme } from './ThemeContext';
import './styles.css';

export default function Settings() {
  const { theme, setTheme } = useTheme();

  return (
    
    <div className="app-container">
      
      <label>Theme: </label>
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
}
