import { Fragment } from "react";

import styles from "./UserOrder.module.css";

const UserOrderItem = (props) => {
  var prods = [];

  for (let i = 0; i < props.items.length; i++) {
    prods.push({name: props.items[i].product.name, price: props.items[i].product.price, quantity: props.items[i].quantity});
  }
  
  return (
    <Fragment>
      <div className={styles.begin}>
        <h1 style={{ fontSize: "24px" }}>#{props.id}</h1>
        <h1 style={{ fontSize: "16px" }}>{props.items.length} Item</h1>
        <h1 style={{ fontSize: "16px", marginTop: "10px" }}>
          Ordered on {props.date}
        </h1>
        {prods.map((element) => <div><h1 style={{fontSize: '13px', fontWeight: 'bold'}}>{element.name}</h1> <h1 style={{fontSize: '12px'}}>₹{element.price}</h1> <h1 style={{fontSize: '11px'}}> QTY:{element.quantity}</h1></div>
        )}
        <h1 style={{ fontSize: "16px", color: "green" }}>{props.status}</h1>
      </div>
    </Fragment>
  );
};

export default UserOrderItem;
