import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkEmail, checkPassword } from "../../utils/auth";
import axios from "axios";
import Input from "../UI/Input";
import Form from "../UI/Form";
import Button from "../UI/Button";

const SignUp = () => {
  const [validEmail, setValidEmail] = useState(null);
  const [validPassword, setValidPassword] = useState(null);
  const [validForm, setValidForm] = useState(false);
  const [completeSignUp, setCompleteSignUp] = useState(false);
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
    setError(false);
    if (validEmail && validPassword) {
      setValidForm(true);
    } else {
      setValidForm(false);
    }
  }, [validEmail, validPassword]);

  // signup page link
  const goLogin = () => {
    setCompleteSignUp(false);
    navigate("/login");
  };

  // api submit
  const onSubmit = async (event) => {
    event.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    try {
      const url = "http://localhost:8080/users/create";
      const response = await axios.post(url, {
        email: enteredEmail,
        password: enteredPassword,
      });
      const data = response.data;
      console.log(data.message);
      setCompleteSignUp(true);
    } catch (error) {
      const errorStatus = error.response.status;
      if (errorStatus === 409) {
        setError("This email already exists.");
      }
    }
  };

  return (
    <Form>
      {completeSignUp ? (
        <div>
          <p className="complete">complete!</p>
          <Button onClick={goLogin}>LOGIN</Button>
        </div>
      ) : (
        <form onSubmit={onSubmit}>
          <h3>SIGNUP</h3>
          <Input
            ref={emailRef}
            id="email"
            type="text"
            onChange={emailHandler}
          />
          <Input
            ref={passwordRef}
            id="password"
            type="password"
            onChange={passWordHandler}
          />
          <Button className={validForm ? "" : "invalid"}>SIGNUP</Button>
          <p className="error">{error}</p>
          <span className="link" onClick={goLogin}>
            LOGIN
          </span>
        </form>
      )}
    </Form>
  );
};

export default SignUp;
