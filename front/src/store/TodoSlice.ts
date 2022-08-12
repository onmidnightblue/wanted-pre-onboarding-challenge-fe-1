import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    todoDetail: {},
  },
  reducers: {
    replaceTodo(state, action) {
      state.todos = action.payload.todos;
    },
    replaceTodoDetail(state, action) {
      state.todoDetail = action.payload.todoDetail;
    },
  },
});

export const todoActions = todoSlice.actions;

export default todoSlice.reducer;
