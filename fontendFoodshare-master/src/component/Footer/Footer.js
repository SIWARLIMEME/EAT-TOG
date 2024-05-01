import React from 'react'
import './Footer.css';
import  face from'../../assets/facebook-removebg-preview.png';
import  inst from'../../assets/instagram-removebg-preview.png';
import  snap from'../../assets/snapchat-removebg-preview.png';
import  tic from'../../assets/tic-tac-removebg-preview.png';
import  what from'../../assets/whatsapp-removebg-preview.png';



const Footer = ()=> {
  return (
    <section id="contact"> 
    
    <div className='container3'>
        <div className='row'>
          <div className='col-md-6'>
          <h2> Reclamation</h2>
            <form> 
              <input type="email" placeholder="Enter Email"/> <br/>
              <input type="text"  placeholder='your reclamation'/> 
              <button type="submit"> Send </button>
            </form>
            <h1>Social Media</h1>
            <ul className="social">
                <li><a href='https://www.facebook.com/siwar.limem.31?mibextid=ZbWKwL'> <img src={face}className="img-social"/></a></li>
                <li><a href='#'> <img src={inst}className="img-social"/></a></li>
                <li><a href='#'> <img src={snap}className="img-social"/></a></li>
                <li><a href='#'> <img src={tic}className="img-social"/></a></li>
                <li><a href='#'> <img src={what}className="img-social"/></a></li>
            </ul>
            <span> 
                Copyright -- 2024 Design & Developed By GTE 
              </span>
          </div>
        </div>
        
      </div>
             
      
       </section>
      
  );
}

export default Footer ;