import axios from "axios";
import { todoActions } from "./TodoSlice";

export const fetchTodoData = () => {
  return async (dispatch) => {
    try {
      const fetchData = async () => {
        const url = "http://localhost:8080/todos";
        const response = await axios.get(url, {
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

export const addTodoData = (todo) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const url = "http://localhost:8080/todos";
      const response = await axios.post(
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

    try {
      sendRequest();
    } catch (error) {
      console.log(error);
    }
  };
};
