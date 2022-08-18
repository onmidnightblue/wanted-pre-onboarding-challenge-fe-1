import React from "react";
import { ChildrenProps } from "src/models/todosTypes";
import styled from "styled-components";

const Form = (props: ChildrenProps) => {
  return <Styles.Wrap>{props.children}</Styles.Wrap>;
};

// style
const Styles = {
  Wrap: styled.div`
    text-align: center;
    width: 80%;
    margin: 0 auto;
    transition: 0.5s;
    h3 {
      margin-bottom: 40px;
    }
    .input-wrap {
      margin-bottom: 30px;
      text-align: left;
      &:focus-within {
        label {
          color: #000;
        }
      }
      input {
        border: none;
        width: 100%;
        border-bottom: 1px solid #ccc;
        padding: 6px 0;
        &:focus {
          border-bottom: 1px solid #000;
        }
      }
      label {
        color: #ccc;
        margin-bottom: 6px;
        display: inline-block;
      }
      .valid {
        margin-top: 10px;
        font-size: 14px;
        span {
          color: #ccc;
          position: relative;
          padding: 0 10px;
          display: inline-block;
          text-align: center;
          &.active {
            color: #000;
          }
          &::after {
            content: "";
            position: absolute;
            width: 1px;
            height: 50%;
            top: 50%;
            right: 0;
            transform: translateY(-50%);
            background-color: #ccc;
          }
          &:first-child {
            &::before {
              content: "";
              position: absolute;
              width: 1px;
              height: 50%;
              top: 50%;
              left: 0;
              transform: translateY(-50%);
              background-color: #ccc;
            }
          }
        }
      }
      .password-input {
        position: relative;

        .eye {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: 10px;
          width: 25px;
          height: 25px;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
    .link {
      display: inline-block;
      color: #777;
      font-size: 12px;
      cursor: pointer;
      &:hover {
        color: #000;
        text-decoration: underline;
      }
    }
    .error {
      font-weight: 500;
      margin: 20px 0;
    }
    .complete {
      padding: 40px 0 50px 0;
    }
    @media screen and (max-width: 500px) {
      width: 100%;
      button {
        width: 100%;
      }
    }
  `,
};

export default Form;
