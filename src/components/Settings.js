import React, { useState } from 'react';
import { useTheme } from './ThemeContext';
import './styles.css';

export default function Settings() {
  const { theme, toggleTheme } = useTheme();
  const [notifications, setNotifications] = useState(true);
  const [units, setUnits] = useState('Metric');
  const [language, setLanguage] = useState('English');
  const [backup, setBackup] = useState(true);
  const [privacy, setPrivacy] = useState(false);

  return (
    <div className="settings-container">
      <button className="settings-button" onClick={toggleTheme}>
        { theme === 'pinkish-light' ? 'Switch to Dark Mode' : 'Switch to Light Mode' }
      </button>
      
      <label>
        Enable Notifications:
        <input type="checkbox" checked={notifications} onChange={() => setNotifications(!notifications)} />
      </label>

      <label>
        Measurement Units:
        <select value={units} onChange={(e) => setUnits(e.target.value)}>
          <option value="Metric">Metric</option>
          <option value="Imperial">Imperial</option>
        </select>
      </label>

      <label>
        Language:
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="English">English</option>
          <option value="Swedish">Swedish</option>
        </select>
      </label>

      <label>
        Enable Data Backup:
        <input type="checkbox" checked={backup} onChange={() => setBackup(!backup)} />
      </label>

      <label>
        Enable Privacy Mode:
        <input type="checkbox" checked={privacy} onChange={() => setPrivacy(!privacy)} />
      </label>
    </div>
  );
}
