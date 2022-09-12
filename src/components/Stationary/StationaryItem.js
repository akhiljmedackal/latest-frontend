import { Fragment, useEffect, useState, useContext } from "react";
import styles from "./Stationary.module.css";
import Navbar from "../Navbar/Navbar";
import { useParams } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import CartContext from "../../store/cart-context";

import Stationary from "./Stationary";

const StationaryItemList = () => {
  var quantity = 1;
  const params = useParams();
  const cartCtx = useContext(CartContext);

  const { category } = params;

  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async (e) => {
    setLoading(true);

    try {
      var token = localStorage.getItem("token");
      const data = await fetch(
        `https://campus-in--backend.herokuapp.com/products/search/store/${category}`,
        {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-auth-token": token,
          },
        }
      );
      const response = await data.json();
      console.log(response);

      setData(response);

      setLoading(false);
    } catch (e) {
      setLoading(false);
      alert(e);
    }
  };

  const cartItemAddHandler = async (item) => {
    setLoading(true);

    try {
      var token = localStorage.getItem("token");
      const data = await fetch(
        `https://campus-in--backend.herokuapp.com/user/addToCart/${item._id}`,
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-auth-token": token,
          },
        }
      );
      const response = await data.json();
      console.log(response);
      cartCtx.addItem(item);

      setLoading(false);
    } catch (e) {
      alert(e);
    }
  };

  return (
    <Fragment>
      <Navbar />
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <h3 style={{ padding: "20px" }}>
        {category === "stationary" ? "Stationary" : "Study Material"}
      </h3>
      <div className={styles["main-container"]}>
        <ul className={styles.container}>
          {!isLoading && data.length == 0 && (
            <h1 style={{ fontSize: "20px" }}>NO DISHES FOUNDS!!!</h1>
          )}
          {data.map((item) => (
            <Stationary
              key={item._id}
              id={item._id}
              title={item.name}
              image={item.image}
              price={item.price}
              stock={item.stock}
              onRemove={cartItemRemoveHandler.bind(null, item._id)}
              onAdd={cartItemAddHandler.bind(null, {...item, quantity})}
            />
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default StationaryItemList;
