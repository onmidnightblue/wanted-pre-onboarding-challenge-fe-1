import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Form from "../UI/Form";
import Button from "../UI/Button";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

const Login = () => {
  const [checkedAtSign, setCheckedAtSign] = useState(null);
  const [checkedDot, setCheckedDot] = useState(null);
  const [checkedCharacter, setCheckedCharacter] = useState(null);
  const [validForm, setValidForm] = useState(false);
  const [passwordType, setPasswordType] = useState({
    type: "password",
    visible: false,
  });
  const [error, setError] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  // password eye o_o
  const passwordTypeHandler = (event) => {
    setPasswordType(() => {
      if (!passwordType.visible) {
        return { type: "text", visible: true };
      }
      return { type: "password", visible: false };
    });
  };

  // email, password validation
  const emailHandler = () => {
    const enteredEmail = emailRef.current.value;
    enteredEmail.includes("@")
      ? setCheckedAtSign(true)
      : setCheckedAtSign(false);
    enteredEmail.includes(".") ? setCheckedDot(true) : setCheckedDot(false);
  };
  const passWordHandler = () => {
    const enteredPassword = passwordRef.current.value;
    enteredPassword.length >= 8
      ? setCheckedCharacter(true)
      : setCheckedCharacter(false);
  };

  // signup page link
  const goSignUp = () => {
    navigate("/signup");
  };

  // api submit
  const onSubmit = async (event) => {
    event.preventDefault();

    const enteredEmail = emailRef.current.value;
    const trimEmail = enteredEmail.trim();
    const enteredPassword = passwordRef.current.value;

    if (!validForm) return;

    try {
      const url = "http://localhost:8080/users/login";
      const response = await axios.post(url, {
        email: trimEmail,
        password: enteredPassword,
      });
      const data = response.data;
      console.log(data.message);
      localStorage.setItem("login", data.token);
      navigate("/", { replace: true });
    } catch (error) {
      setError("Please check your email and password again.");
    }
  };

  // initial
  const emailErrorMessage = () => {
    if (checkedAtSign === null || checkedDot === null) {
      return "";
    } else {
      if (!checkedAtSign || !checkedDot) {
        return <p>enter valid email id</p>;
      } else {
        return "";
      }
    }
  };
  const passwordErrorMessage = () => {
    if (checkedCharacter === null) {
      return "";
    } else {
      if (!checkedCharacter) {
        return <p>should be atleast 8 charaters</p>;
      } else {
        return "";
      }
    }
  };

  // button active
  useEffect(() => {
    setError("");
    if (checkedAtSign && checkedDot && checkedCharacter) {
      setValidForm(true);
    } else {
      setValidForm(false);
    }
  }, [checkedAtSign, checkedDot, checkedCharacter]);

  return (
    <Form>
      <form onSubmit={onSubmit}>
        <h3>LOGIN</h3>
        <div className="input-wrap">
          <label htmlFor="email">email</label>
          <input
            ref={emailRef}
            id="email"
            type="text"
            onChange={emailHandler}
          />
          <div className="valid">{emailErrorMessage()}</div>
        </div>
        <div className="input-wrap">
          <label htmlFor="password">password</label>
          <div className="password-input">
            <input
              ref={passwordRef}
              id="password"
              type={passwordType.type}
              onChange={passWordHandler}
            />
            <div className="eye" onClick={passwordTypeHandler}>
              {passwordType.visible ? <VscEyeClosed /> : <VscEye />}
            </div>
          </div>
          <div className="valid">{passwordErrorMessage()}</div>
        </div>
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
