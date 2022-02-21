import React from "react";
import classes from "./Input.module.css";
const Input = ({ input, label, id }) => {
  return (
    <div className={classes.input}>
      <label htmlFor={id}>{label}</label>
      <input {...input} />
    </div>
  );
};

export default Input;
