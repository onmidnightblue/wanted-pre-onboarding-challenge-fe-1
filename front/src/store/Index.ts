import { useDispatch } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./TodoSlice";

const store = configureStore({
  reducer: {
    todos: TodoSlice,
  },
});


export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch: () => AppDispatch = useDispatch

export default store
