import React, { createContext, useContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Initialize with 'pinkish-light' to align with your toggle function
  const [theme, setTheme] = useState('pinkish-light');
  
  const toggleTheme = () => {
    setTheme((prevTheme) => prevTheme === 'pinkish-light' ? 'purple-dark' : 'pinkish-light');
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
