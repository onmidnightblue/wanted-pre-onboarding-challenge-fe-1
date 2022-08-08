import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../UI/Input";
import { checkEmail, checkPassword } from "../../utils/auth";
import axios from "axios";
import Form from "../UI/Form";
import Button from "../UI/Button";

const Login = () => {
  const [validEmail, setValidEmail] = useState(null);
  const [validPassword, setValidPassword] = useState(null);
  const [validForm, setValidForm] = useState(false);
  const [error, setError] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  // email, password validation
  const emailHandler = () => {
    setValidEmail(checkEmail(emailRef.current.value));
  };
  const passWordHandler = () => {
    setValidPassword(checkPassword(passwordRef.current.value));
  };

  // button active
  useEffect(() => {
    setError("");
    if (validEmail && validPassword) {
      setValidForm(true);
    } else {
      setValidForm(false);
    }
  }, [validEmail, validPassword]);

  // signup page link
  const goSignUp = () => {
    navigate("/signup");
  };

  // api submit
  const onSubmit = async (event) => {
    event.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    try {
      const url = "http://localhost:8080/users/login";
      const response = await axios.post(url, {
        email: enteredEmail,
        password: enteredPassword,
      });
      const data = response.data;
      console.log(data.message);
      localStorage.setItem("login", data.token);
      navigate("/");
    } catch (error) {
      setError("Please check your email and password again.");
    }
  };

  return (
    <Form>
      <form onSubmit={onSubmit}>
        <h3>LOGIN</h3>
        <Input ref={emailRef} id="email" type="text" onChange={emailHandler} />
        <Input
          ref={passwordRef}
          id="password"
          type="password"
          onChange={passWordHandler}
        />
        <Button className={validForm ? "" : "invalid"}>LOGIN</Button>
      </form>
      <p className="error">{error}</p>
      <span className="link" onClick={goSignUp}>
        SIGNUP
      </span>
    </Form>
  );
};

export default Login;
