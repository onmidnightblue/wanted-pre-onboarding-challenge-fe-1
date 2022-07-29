import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const LoggedContext = React.createContext({
  onLogout: () => {},
  onLogin: () => {},
  completeSignUp: false,
});

export const LoggedContextProvider = (props) => {
  const navigate = useNavigate();

  // storage 확인
  useEffect(() => {
    const loggedTokenCheck = localStorage.getItem("token");
    if (loggedTokenCheck) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, []);

  // login
  const loginHandler = (token) => {
    localStorage.setItem("token", token);
  };

  // logout
  const logoutHandler = (token) => {
    localStorage.removeItem("token", token);
  };

  return (
    <LoggedContext.Provider
      value={{
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      <Outlet />
    </LoggedContext.Provider>
  );
};

export default LoggedContext;
