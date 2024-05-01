import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios'; // Import axios
import './Donate.css';
import sou from './../../assets/smile.png';
import Cart from '../Cart/Cart';

const Donate = () => {
  const [formData, setFormData] = useState({
    noun: '',
    email: '',
    password: '',
    address: '',
    city: '',
    donation: '',
    quantity: '',
    image: null, // Assuming you're handling file uploads
  });

  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/donation/', formData); 
      alert('Donation submitted successfully!');
    } catch (error) {
      console.error('Error submitting donation:', error);  
    }
  };
  return (
    <section id='donate'>
      <div className='container4'>
        <div className='row'>
          <div className='col-md-0'>
            <h1>Help To Save</h1>
            <p>Join us in making a difference! At Eat Together, we believe in the power of community and compassion...</p>
            <form onSubmit={handleSubmit} encType="multipart/form-data" className='ff'>
              <input name="noun" value={formData.noun} onChange={handleChange} placeholder="Noun of the establishment" /><br />
              <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" /><br />
              <input name="address" value={formData.address} onChange={handleChange} placeholder="Address" /><br />
              <input name="city" value={formData.city} onChange={handleChange} placeholder="City" /><br />
              <input name="donation" value={formData.donation} onChange={handleChange} placeholder="Donation" /><br />
              <input name="quantity" value={formData.quantity} onChange={handleChange} placeholder="Quantity" /><br />
              <Button variant="primary" type="submit">Submit</Button>
            </form>
          </div>
        </div>
      </div>
      {submittedData.length > 0 && <Cart formData={submittedData} />}
    </section>
  );
}

export default Donate;
