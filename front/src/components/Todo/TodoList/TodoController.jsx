import React, { useState } from "react";
import styled from "styled-components";
import AddTodoForm from "./AddTodoForm";
import ModifyTodoForm from "./ModifyTodoForm";
import axios from "axios";

const TodoController = () => {
  const [addFormOpen, setAddFormOpen] = useState(false);
  const [modifyFormOpen, setModifyFormOpen] = useState(false);

  // add
  const addFormOpenHandler = () => {
    if (modifyFormOpen) {
      setModifyFormOpen(false);
    }
    setAddFormOpen((addFormOpen) => !addFormOpen);
  };

  // modify
  const modifyFormOpenHandler = () => {
    if (addFormOpen) {
      setAddFormOpen(false);
    }
    setModifyFormOpen((modifyFormOpen) => !modifyFormOpen);
  };

  // delete
  const deletetodoHandler = async () => {
    const token = localStorage.getItem("token");

    try {
      const url = "http://localhost:8080/todos";
      const response = await axios.delete(url, {
        headers: {
          Authorization: token,
        },
      });
      console.log(response);
      // code
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {addFormOpen && <AddTodoForm />}
      {modifyFormOpen && <ModifyTodoForm onClose={modifyFormOpenHandler} />}
      <Styles.Controll>
        <span
          onClick={addFormOpenHandler}
          className={addFormOpen ? "active" : ""}
        >
          add
        </span>
        <span
          onClick={modifyFormOpenHandler}
          className={modifyFormOpen ? "active" : ""}
        >
          modify
        </span>
        <span onClick={deletetodoHandler}>delete</span>
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
