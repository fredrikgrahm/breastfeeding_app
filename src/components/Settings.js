import React from 'react';
import { useTheme } from './ThemeContext'; // Make sure it's correctly imported
import './styles.css';

export default function Settings() {
  const { theme, toggleTheme } = useTheme(); // Proper destructuring

  return (
    <button onClick={toggleTheme}>
      { theme === 'pinkish-light' ? 'Switch to Dark Mode' : 'Switch to Light Mode' }
    </button>
  );
}
