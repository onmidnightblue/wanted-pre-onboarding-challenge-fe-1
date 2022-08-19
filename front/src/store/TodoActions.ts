import axios from "axios";
import { newTodoType } from "src/models/todosTypes";
import { todoActions } from "./TodoSlice";

export const fetchTodoData = () => {
  return async (dispatch) => {
    try {
      const fetchData = async () => {
        const url = "http://localhost:8080/todos";
        const response = await axios.get<any>(url, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        });
        const data = response.data.data;
        return data;
      };
      const todoData = await fetchData();
      dispatch(
        todoActions.replaceTodo({
          todos: todoData || [],
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchTodoDetailData = (todoId: string) => {
  return async (dispatch) => {
    if (todoId === "null") {
      dispatch(
        todoActions.replaceTodoDetail({
          todoDetail: null,
        })
      );
      return
    }

    try {
      const fetchData = async () => {
        const url = `http://localhost:8080/todos/${todoId}`;
        const response = await axios.get<any>(url, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        });
        const data = response.data.data;
        return data;
      };
      const todoDetailData = await fetchData();
      dispatch(
        todoActions.replaceTodoDetail({
          todoDetail: todoDetailData,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const addTodoData = (todo: newTodoType) => {
  return async (dispatch) => {
    try {
      const addData = async () => {
        const url = "http://localhost:8080/todos";
        await axios.post<newTodoType>(
          url,
          {
            title: todo.title,
            content: todo.content,
          },
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        );
      };
      await addData();
      dispatch(fetchTodoData());
    } catch (error) {
      console.log(error);
    }
  };
};

export const modifyTodoData = (todo: newTodoType, todoId: string) => {
  return async (dispatch) => {
    try {
      const modifyData = async () => {
        const url = `http://localhost:8080/todos/${todoId}`;
        await axios.put(
          url,
          {
            title: todo.title,
            content: todo.content,
          },
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        );
      };
      await modifyData();
      dispatch(fetchTodoData());
      dispatch(fetchTodoDetailData(todoId));
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteTodo = (todoId: string) => {
  return async (dispatch) => {
    if (todoId === "null") {
      dispatch(
        todoActions.replaceTodoDetail({
          todoDetail: null,
        })
      );
      return
    }
    
    try {
      const deleteData = async () => {
        const url = `http://localhost:8080/todos/${todoId}`;
        await axios.delete(url, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        });
      };
      await deleteData();
      dispatch(fetchTodoData());
    } catch (error) {
      console.log(error);
    }
  };
};
