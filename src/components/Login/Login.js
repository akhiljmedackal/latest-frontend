import React, { useState, useContext } from "react";
import "./Login.css";
import AuthContext from "../../store/auth-context";
import demo2 from "../Assets/demo2.jpeg";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPwd] = useState("");
  const [loading, setLoading] = useState(false);

  const history = useNavigate();
  const authCtx = useContext(AuthContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = await fetch(
        "https://campus-in-backend.herokuapp.com/signin",
        {
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: password,
          }),
          mode: "cors",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      const response = await data.json();
      console.log(response.role);

      setEmail("");
      setPwd("");
      setLoading(false);

      if (!response.role) {
        alert("Invalid Email or Password!");
      } else {
        authCtx.login(response.token, response.username, response.role);

        history("/home", { replace: true });
      }
    } catch (e) {
      alert(e);
    }
  };

  const changeEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const changePwdHandler = (e) => {
    setPwd(e.target.value);
  };

  return (
    <>
      <Navbar />
      <div className="login">
        <div className="login-section">
          <img
            className="login-img"
            src={demo2}
            alt="Business view - Reports"
          />

          <form className="form" onSubmit={submitHandler}>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="name@email.com"
                value={email}
                onChange={changeEmailHandler}
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="password"
                value={password}
                onChange={changePwdHandler}
              />
            </div>
            {loading && (
              <button
                type="submit"
                style={{
                  width: "310px",
                  height: "50px",
                  color: "#000000",
                  fontSize: "12px",
                }}
              >
                SIGNING IN
              </button>
            )}
            {!loading && (
              <button type="submit" className="primary">
                Sign In
              </button>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
