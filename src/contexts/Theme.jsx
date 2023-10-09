import React from "react";
import { useContext } from "react";
import { useState } from "react";

const ThemeContext = React.createContext("default");

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("default");
  const toggleTheme = () => setTheme(theme === "default" ? "dark" : "default");
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
