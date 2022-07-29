import React from "react";
import styled from "styled-components";

const Form = (props) => {
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
      color: #fe0000;
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
