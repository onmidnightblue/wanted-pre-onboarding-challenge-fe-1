import React from "react";
import styled from "styled-components";

const Input = React.forwardRef((props, ref) => {
  return (
    <Styles.Input>
      <p>{props.condition}</p>
      <input ref={ref} {...props} />
      <label htmlFor={props.id}>{props.id}</label>
    </Styles.Input>
  );
});

// style
const Styles = {
  Input: styled.div`
    margin-bottom: 30px;
    text-align: left;
    display: flex;
    flex-direction: column-reverse;
    label {
      color: #ccc;
      margin-bottom: 6px;
      display: inline-block;
    }
    input {
      border: none;
      width: 100%;
      border-bottom: 1px solid #ccc;
      padding: 6px 0;
      &:focus {
        border-bottom: 1px solid #000;
        & + label {
          color: #000;
        }
      }
    }
    p {
      margin-top: 10px;
      font-size: 14px;
      color: #444;
    }
  `,
};

export default Input;
