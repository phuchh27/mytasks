"use client";

import React, { createContext, useState, useContext } from "react";
import themes from "./themes";
import { Children } from "react";

export const GlobalContext = createContext();
export const GlobalUpodateContext = createContext();

export const Globalprovider = ({ children }) => {
  const [selectedTheme, setSelectedTheme] = useState(0);
  const theme = themes[selectedTheme];

  return (
    <GlobalContext.Provider
      value={{
        theme,
      }}
    >
      <GlobalUpodateContext.Provider value={{}}>
        {children}
      </GlobalUpodateContext.Provider>
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalContext);
export const useGlobalUpdate = () =>useContext(GlobalUpodateContext)
