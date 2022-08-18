import React from "react";
import { BsCalendarCheck } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const logoutHandler = ():void => {
    localStorage.removeItem("login");
    navigate("/login");
  };

  const homeHandler = ():void => {
    navigate("/");
  };

  return (
    <Styles.Header>
      <BsCalendarCheck onClick={homeHandler} size={18} />
      <span onClick={logoutHandler}>LOGOUT</span>
    </Styles.Header>
  );
};

// style
const Styles = {
  Header: styled.header`
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
