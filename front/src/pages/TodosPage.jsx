import React from "react";
import Todos from "../components/Todo/Todos";
import TodoProvider from "../store/TodoContext";

const TodosPage = () => {
  return (
    <TodoProvider>
      <Todos />
    </TodoProvider>
  );
};

export default TodosPage;
