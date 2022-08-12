import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Form from "../UI/Form";
import Button from "../UI/Button";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { PasswordType } from "src/models/auth";

const Login: React.FC = () => {
  const [checkedAtSign, setCheckedAtSign] = useState<null | boolean>(null);
  const [checkedDot, setCheckedDot] = useState<null | boolean>(null);
  const [checkedCharacter, setCheckedCharacter] = useState<null | boolean>(null);
  const [validForm, setValidForm] = useState<boolean>(false);
  const [passwordType, setPasswordType] = useState<PasswordType>({
    type: "password",
    visible: false,
  });
  const [error, setError] = useState<string>("");
  const emailRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const navigate = useNavigate(); 

  // password eye o_o
  const passwordTypeHandler = ():void => {
    setPasswordType(() => {
      if (!passwordType.visible) {
        return { type: "text", visible: true };
      }
      return { type: "password", visible: false };
    });
  };

  // email, password validation
  const emailHandler = ():void => {
    const enteredEmail: string = emailRef.current.value;
    enteredEmail.includes("@")
      ? setCheckedAtSign(true)
      : setCheckedAtSign(false);
    enteredEmail.includes(".") ? setCheckedDot(true) : setCheckedDot(false);
  };
  const passWordHandler = ():void => {
    const enteredPassword: string = passwordRef.current.value;
    enteredPassword.length >= 8
      ? setCheckedCharacter(true)
      : setCheckedCharacter(false);
  };

  // signup page link
  const goSignUp = ():void => {
    navigate("/signup");
  };

  // api submit
  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const enteredEmail: string = emailRef.current.value;
    const trimEmail: string  = enteredEmail.trim();
    const enteredPassword: string  = passwordRef.current.value;

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
