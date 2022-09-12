import React, { useState } from "react";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./AddUser.css";

const AddUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");
  const [isLoading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      var token = localStorage.getItem("token");
      await fetch(
        "https://campus-in--backend.herokuapp.com/adduser/register",
        {
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: password,
            role: role,
            username: username
          }),
          mode: "cors",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-auth-token": token,
          },
        }
      );

      alert("User Successfully Added")

      setEmail("");
      setPassword("");
      setRole("");
      setUsername("");
      setLoading(false);

    } catch (e) {
      alert(e);
    }
  };

  const changeEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const changePwdHandler = (e) => {
    setPassword(e.target.value);
  };

  const changeRoleHandler = (e) => {
    setRole(e.target.value);
  };
  const changeNameHandler = (e) => {
    setUsername(e.target.value);
  };

  return (
    <>
      <Navbar />
      <div className="login">
        <div className="login-section">
          <form className="form" onSubmit={submitHandler}>
            <h3 className="titleproduct" style={{ fontSize: "30px" }}>
              ADD USERS
            </h3>
            <div className="input-group">
              <label htmlFor="title">Email</label>

              <input
                type="email"
                name="email"
                value={email}
                onChange={changeEmailHandler}
              />
            </div>
            <div className="input-group">
              <label htmlFor="category">Password</label>
              <input
                type="text"
                name="password"
                value={password}
                onChange={changePwdHandler}
              />
            </div>
            <div className="input-group">
              <label htmlFor="quantity">Username</label>
              <input
                type="text"
                name="Username"
                value={username}
                onChange={changeNameHandler}
              />
            </div>
            <div className="input-group">
              <label htmlFor="services">Role</label>
              <input
                type="text"
                name="Role"
                value={role}
                onChange={changeRoleHandler}
              />
            </div>
            {isLoading && (
              <button
                type="submit"
                style={{
                  width: "310px",
                  height: "50px",
                  color: "#000000",
                  fontSize: "12px",
                }}
              >
                ADDING
              </button>
            )}
            {!isLoading && (
              <button type="submit" className="primary">
                ADD
              </button>
            )}
          </form>
          
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddUser;
