import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Cart = () => {
  const [donationData, setDonationData] = useState([]);  
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/donation/'); 
        setDonationData(response.data); 
        console.error('Error fetching donation data');
      } finally {
        setLoading(false);  
      }
    };

    fetchData(); 
  }, []);  

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (!donationData || donationData.length === 0) {
    return <div>No donation data available</div>;  
  }

  return (
    <div>
      <h2>Donation Data</h2>
      {donationData.map((data, index) => (
        <div key={index}>
          <p>Noun: {data.noun}</p>
          <p>Address: {data.address}</p>
          <p>City: {data.city}</p>
          <p>Donation: {data.donation}</p>
          <p>Quantity: {data.quantity}</p>
          {}
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Cart;
