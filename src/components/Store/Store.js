import React, { Fragment } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./Store.css";
import { Button } from "@mui/material";
// import c1 from '../Assets/c1.jpeg'
// import c2 from '../Assets/c2.jpeg'
// import c3 from '../Assets/c3.jpeg'
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
const Store = () => {
  return (
    <Fragment>
      <Navbar />
      <Box sx={{ flexGrow: 1 }} className="services-section">
        <Grid container spacing={8}>
          <Grid item xs={4} md={4} className="services-card">
            <Link to="/store/stationary">
              <Box className="canteen-box">
                <h2 className="tt">Stationary</h2>
              </Box>
            </Link>
          </Grid>
          <Grid item xs={4} md={4} className="services-card">
          <Link to="/store/studymaterial">
            <Box className="canteen-box">
              <h2 className="tt">Study Material</h2>
              {/* <img src={c2} alt='jhbjhb'/>
                <Button className='service-canteen-btn mb-5 mt-2'>
                    Canteen 2
                </Button>  */}
            </Box>
            </Link>
          </Grid>
          
        </Grid>
      </Box>
      <Footer />
    </Fragment>
  );
};

export default Store;
