import { Fragment } from "react";
import platter from "../../assets/platter.jpg";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={platter} alt="A table full of delicious food! 😋" />
      </div>
    </Fragment>
  );
};

export default Header;
