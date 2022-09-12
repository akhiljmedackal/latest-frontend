import React, {useContext} from 'react'
import './Banner.css'
import { Link } from 'react-router-dom';
import { Button } from 'bootstrap';
import AuthContext from "../../store/auth-context";

function Banner() {
  const authCtx = useContext(AuthContext);

  return (
    <div className='Banner'>
        <div className='ak'>
        <div className='content'>
            <h2 className='title'>Campus in-Service</h2>
            
                <h2 className='description'>Why wait in long queue when you can order from Campus in-Service</h2>
                {authCtx.role === 'user' && <Link to='/services'><h2>Get Started</h2></Link>}
                {authCtx.role === 'employee' && <Link to='/emp'><h2>Get Started</h2></Link>}
                {authCtx.role === 'admin' && <Link to='/admin'><h2>Get Started</h2></Link>}
        </div>
        </div>
    </div>
  )
}

export default Banner