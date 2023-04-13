import React, { createContext, useContext } from 'react'

export const MainContext = createContext();

export const ContextProvider = ({ children }) => {

  return <MainContext.Provider>{children}</MainContext.Provider>;
};