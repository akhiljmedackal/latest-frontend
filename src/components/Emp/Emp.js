import React, { Fragment } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./Emp.css";
import { Button } from "@mui/material";
// import c1 from '../Assets/c1.jpeg'
// import c2 from '../Assets/c2.jpeg'
// import c3 from '../Assets/c3.jpeg'
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
const Services = () => {
  return (
    <Fragment>
      <Navbar />
      <Box sx={{ flexGrow: 1 }} className="services-section">
        <Grid container spacing={8}>
          <Grid item xs={4} md={4} className="services-card">
            <Link to="/addproduct">
              <Box className="canteen-box">
                <h2 className="tt">ADD ITEM</h2>
              </Box>
            </Link>
          </Grid>
          <Grid item xs={4} md={4} className="services-card">
          <Link to="/remove-product">
            <Box className="canteen-box">
              <h2 className="tt">DELETE ITEM</h2>
              {/* <img src={c2} alt='jhbjhb'/>
                <Button className='service-canteen-btn mb-5 mt-2'>
                    Canteen 2
                </Button>  */}
            </Box>
            </Link>
          </Grid>
          <Grid item xs={4} md={4} className="services-card">
            <Link to="/emp-orders">
              <Box className="canteen-box">
                <h2 className="tt">ORDER DETAILS</h2>
                {/* <img src={c3} alt='jhbjhb'/> 
                <Button className='service-canteen-btn mb-5 mt-2'>
                    Canteen 3
                </Button> */}
              </Box>{" "}
            </Link>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </Fragment>
  );
};

export default Services;
