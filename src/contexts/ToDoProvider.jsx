import { createContext } from "react";

export const todoContext = createContext();

export const ToDoProvider = ({ children }) => {
  return (
    <todoContext.Provider value={underfined}>{children}</todoContext.Provider>
  );
};
