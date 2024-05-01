import React from 'react';
import {  Button } from 'react-bootstrap';
import './Register.css';
import sou from './../../assets/smile.png' ;

const Register = () => {
  return (
    <section  id='donate1'>
      <div className='container4'>
        <div className='row'>
              < div className='col-md-0'>
              
              <h1>WELCOME ! </h1>
              <img src={sou} title='img' alt="About Us Image"  />
              <p>"Thank you for joining Eat Together ! By registering as a donor, you're taking an important step towards reducing food waste and helping those in need. Your contributions will make a real difference in our community. Together, let's make a positive impact by sharing surplus food and fostering a more sustainable future. Welcome aboard!"</p>
              <form action="/submit_donation" method="POST" enctype="multipart/form-data">
            
              <input  placeholder="noun of the establishment" /> <br/>
              <input type="email" placeholder="Enter email" /> <br/>
              <input type="password" placeholder="Password"  /> <br/>
              <input  placeholder="Addresse" /> <br/>
              <input  placeholder="city" /> <br/>
              
              
              <input type="file" placeholder="image OF THE ESTABLISHMENT"  /> <br/>
          

            

              <Button variant="primary" type="submit"> Submit</Button>
               </form>
          
                </div>
       
      </div>
      </div>

    </section>
  );
}

export default Register;
