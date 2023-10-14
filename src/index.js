import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from './components/ThemeContext';  // Import ThemeProvider

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>  {/* Wrap the App component */}
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
