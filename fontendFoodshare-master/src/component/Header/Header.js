import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  

  return (
    <header>
      <div className='container'>
        <div className='col-md-0'>
          <h2>Live unforgettable meals <br/>and cherished moments <br/> with Eat Together, <br/>your ultimate food sharing platform</h2>
          
          <Link to="/register">
            <button>Register</button>
            </Link>
          </div>
          </div>
    </header>
  );
}

export default Header;
