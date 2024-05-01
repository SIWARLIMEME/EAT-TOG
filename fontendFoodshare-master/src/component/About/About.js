import React from 'react';
import about from '../../assets/imag.avif';
import './About.css';

const About = () => {
  return (
    <section id="about" className='pride'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <img src={about} title='img' alt="About Us Image" />
          </div>
          <div className='col-md-6'>
            <h1> ABOUT US </h1>
            <h2>At Eat Together, we're passionate about making a difference in our community by tackling food insecurity. Our mission is simple: to provide nutritious meals to those in need while reducing food waste. With the support of our dedicated team and generous donors, we collect surplus food from local businesses and distribute it to shelters, food banks, and individuals facing hunger.</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
