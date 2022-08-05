import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodoData,
  deleteTodo,
  fetchTodoData,
  fetchTodoDetailData,
  modifyTodoData,
} from "../../store/TodoActions";
import Header from "../../components/Layout/Header";
import TodoController from "./TodoController";
import TodoItem from "./TodoItem";
import styled from "styled-components";
import OuterLayout from "../Layout/OuterLayout";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const todoDetail = useSelector((state) => state.todos.todoDetail);
  const [checkedId, setCheckedId] = useState(null);

  // initial fetch todo data
  useEffect(() => {
    dispatch(fetchTodoData());
  }, []);

  // get check id
  const onCheckedHandler = (id) => {
    setCheckedId(id);
  };

  // add todo data
  const addTodoHandler = (newTodo) => {
    dispatch(addTodoData(newTodo));
  };

  // modify todo data
  const modifyTodoHandler = (newTodo, checkedId) => {
    console.log(checkedId);
    dispatch(modifyTodoData(newTodo, checkedId));
  };

  // delete todo data
  const removeTodoHandler = () => {
    if (checkedId) {
      dispatch(deleteTodo(checkedId));
      setCheckedId(null);
    }
  };

  // checked list detail data
  useEffect(() => {
    if (checkedId) {
      dispatch(fetchTodoDetailData(checkedId));
    }
  }, [checkedId]);

  return (
    <>
      <Styles.List>
        <Header />
        <div className="list-wrap">
          <div className="list">
            <ul>
              {todos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  id={todo.id}
                  title={todo.title}
                  content={todo.content}
                  checkedHandler={onCheckedHandler}
                  checkedId={checkedId}
                />
              ))}
            </ul>
          </div>
          <div className="controller">
            <TodoController
              addTodo={addTodoHandler}
              modifyTodo={modifyTodoHandler}
              removeTodo={removeTodoHandler}
              checkedId={checkedId}
            />
          </div>
        </div>
      </Styles.List>
      <Styles.Detail>
        {checkedId ? (
          <Styles.DetailContent>
            <h3 className="title">{todoDetail.title}</h3>
            <div className="content">
              <p>{todoDetail.content}</p>
            </div>
          </Styles.DetailContent>
        ) : (
          <Styles.Empty className="empty">
            <p>Please select a list item.</p>
          </Styles.Empty>
        )}
      </Styles.Detail>
    </>
  );
};

// styled
const Styles = {
  List: styled(OuterLayout)`
    height: calc(70vh - 30px);
    .list-wrap {
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
    }
  `,
  Detail: styled(OuterLayout)`
    height: calc(30vh - 30px);
  `,
  Empty: styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  DetailContent: styled.div`
    width: 100%;
    height: 100%;
    .title {
      font-size: 18px;
      margin-bottom: 20px;
    }
    .content {
      height: calc(100% - 44px);
      overflow-y: auto;
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
  `,
};

export default Todos;
