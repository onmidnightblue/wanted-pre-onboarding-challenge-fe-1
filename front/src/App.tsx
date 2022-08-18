import { Route, Routes, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import TodosPage from "./pages/TodosPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import SignUpPage from "./pages/SignUpPage";

const App: React.FC = () => {
  const navigate = useNavigate();

  // login storage 확인
  useEffect(() => {
    const loggedTokenCheck = localStorage.getItem("login");
    if (loggedTokenCheck) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <Routes>
      <Route>
        <Route path="/" element={<TodosPage />}>
          <Route path=":todoId" element={<TodosPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
