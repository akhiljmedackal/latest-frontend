import { Button } from 'bootstrap';
import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './Home.css'
const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner/>
      <div>
        <h2 className='center'>How It Works</h2>
      </div>
      <div className='container1'>
        <h3 className='text'>Login to account</h3>
        <h4>login to existing account to get started</h4>
        <p>An account is created with your college id and a desired password</p>
      </div>
      <div className='container2'>
        <h3 className='text'>Explore varieties</h3>
        <h4>Order your  food</h4>
        <p>Order your favourite food and enjoy </p>
      </div>
      <div className='container3'>
        <h3 className='text'>Checkout</h3>
        <h4>When you done check out and get it prepacked</h4>
        <p>When you done check out and get it prepacked with ease</p>
      </div>
      
      <Footer />
      </div>
  )
}

export default Home;