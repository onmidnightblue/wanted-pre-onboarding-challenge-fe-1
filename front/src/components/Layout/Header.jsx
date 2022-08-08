import React from "react";
import { BsCalendarCheck } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("login");
    navigate("/login");
  };

  const homeHandler = () => {
    navigate("/");
  };

  return (
    <Styles.Wrap>
      <BsCalendarCheck onClick={homeHandler} size={18} />
      <span onClick={logoutHandler}>LOGOUT</span>
    </Styles.Wrap>
  );
};

// style
const Styles = {
  Wrap: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
    padding: 0 4px;
    box-sizing: border-box;
    padding-bottom: 10px;
    svg,
    span {
      cursor: pointer;
    }
    span {
      color: #777;
      &:hover {
        color: #000;
        text-decoration: underline;
      }
    }
  `,
};

export default Header;
