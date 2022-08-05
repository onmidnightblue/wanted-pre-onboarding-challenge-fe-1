import React, { useState } from "react";
import styled from "styled-components";
import TodoForm from "./TodoForm";

const TodoController = (props) => {
  const [addFormOpen, setAddFormOpen] = useState(false);
  const [modifyFormOpen, setModifyFormOpen] = useState(false);

  // form open
  const formOpenHandler = (event) => {
    const id = event.target.id;

    if (id === "add") {
      if (addFormOpen) return setAddFormOpen(false);
      setModifyFormOpen(false);
      setAddFormOpen(true);
    }
    if (id === "modify") {
      if (modifyFormOpen) return setModifyFormOpen(false);
      setAddFormOpen(false);
      setModifyFormOpen(true);
    }
  };

  // modify form close
  const modifyFormClose = () => {
    setModifyFormOpen(false);
  };

  return (
    <>
      {addFormOpen && <TodoForm formOpenId="add" todoHandler={props.addTodo} />}
      {modifyFormOpen && (
        <TodoForm
          formOpenId="modify"
          todoHandler={props.modifyTodo}
          existCheckedId={props.checkedId}
          onClose={modifyFormClose}
        />
      )}
      <Styles.Controll>
        <span
          id="add"
          onClick={formOpenHandler}
          className={addFormOpen ? "active" : ""}
        >
          add
        </span>
        <span
          id="modify"
          onClick={formOpenHandler}
          className={modifyFormOpen ? "active" : ""}
        >
          modify
        </span>
        <span onClick={props.removeTodo}>delete</span>
      </Styles.Controll>
    </>
  );
};

// style
const Styles = {
  Controll: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    border-top: 1px solid #eee;
    box-sizing: border-box;
    padding-top: 10px;
    span {
      font-size: 14px;
      color: #777;
      cursor: pointer;
      width: 40px;
      &:nth-child(2) {
        text-align: center;
      }
      &:last-child {
        text-align: right;
      }
      &:hover,
      &.active {
        color: #000;
        text-decoration: underline;
      }
    }
  `,
};

export default TodoController;