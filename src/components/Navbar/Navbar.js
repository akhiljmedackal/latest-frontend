import React, {useEffect, useState, useContext} from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import AuthContext from "../../store/auth-context";
import demo4 from '../Assets/cart3.png';
const Navbar = () => {
  // const [isLoggedIn, setLoggedIn] = useState(null);
  // const [isName, setName] = useState(null);

  const authCtx = useContext(AuthContext);

  // useEffect(() => {
  //   const loggedIn = localStorage.getItem('isLoggedIn');
  //   const name = localStorage.getItem('username');
  //   setLoggedIn(loggedIn);
  //   setName(name);
  // }, []);

  const handleLogout = () => {
    authCtx.logout();
  }
  return (
     <div className='Navbar'>
        <span className='nav-logo'>Campus in-Service</span>
        <div className='nav-items'>
      <Link to='/home'>Home</Link>
      <Link to='/about'>About</Link>
        {authCtx.role === "user" && <Link to='/cart'>
          <img className='cart-img' src={demo4} alt="cart image" /></Link>}
        {authCtx.role === "user" && <Link to='/user-orders'>My Orders</Link>}
      {!authCtx.isLoggedIn && <Link to='/login'>Login</Link>}
      <h8  style={{color: '#ffffff', fontSize: '18px'}}>{authCtx.name}</h8>
      {authCtx.isLoggedIn && <Link onClick={handleLogout} to='/login'>Logout</Link>}
    
      
    </div>
    
    </div>
  )
}

export default Navbar