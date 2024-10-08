import { createContext, useLayoutEffect, useState } from "react";
import PropTypes from "prop-types";

export const BgContext = createContext({});

export const BgProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [colorScheme, setColorScheme] = useState({
    bg: "bg-white",
    bgopacity: "bg-opacity-10",
    border: "border-black",
    text: "text-white",
    color: "gray",
  });

  useLayoutEffect(() => {
    if (isDarkMode) {
      let newColorSchema = {
        bg: "bg-white",
        bgopacity: "bg-opacity-10",
        border: "border-black",
        text: "text-white",
        color: "gray",
      };
      setColorScheme(newColorSchema);
    } else {
      let newColorSchema = {
        bg: "bg-white",
        opacity: "bg-opacity-5",
        border: "border-gray-200",
        text: "text-black",
        color: "black",
      };
      setColorScheme(newColorSchema);
    }
  }, [isDarkMode]);

  return (
    <BgContext.Provider value={{ isDarkMode, colorScheme, setIsDarkMode }}>
      {children}
    </BgContext.Provider>
  );
};

BgProvider.propTypes = {
  children: PropTypes.node,
};
