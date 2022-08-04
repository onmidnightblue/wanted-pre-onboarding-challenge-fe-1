import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    changed: false,
  },
  reducers: {
    replaceTodo(state, action) {
      state.todos = action.payload.todos;
    },
    // addTodo(state, action) {
    //   const newTodo = action.payload;
    //   state.changed = true;
    //   state.todos.push({
    //     title: newTodo.title,
    //     content: newTodo.content,
    //     id: Math.floor(Math.random()),
    //   });
    // },
    modifyTodo(state, action) {
      const modifyTodo = action.payload;
      state.changed = true;
      console.log(modifyTodo);
    },
    deleteTodo(state, action) {
      const id = action.payload;
      state.changed = true;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
  },
});

export const todoActions = todoSlice.actions;

export default todoSlice.reducer;
