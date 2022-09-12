import React, { Fragment } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./AdminServices.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
const Services = () => {
  return (
    <Fragment>
      <Navbar />
      <Box sx={{ flexGrow: 1 }} className="services-section1">
        <Grid container spacing={8}>
          <Grid item xs={4} md={4} className="services-card1">
            <Link to="/add-users">
              <Box className="canteen-box1">
                <h2 className="tt">ADD USERS</h2>
              </Box>
            </Link>
          </Grid>
          <Grid item xs={4} md={4} className="services-card1">
            <Link to="/delete-users">
              <Box className="canteen-box1">
                <h2 className="tt">DELETE USER</h2>
              </Box>
            </Link>
          </Grid>
          <Grid item xs={4} md={4} className="services-card1">
            <Link to="/delete-employees">
              <Box className="canteen-box1">
                <h2 className="tt">DELETE EMPLOYEE</h2>
              </Box>
            </Link>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </Fragment>
  );
};

export default Services;
