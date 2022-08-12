import React, { ReducerAction } from "react";
import styled from "styled-components";

const Layout: React.FC <{ children: React.ReactNode }> = (props) => {
  return <Styles.Wrap {...props}>{props.children}</Styles.Wrap>;
};

// style
const Styles = {
  Wrap: styled.div`
    max-width: 460px;
    box-sizing: border-box;
    padding: 20px;
    margin: 0 auto;
    border: 1px solid #eee;
    margin-top: 20px;
    transition: 0.5s;
    @media screen and (max-width: 500px) {
      width: calc(100% - 40px);
    }
  `,
};

export default Layout;
