import { useState, useEffect, createContext, useContext } from "react";

export const ThemeContext = createContext(null);
export const useTheme = () => useContext(ThemeContext);

const ThemeDataProvider = ({ children }) => {
  const [theme, seTtheme] = useState("dark");
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const handleTheme = () => {
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches) // check the media is dark or not
      ) {
        seTtheme("dark");
        const htmlElement = document.querySelector("html");
        htmlElement?.classList.remove("light");
        htmlElement?.classList.add("dark");
      } else {
        seTtheme("light");
        const removeClass = document.querySelector("html");
        removeClass?.classList.remove("dark");
        removeClass?.classList.add("light");
      }
    };
    handleTheme();
  }, [theme]);

  const toggleTheme = () => {
    if (theme == "dark") {
      localStorage.theme = "light";
      seTtheme("light");
    } else {
      localStorage.theme = "dark";
      seTtheme("dark");
    }
  };

  const value = { theme, menu, setMenu, toggleTheme };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
export default ThemeDataProvider;
