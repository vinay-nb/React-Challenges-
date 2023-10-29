import { useEffect, useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) setTheme(theme);
  }, []);

  const toggleTheme = () => {
    if (theme === "dark-theme") setTheme("light-theme");
    else setTheme("dark-theme");
  };

  return { theme, toggleTheme };
};

export default useTheme;
