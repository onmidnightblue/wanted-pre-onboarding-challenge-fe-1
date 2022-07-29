import React, { useReducer } from "react";

export const TodoContext = React.createContext({
  todos: [],
  changed: false,
});

const defaultTodo = React.createContext({
  todos: [],
  changed: false,
});

const todoReducer = (state, action) => {
  switch (action.type) {
    case "REPLACE":
      return (state.todos = action.payload.todos);
    case "ADD":
      const newTodo = action.payload;
      state.changed = true;
      state.todos.push({
        id: newTodo.id,
        title: newTodo.title,
        content: newTodo.content,
      });
      return;
    case "MODIFY":
      const modifyTodo = action.payload;
      state.changed = true;
      const existingTodo = state.todos.find((todo) => todo.id === id);
      state.todo[existingTodo].title = modifyTodo.title;
      state.todo[existingTodo].content = modifyTodo.content;
      return;
    case "DELETE":
      const id = action.payload;
      state.changed = true;
      state.todos = state.todos.filter((todo) => todo.id !== id);
      return;
    default:
      throw new Error(`error: ${action.type}`);
  }
};

const TodoProvider = (props) => {
  const [state, dispatch] = useReducer(todoReducer, defaultTodo);

  return <TodoContext.Provider>{props.children}</TodoContext.Provider>;
};

export default TodoProvider;
