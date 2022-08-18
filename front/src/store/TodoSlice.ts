import { TodoDataType } from './../models/todosTypes';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ResponseType } from "src/models/todosTypes";

const initialState: ResponseType = {
  todos: [],
  todoDetail: {
    title: "",
    content: "",
    id: "",
    createdAt: "",
    updatedAt: ""
  },
}

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    replaceTodo(state, action: PayloadAction<TodoDataType[]>) {
      state.todos = action.payload;
    },
    replaceTodoDetail(state, action: PayloadAction<TodoDataType>) {
      state.todoDetail = action.payload;
    },
  },
});

export const todoActions = todoSlice.actions;

export default todoSlice.reducer;
