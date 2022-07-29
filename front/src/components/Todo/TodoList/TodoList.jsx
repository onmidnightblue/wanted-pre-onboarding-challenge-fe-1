import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TodoController from "./TodoController";
import TodoItem from "./TodoItem";
import axios from "axios";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  // checked
  const onCheckedHandler = (checked, todoId) => {
    if (checked) {
      setTodos([...todos, todoId]);
    }
    if (!checked) {
      setTodos(todos.filter((i) => i !== todoId));
    }
  };

  // get data
  const fetchTodos = async () => {
    try {
      const url = "http://localhost:8080/todos";
      const response = await axios.get(url, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      const data = response.data.data;
      const loadedTodos = [];

      for (const key in data) {
        loadedTodos.push({
          id: key,
          title: data[key].title,
          content: data[key],
          createdAt: data[key].createdAt,
          updatedAt: data[key].updatedAt,
        });
      }

      setTodos(loadedTodos);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  if (isLoading) {
    return <p>loading...</p>;
  }

  if (isError) {
    return <p>error</p>;
  }

  const todoList = todos.map((todo) => (
    <TodoItem
      key={todo.id}
      id={todo.id}
      title={todo.title}
      content={todo.content}
    />
  ));

  return (
    <Styles.Wrap>
      <div className="list">
        <ul>{todoList}</ul>
      </div>
      <div className="controller">
        <TodoController />
      </div>
    </Styles.Wrap>
  );
};

// styled
const Styles = {
  Wrap: styled.div`
    width: 100%;
    height: calc(100% - 30px);
    position: relative;
    .list {
      width: 100%;
      height: calc(100% - 30px);
      overflow-y: auto;
      padding: 20px;
      box-sizing: border-box;
      &::-webkit-scrollbar {
        width: 8px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: #ddd;
      }
      &::-webkit-scrollbar-track {
        background-color: #eee;
      }
    }
    .controller {
      width: 100%;
      position: absolute;
      bottom: 0;
    }
  `,
};

export default TodoList;
