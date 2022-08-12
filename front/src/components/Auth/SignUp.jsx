import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Form from "../UI/Form";
import Button from "../UI/Button";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

const SignUp = () => {
  const [checkedAtSign, setCheckedAtSign] = useState(false);
  const [checkedDot, setCheckedDot] = useState(false);
  const [checkedCharacter, setCheckedCharacter] = useState(false);
  const [validForm, setValidForm] = useState(false);
  const [passwordType, setPasswordType] = useState({
    type: "password",
    visible: false,
  });
  const [completeSignUp, setCompleteSignUp] = useState(false);
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
  const goLogin = () => {
    setCompleteSignUp(false);
    navigate("/login");
  };

  // api submit
  const onSubmit = async (event) => {
    event.preventDefault();

    const enteredEmail = emailRef.current.value;
    const trimEmail = enteredEmail.trim();
    const enteredPassword = passwordRef.current.value;

    if (!validForm) return;

    try {
      const url = "http://localhost:8080/users/create";
      const response = await axios.post(url, {
        email: trimEmail,
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

  // button active
  useEffect(() => {
    setError(false);
    if (checkedAtSign && checkedDot && checkedCharacter) {
      setValidForm(true);
    } else {
      setValidForm(false);
    }
  }, [checkedAtSign, checkedDot, checkedCharacter]);

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
          <div className="input-wrap">
            <label htmlFor="email">email</label>
            <input
              ref={emailRef}
              id="email"
              type="text"
              onChange={emailHandler}
            />
            <div className="valid">
              <span className={checkedAtSign ? "active" : ""}>at sign(@)</span>
              <span className={checkedDot ? "active" : ""}>dot (.)</span>
            </div>
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
            <div className="valid">
              <span className={checkedCharacter ? "active" : ""}>
                atleast 8 charaters
              </span>
            </div>
          </div>
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
