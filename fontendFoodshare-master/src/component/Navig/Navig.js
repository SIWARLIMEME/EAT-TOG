import React, { Fragment } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Navig.css';
import logo from './../../assets/logo.png';
const Navig = () => {
  return (
   <Fragment>
    <div id="navigation">   
        <a href="/home"> Home</a>
          <a href="#about"> About Us</a>
          <a href="#contact"> Contact</a> 
          <a href="#estab"> Establishments</a>  
          <a href="/donate"> Donate</a>  
          <a href="/cart"> Cart</a>   
    </div>
    <img src={logo} title="logo" alt="Logo"  className='logo'/>

    </Fragment>
    
  );
}
export default Navig ;
