import { Fragment } from "react";

import styles from "./EmpOrder.module.css";

const EmpOrderItem = (props) => {
  var prods = [];

  for (let i = 0; i < props.items.length; i++) {
    prods.push({name: props.items[i].product.name, price: props.items[i].product.price, quantity: props.items[i].quantity });
  }
  
  return (
    <Fragment>
      <div className={styles.begin}>
      <h1 style={{ fontSize: "20px", marginTop: "10px" }}>
          Ordered on {props.date} By {props.username}
        </h1>
        <h1 style={{ fontSize: "12px" }}>#{props.id}</h1>
        <h1 style={{ fontSize: "16px" }}>{props.items.length} Item</h1>
        
        {prods.map((element) => 
        <div>
          <h1 style={{fontSize: '13px', fontWeight: 'bold'}}>{element.name}</h1>
           <h1 style={{fontSize: '12px'}}>₹{element.price}</h1>
           <h1 style={{fontSize: '11px'}}> QTY:{element.quantity}</h1>
          </div>
        )}
        {/* <h1 style={{ fontSize: "16px" }}>{props.items}</h1> */}
        <h1 style={{ fontSize: "16px", color: "green" }}>{props.status}</h1>
        <button onClick={props.onUpdate}>UPDATE STATUS</button>
      </div>
    </Fragment>
  );
};

export default EmpOrderItem;
