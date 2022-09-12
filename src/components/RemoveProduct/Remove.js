import { Fragment, useEffect, useState } from "react";
import styles from "./Remove.module.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import RemoveItem from "./RemoveItem";

const Remove = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async (e) => {
    setLoading(true);

    try {
      var token = localStorage.getItem("token");
      const data = await fetch(
        `https://campus-in--backend.herokuapp.com/products`,
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

  const removeItemHandler = async (id) => {
    setLoading(true);

    try {
      var token = localStorage.getItem("token");
      const data = await fetch(
        `https://campus-in--backend.herokuapp.com/product/remove/${id}`,
        {
          method: "DELETE",
          mode: "cors",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-auth-token": token,
          },
        }
      );
      const response = await data.json();
      setData(response.products);
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
        Remove Products
      </h3>
      <div className={styles["main-container"]}>
        <ul className={styles.container}>
          {!isLoading && data.length == 0 && (
            <h1 style={{ fontSize: "20px" }}>NO DISHES FOUNDS!!!</h1>
          )}
          {data.map((item) => (
            <RemoveItem
              key={item._id}
              id={item._id}
              title={item.name}
              image={item.image}
              price={item.price}
              stock={item.stock}
              // service={item.service}
              onRemove={removeItemHandler.bind(null, item._id)}
            />
          ))}
        </ul>
      </div>
      <Footer/>
    </Fragment>
  );
};

export default Remove;
