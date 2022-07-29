import React from "react";
import styled from "styled-components";

const TodoDetail = () => {
  return (
    <>
      <Styles.Empty className="empty">
        <p>Please select a list item.</p>
      </Styles.Empty>
      {/* <Styles.Detail>
        <h3 className="title">title</h3>
        <div className="content">
          <p>content</p>
        </div>
      </Styles.Detail> */}
    </>
  );
};

// styled
const Styles = {
  Empty: styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  Detail: styled.div`
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

export default TodoDetail;
