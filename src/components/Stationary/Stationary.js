import { useState } from "react";
import styles from "./Stationary.module.css";
import LoadingButton from '@mui/lab/LoadingButton';

const Stationary = (props) => {
  const [isLoading, setLoading] = useState(false);

  return (
    <div className={styles.item}>
      <img className={styles.bgImg} src={props.image} />
      <h1 className={styles.title}>{props.title}</h1>
      <h2 className={styles.price}>₹{props.price}</h2>
      <div className={styles.bottom}>
        {!isLoading && <button className={styles.cartBtn} disabled={props.stock <= 0} onClick={props.onAdd}>ADD TO CART</button>}
        {isLoading && <LoadingButton style={{marginLeft: '20px', borderRadius: '10px', borderColor: 'grey', height: '35px', width: '80px'}} loading variant="outlined" />}
        {props.stock > 0 && <p className={styles.stock} style={{color: 'green'}}>In Stock: {props.stock}</p>}
        {props.stock <= 0 && <p className={styles.stock} style={{color: 'red'}}>Out of Stock</p>}
        
      </div>
    </div>
  );
};

export default Stationary;
