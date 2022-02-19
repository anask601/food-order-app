import { Fragment } from "react";
import platter from "../../assets/platter.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>MiniReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={platter} alt="A table full of delicious food! 😋" />
      </div>
    </Fragment>
  );
};

export default Header;
