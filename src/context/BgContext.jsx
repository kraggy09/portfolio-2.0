import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const BgContext = createContext({});

export const BgProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [colorScheme, setColorScheme] = useState();

  return (
    <BgContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </BgContext.Provider>
  );
};

BgProvider.propTypes = {
  children: PropTypes.node,
};
