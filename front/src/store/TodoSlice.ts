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
    replaceTodo(state, action: PayloadAction<{todos: TodoDataType[]}>) {
      state.todos = action.payload.todos;
    },
    replaceTodoDetail(state, action: PayloadAction<{todoDetail: TodoDataType | null}>) {
      state.todoDetail = action.payload.todoDetail;
    },
  },
});

export const todoActions = todoSlice.actions;

export default todoSlice.reducer;
