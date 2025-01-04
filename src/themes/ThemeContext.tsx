import React, { createContext, useState, useCallback } from 'react';
import { themes, Theme } from './themes';

export const ThemeContext = createContext<Theme>(themes.light);

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes.light);

  const toggleTheme = useCallback(() => {
    setCurrentTheme(prev => prev === themes.light ? themes.dark : themes.light);
  }, []);

  const value = {
    ...currentTheme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
