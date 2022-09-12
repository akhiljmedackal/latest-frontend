import React, { useEffect, useState, useContext } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Services from "../Services/Services";
import Emp from "../Emp/Emp";
import AuthContext from "../../store/auth-context";
import AddProduct from "../AddProduct/AddProduct";
import Canteen1 from "../Canteen1/Canteen1";
import Canteen2 from '../canteen2/Canteen2';
import ItemList from '../ItemList/ItemList';
import Cart from "../Cart/Cart";
import EmpOrder from "../EmpOrders/EmpOrder";
import UserOrder from "../UserOrders/UserOrder";
import Store from "../Store/Store";
import Stationary from "../Stationary/Stationary";
import StationaryItemList from "../Stationary/StationaryItem";
import Remove from "../RemoveProduct/Remove";
import AdminServices from "../AdminServices/AdminServices"
import AddUser from "../AddUser/AddUser";
import RemoveUser from '../RemoveUser/Remove';
import RemoveEmployee from '../RemoveEmployee/Remove';

function Routers() {
  let navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  //   const [isLoggedIn, setLoggedIn] = useState(null);
  //   useEffect(() => {
  //     const loggedIn = localStorage.getItem('isLoggedIn');
  //     setLoggedIn(loggedIn);
  //     if (isLoggedIn){
  //        return navigate("/services");
  //     }
  //     return navigate('/auth');
  //  },[isLoggedIn]);
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            authCtx.isLoggedIn ? <Home /> : <Navigate to="/login" />
          }
        />

        {!authCtx.isLoggedIn && (
          <Route path="/login" element={<Login />}></Route>
        )}
        <Route path="/home" element={authCtx.isLoggedIn ? <Home /> : <Navigate to="/login" />} />
        <Route path="/services" element={authCtx.isLoggedIn ? <Services /> : <Navigate to="/login" />} />
        <Route path="/emp" element={authCtx.isLoggedIn ? (authCtx.role === "employee" ? <Emp /> : <Home />) : <Navigate to="/login" />} />
        <Route path="/about" element={authCtx.isLoggedIn ? <About /> : <Navigate to="/login" />} />
        <Route path="/contact" element={authCtx.isLoggedIn ? <Contact /> : <Navigate to="/login" />} />
        <Route path="/add-product" element={authCtx.isLoggedIn ? (authCtx.role === "employee" ? <AddProduct /> : <Home />) : <Navigate to="/login" />} />
        <Route path="/canteen1" element={authCtx.isLoggedIn ? <Canteen1 /> : <Navigate to="/login" />} />
        <Route path="/:canteen/:category" element={authCtx.isLoggedIn ? <ItemList /> : <Navigate to="/login" />} />
        <Route path="/canteen2" element={authCtx.isLoggedIn ? <Canteen2 /> : <Navigate to="/login" />} />
        <Route path="/:canteen/:category" element={authCtx.isLoggedIn ? <ItemList /> : <Navigate to="/login" />} />
        <Route path="/addproduct" element={authCtx.isLoggedIn ? (authCtx.role === "employee" ? <AddProduct /> : <Home />) : <Navigate to="/login" />} />
        <Route path="/cart" element={authCtx.isLoggedIn ? <Cart /> : <Navigate to="/login" />} />
        <Route path="/store" element={authCtx.isLoggedIn ? <Store /> : <Navigate to="/login" />} />
        <Route path="/emp-orders" element={authCtx.isLoggedIn ? (authCtx.role === "employee" ? <EmpOrder /> : <Home />) : <Navigate to="/login" />} />
        <Route path="/user-orders" element={authCtx.isLoggedIn ? <UserOrder /> : <Navigate to="/login" />} />
        <Route path="/store/:category" element={authCtx.isLoggedIn ? <StationaryItemList /> : <Navigate to="/login" />} />
        <Route path="/remove-product" element={authCtx.isLoggedIn ? (authCtx.role === "employee" ? <Remove /> : <Home />) : <Navigate to="/login" />} />
        <Route path="*" element={authCtx.isLoggedIn ? <Home /> : <Navigate to="/login" />} />
        <Route path="/admin" element={authCtx.isLoggedIn ? <AdminServices /> : <Navigate to="/login" />} />
        <Route path="/add-users" element={authCtx.isLoggedIn ? (authCtx.role === "admin" ? <AddUser /> : <Home />) : <Navigate to="/login" />} />
        <Route path="/delete-users" element={authCtx.isLoggedIn ? (authCtx.role === "admin" ? <RemoveUser /> : <Home />) : <Navigate to="/login" />} />
        <Route path="/delete-employees" element={authCtx.isLoggedIn ? (authCtx.role === "admin" ? <RemoveEmployee /> : <Home />) : <Navigate to="/login" />} />
      </Routes>
    </div>
  );
}

export default Routers;
