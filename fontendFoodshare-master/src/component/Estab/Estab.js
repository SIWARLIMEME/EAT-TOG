import React from 'react';
import { Link } from 'react-router-dom';
import estab1 from './../../assets/imag1.png';
import './Estab.css';

const Estab = () => {
  return (
    <section id="estab" className='pride1'>
      <div className='container1'>
        <div className='row1'>
          <div className='col-md-6'>
            <img src={estab1} title='img' alt="estab Image" />
          </div>
          <div className='col-md-6'>
            <h1> ESTABLISHMENTS </h1>
            <h2> Our platform proudly showcases a curated selection of registered establishments committed to providing delicious meals while fostering a culture of sustainability and compassion. Whether you're craving comforting classics or daring dishes, Eat Together connects you with eateries dedicated to making a difference. Join us in supporting local businesses and tackling food insecurity, one bite at a time.</h2>
            <Link to="/moreest">
              <button>Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Estab;
