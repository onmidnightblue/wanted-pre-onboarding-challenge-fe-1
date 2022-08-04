import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TodoController from "./TodoController";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todo.todos);

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
