import React from "react";
import styled from "styled-components";

const FormLayout = (props) => {
  return <Styles.Wrap>{props.children}</Styles.Wrap>;
};

// styled
const Styles = {
  Wrap: styled.div`
    padding: 20px 0;
    width: 100%;
    box-sizing: border-box;
    background-color: #fff;
    box-shadow: 0 -5px 20px -8px #eee;
    text-align: center;
    div {
      text-align: left;
      margin-bottom: 20px;
      display: flex;
      flex-direction: column-reverse;
      label {
        display: block;
        margin-bottom: 6px;
        color: #777;
      }
      input,
      textarea {
        width: 100%;
        box-sizing: border-box;
        margin-right: 6px;
        border-radius: 0;
        border: 1px solid #777;
        padding: 6px;
        &:focus {
          border: 1px solid #000;
          & + label {
            color: #000;
          }
        }
      }
      &.content {
        textarea {
          height: 10vh;
          resize: none;
        }
      }
    }
    .cancel {
      margin-top: 10px;
      cursor: pointer;
      color: #777;
      &:hover {
        color: #000;
        text-decoration: underline;
      }
    }
    .error {
      color: #777;
    }
  `,
};

export default FormLayout;
