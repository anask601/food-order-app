import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

const MealItem = ({ id, name, description, prices }) => {
  const cartCtx = useContext(CartContext);
  const price = `$${prices.toFixed(2)}`;
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: id,
      name: name,
      amount: amount,
      price: prices,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
