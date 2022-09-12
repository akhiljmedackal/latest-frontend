import { Fragment, useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import CartContext from "../../store/cart-context";
import axios from 'axios';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Cart = () => {
  const [isLoading, setLoading] = useState(false);
  const cartCtx = useContext(CartContext);
  const history = useNavigate();

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async (e) => {
    cartCtx.clearCart();
    setLoading(true);

    try {
      var token = localStorage.getItem("token");
      const data = await fetch(
        "https://campus-in--backend.herokuapp.com/user/myCart",
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
      for (var u in response) {
        cartCtx.addItem({
          _id: response[u].product._id,
          name: response[u].product.name,
          image: response[u].product.image,
          price: response[u].product.price,
          quantity: response[u].quantity,
        });
      }

      setLoading(false);
    } catch (e) {
      alert(e);
    }
  };

  function loadPaymentPage() {
    var token = localStorage.getItem("token");
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onerror = () => {
      alert('Razorpay SDK failed to load. Are you online?');
    };
    const config = {
      headers: { "content-type": "application/json; charset=UTF-8", "x-auth-token": token },
    };
    script.onload = async () => {
      try {
        setLoading(true);
        await axios.get('https://campus-in--backend.herokuapp.com/checkout', config);
        const result = await axios.post('https://campus-in--backend.herokuapp.com/create-pay-order', {
          amount: cartCtx.totalAmount + '00',
        }, config);
        const { amount, id: order_id, currency } = result.data;
        const {
          data: { key: razorpayKey },
        } = await axios.get('https://campus-in--backend.herokuapp.com/get-razorpay-key', config);

        const options = {
          key: razorpayKey,
          amount: amount.toString(),
          currency: currency,
          name: 'Campus In Service',
          description: 'Book Your Food',
          order_id: order_id,

          handler: async function () {
            history("/user-orders", { replace: true });
          },
          prefill: {
            name: 'Alen',
            email: 'alen@gmail.com',
            contact: '9801847334',
          },
          theme: {
            color: '#80c0f0',
          
          },
        };

        setLoading(false);
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      } catch (err) {
        alert(err);
        setLoading(false);
      }
    };
    document.body.appendChild(script);
  }

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

  const cartItemRemoveHandler = async (id) => {
    setLoading(true);

    try {
      var token = localStorage.getItem("token");
      const data = await fetch(
        `https://campus-in--backend.herokuapp.com/user/removeFromCart/${id}`,
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
      console.log(response);
      cartCtx.removeItem(id);

      setLoading(false);
    } catch (e) {
      alert(e);
    }
  };

  return (
    <Fragment>
      <Navbar/>
      {/* <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop> */}
      {/* {!isLoading &&  */}
      {<div className={styles["main-container"]}>
        <div className={styles.container}>
          <div className={styles.products}>
              {cartCtx.items.map((item) => (<div className={styles.item}>
                <CartItem
                  key={item._id}
                  id={item._id}
                  title={item.name}
                  image={item.image}
                  price={item.price}
                  quantity={item.quantity}
                  onAdd={cartItemAddHandler.bind(null, {...item, quantity: 1})}
                  onRemove={cartItemRemoveHandler.bind(null, item._id)}
                /></div>
              ))}   
          </div>
          <div className={styles.price}>
            <div className={styles["price-container"]}>
              <div className={styles.details}>
                <h1 className={styles.details}>ITEMS: {cartCtx.items.length}</h1>
                <h1 className={styles.details}>TOTAL AMOUNT:  ₹{cartCtx.totalAmount}</h1>
              </div>

              <button className={styles.proceed} disabled={isLoading} onClick={loadPaymentPage}>Procced To Pay</button>
            </div>
          </div>
        </div>
      </div>}
      <Footer/>
    </Fragment>
  );
};

export default Cart;
