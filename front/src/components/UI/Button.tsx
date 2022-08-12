import React from "react";
import styled from "styled-components";

const Button: React.FC <{ children: React.ReactNode }> = (props) => {
  return <Styles.Button {...props}>{props.children}</Styles.Button>;
};

// styled
const Styles = {
  Button: styled.button`
    width: 60%;
    background-color: #fff;
    border-radius: 50px;
    border: 1px solid #777;
    padding: 6px 12px;
    box-sizing: border-box;
    color: #777;
    cursor: pointer;
    &:hover {
      border: 1px solid #000;
      color: #000;
    }
    &.invalid {
      color: #999;
      border: 1px solid #ddd;
      background-color: #eee;
    }
  `,
};

export default Button;
