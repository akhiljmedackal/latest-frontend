import { Fragment, useEffect, useState } from "react";
import styles from "./Remove.module.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import RemoveUserItem from "./RemoveItem";

const RemoveUser = () => {
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
        `https://campus-in--backend.herokuapp.com/users`,
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
    const type = "user";

    try {
      var token = localStorage.getItem("token");
      const data = await fetch(
        `https://campus-in--backend.herokuapp.com/user/remove/${id}?type=${type}`,
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
      setData(response.users);
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
        Remove User
      </h3>
      <div className={styles["main-container"]}>
        <ul className={styles.container}>
          {!isLoading && data.length == 0 && (
            <h1 style={{ fontSize: "20px" }}>NO USERS FOUNDS!!!</h1>
          )}
          {data.map((item) => (
            <RemoveUserItem
              key={item._id}
              id={item._id}
              name={item.username}
              role={item.role}
              password={item.password}
              email={item.email}
              onRemove={removeItemHandler.bind(null, item._id)}
            />
          ))}
        </ul>
      </div>
      <Footer/>
    </Fragment>
  );
};

export default RemoveUser;
