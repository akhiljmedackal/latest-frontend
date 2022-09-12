import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from "../Footer/Footer";
import "./About.css"
function About() {
  return (
    <div>
        <Navbar/>
        <h1>About us</h1>
        <p className='aboutus'>This is a web app for the teachers and staffs to order things without waiting.<br/>
          It is a simple web app for ordering food and store items inside college campus.<br/>
          
          Students and Faculties can login with their given email id and password<br/>
          They can select items from respective services and add it to the cart.<br/>
          After adding to the cart you can procced to pay.<br/>
          After that you can place the order.<br/>
          You can purchase the item from the respective services<br/>
          There is no refund policy.
        </p>
        <Footer/>
    </div>
  )
}

export default About