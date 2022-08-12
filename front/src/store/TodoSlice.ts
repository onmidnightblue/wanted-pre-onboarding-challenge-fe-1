import { TodoState, TodoDetailState } from './../models/todo';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    todoDetail: {},
  },
  reducers: {
    replaceTodo(state: TodoState, action: PayloadAction<TodoState>) {
      state.todos = action.payload.todos;
    },
    replaceTodoDetail(state: TodoDetailState, action: PayloadAction<TodoDetailState>) {
      state.todoDetail = action.payload.todoDetail;
    },
  },
});

export const todoActions = todoSlice.actions;

export default todoSlice.reducer;
