import { useContext } from "react";
import { todoContext } from "./ToDoProvider";

export const useTodos = () => {
  const context = useContext(todoContext);
  if (context) {
    return context;
  } else {
    alert("useTodos não está dentro do ToDoProvider");
  }
};
