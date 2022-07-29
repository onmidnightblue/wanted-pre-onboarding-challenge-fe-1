import React from "react";
import styled from "styled-components";

const Styles = {
  Wrap: styled.div`
    width: 100%;
    text-align: center;
  `,
};

const NotFoundPage = () => {
  return <Styles.Wrap>not found.</Styles.Wrap>;
};

export default NotFoundPage;
