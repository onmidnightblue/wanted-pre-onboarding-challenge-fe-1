import React, { useEffect, useState } from "react";
import { newTodoType, TodoControllerProps } from "src/models/todosTypes";
import styled from "styled-components";
import TodoForm from "./TodoForm";


const TodoController = (props: TodoControllerProps) => {
  const [addFormOpen, setAddFormOpen] = useState<boolean>(false);
  const [modifyFormOpen, setModifyFormOpen] = useState<boolean>(false);

  useEffect(() => {
    setModifyFormOpen(false)
    setAddFormOpen(false)
  }, [props.checkedId])

  // form open
  const formOpenHandler = (event: React.MouseEvent) => {
    const target = event.target as HTMLInputElement
    const id = target.id;

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

  const modifyTodoHandler = (newTodo: newTodoType, checkedId: string) => {
    props.modifyTodo(newTodo, checkedId)
    setModifyFormOpen(false);
  };

  // delete
  const todoFormClose = () => {
    setModifyFormOpen(false);
    setAddFormOpen(false);
  };

  return (
    <>
      {addFormOpen && <TodoForm formOpenId="add" todoHandler={props.addTodo} />}
      {modifyFormOpen && (
        <TodoForm
          formOpenId="modify"
          todoHandler={modifyTodoHandler}
          existCheckedId={props.checkedId}
          onClose={modifyFormClose}
          todoDetail={props.todoDetail}
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
        <span
          onClick={() => {
            props.removeTodo();
            todoFormClose();
          }}
        >
          delete
        </span>
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
