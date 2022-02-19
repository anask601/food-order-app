import React, { Fragment } from "react";
import CardIcon from "../Cards/CardIcon";
import classes from "./HeaderCartButton.module.css";
const HeaderCartButton = () => {
  return (
    <Fragment>
      <button className={classes.button}>
        <span className={classes.icon}>
          <CardIcon />
        </span>
        <span>Your Cart💲</span>
        <span className={classes.badge}>3</span>
      </button>
    </Fragment>
  );
};

export default HeaderCartButton;
