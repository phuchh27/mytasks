"use client";

import React, { createContext, useState, useContext, useEffect } from "react";
import themes from "./themes";
import { Children } from "react";
import axios from "axios";
import { set } from "mongoose";
import toast from "react-hot-toast";

export const GlobalContext = createContext();
export const GlobalUpodateContext = createContext();

export const Globalprovider = ({ children }) => {
  const [selectedTheme, setSelectedTheme] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const theme = themes[selectedTheme];

  const [tasks, setTasks] = useState([]);

  const allTasks = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get("/api/tasks");

      setTasks(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    allTasks();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        theme,
        tasks,
      }}
    >
      <GlobalUpodateContext.Provider value={{}}>
        {children}
      </GlobalUpodateContext.Provider>
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalContext);
export const useGlobalUpdate = () => useContext(GlobalUpodateContext);
