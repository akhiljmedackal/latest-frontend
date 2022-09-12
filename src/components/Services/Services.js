import React, { Fragment } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './services.css'
import { Button } from '@mui/material';
import c1 from '../Assets/c1.jpeg'
import c2 from '../Assets/c2.jpeg'
import c3 from '../Assets/c3.jpeg'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
const Services = () => {
  return (
    <Fragment>
        <Navbar/>
    <Box sx={{ flexGrow: 1 }} className="services-section">
      <Grid container spacing={8}>
        <Grid item xs={4} md={4} className="services-card">
        <Link to='/canteen1'><Box className='services-box'>
                <img src={c1} alt='jhbjhb'/>
                <p className='cat'><b>Canteen 1</b></p>
           </Box></Link>
           
        </Grid>
        <Grid  item xs={4} md={4} className="services-card">
        <Link to='/canteen2'><Box className='services-box'>
                <img src={c2} alt='jhbjhb'/>
                <p className='cat'><b>Canteen 2</b></p>
           </Box></Link>
        </Grid>
        <Grid item  xs={4} md={4} className="services-card">
        <Link to='/store'><Box className='services-box'>
                <img src={c3} alt='jhbjhb'/>
                <p className='cat'><b>Store</b></p>
           </Box></Link>
        </Grid>
       
      </Grid>
    </Box>
    <Footer/>
    </Fragment>
  )
}

export default Services