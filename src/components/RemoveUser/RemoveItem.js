import { useState } from "react";
import styles from "./Remove.module.css";
import LoadingButton from '@mui/lab/LoadingButton';

const RemoveUserItem = (props) => {
  const [isLoading, setLoading] = useState(false);

  return (
    <div className={styles.item}>
      <h1 className={styles.title}>{props.name.toUpperCase()}</h1>
      <h2 className={styles.role}>Role: {props.role}</h2>
      <h3 className={styles.email}>{props.email}</h3>
      <h3 className={styles.pwd}>Password: {props.password}</h3>
      <div className={styles.bottom}>
        {!isLoading && <button className={styles.cartBtn} disabled={props.stock <= 0} onClick={props.onRemove}>REMOVE</button>}
        {isLoading && <LoadingButton style={{marginLeft: '20px', borderRadius: '10px', borderColor: 'grey', height: '35px', width: '80px'}} loading variant="outlined" />}
        {props.stock > 0 && <p className={styles.stock} style={{color: 'green'}}>In Stock: {props.stock}</p>}
        {props.stock <= 0 && <p className={styles.stock} style={{color: 'red'}}>Out of Stock</p>}
        
      </div>
    </div>
  );
};

export default RemoveUserItem;
