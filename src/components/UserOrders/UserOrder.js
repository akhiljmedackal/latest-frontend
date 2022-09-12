import { Fragment, useEffect, useState, useContext } from "react";
import styles from "./UserOrder.module.css";
import UserOrderItem from "./UserOrderItem";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const UserOrder = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async (e) => {
    setLoading(true);

    try {
      var token = localStorage.getItem("token");
      const data = await fetch(
        // "https://campus-in-backend.herokuapp.com/orderDetails",
        "https://campus-in--backend.herokuapp.com/user/myOrders",
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
    setData(response);
    console.log(response)
    // console.log(response[0].products[0]['product']['name']);
    // console.log(response[0].products[1]);

      setLoading(false);
    } catch (e) {
      alert(e);
    }
  };

  return (
    <Fragment>
      <Navbar/>
        <h1 style={{padding: '20px', fontSize: '30px'}}>MY ORDERS</h1>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      {!isLoading && <div className={styles["main-container"]}>
        <div className={styles.container}>
          <div className={styles.products}>
            <div class="row">
              {data.map((item) => (
                <div class="col-sm-4 mb-2">
                <div className={styles["product-col"]}>
              {/* <div className={styles.item}> */}
                <UserOrderItem
                  key={item._id}
                  id={item._id}
                  date={item.date}
                  items={item.products}
                  status={item.status}
                  username={item.username.toUpperCase()}
                />
                </div>
                </div>
              ))}   
          </div>
        </div>
        </div>
      </div>}
      <Footer/>
    </Fragment>
  );
};

export default UserOrder;
