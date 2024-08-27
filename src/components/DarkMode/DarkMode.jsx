import { createContext, useEffect, useState } from "react";

const DarkMode = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(darkMode === "light" ? "dark" : "light");
    root.classList.add(darkMode);
  }, [darkMode]);

  return (
    <DarkMode.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkMode.Provider>
  );
};

export default DarkMode;
