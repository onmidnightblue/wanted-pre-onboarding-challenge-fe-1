import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodosPage from "./pages/TodosPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import SignUpPage from "./pages/SignUpPage";
import { LoggedContextProvider } from "./store/loggedContext";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LoggedContextProvider />}>
          <Route path="/" element={<TodosPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
