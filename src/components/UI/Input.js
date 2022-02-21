import React from "react";
import classes from "./Input.module.css";
const Input = React.forwardRef(({ input, label, id, ref }) => {
  return (
    <div className={classes.input}>
      <label htmlFor={id}>{label}</label>
      <input ref={ref} {...input} />
    </div>
  );
});

export default Input;
