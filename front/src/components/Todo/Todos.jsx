import React from "react";
import Header from "../../components/Layout/Header";
import Layout from "../../components/Layout/Layout";
import styled from "styled-components";
import TodoDetail from "../../components/Todo/TodoDetail/TodoDetail";
import TodoList from "../../components/Todo/TodoList/TodoList";

const Todos = () => {
  return (
    <>
      <Styles.List>
        <Header />
        <TodoList />
      </Styles.List>
      <Styles.Detail>
        <TodoDetail />
      </Styles.Detail>
    </>
  );
};

// styled
const Styles = {
  List: styled(Layout)`
    height: calc(70vh - 30px);
  `,
  Detail: styled(Layout)`
    height: calc(30vh - 30px);
  `,
};

export default Todos;
