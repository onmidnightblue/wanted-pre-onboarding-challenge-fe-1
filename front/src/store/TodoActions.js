import axios from "axios";

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
      dispatch();
    } catch (error) {
      console.log(error);
    }
  };
};
