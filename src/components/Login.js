import React, { useReducer } from "react";
import classes from "./Login.module.css";

const emailReducer = (state, action) => {
  const validRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/;
  if (action.type === "INPUT_CHANGE") {
    return {
      value: action.val,
      isValid: action.value.match(validRegex) ? true : false,
    };
  }
  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: action.value.match(validRegex) ? true : false,
    };
  }
  return {
    value: state.value,
    isValid: state.isValid,
  };
};

const Login = (props) => {
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false,
  });

  const inputBlurHandler = (event) => {
    dispatchEmail({ type: "INPUT_BLUR", value: event.target.value });
  };
  const inputChangeHandler = (event) => {
    dispatchEmail({ type: "INPUT_CHANGE", value: event.target.value });
  };
  return (
    <div className={classes.form}>
      <div className={classes.label}>e-mail</div>
      <div className={classes.inputGroup}>
        <input
          onBlur={inputBlurHandler}
          onChange={inputChangeHandler}
          className={classes.input}
        />
        <div className={emailState.isValid ? classes.label : classes.invalid}>
          {emailState.isValid
            ? "valid e-mail"
            : "please enter a valid e-mail address"}
        </div>
      </div>
      <div className={classes.label}>name</div>
      <input className={classes.input} />
      <button>OK</button>
    </div>
  );
};

export default Login;
