import { Fragment } from "react";

import styles from "./Cart.module.css";

const CartItem = (props) => {
  return (
    <Fragment>
      <div className={styles.begin}>
        <img className={styles.image} src={props.image}></img>
        <div className={styles.about}>
          <h1 className={styles.title}>{props.title}</h1>
          <h1 className={styles.pr}>₹{props.price}</h1>
        </div>
      </div>
      <div className={styles.actions}>
        <button className={styles.btn} onClick={props.onRemove}>−</button>
        <h1 style={{ margin: "12px", fontSize: "22px" }}>{props.quantity}</h1>
        <button className={styles.btn} onClick={props.onAdd}>
          +
        </button>
      </div>
    
    </Fragment>
    
  );
};

export default CartItem;
