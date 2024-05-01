import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navig from './component/Navig/Navig';
import Footer from './component/Footer/Footer';
import Donate from './component/Donate/Donate';
import Moreest from './component/Moreest/Moreest';
import Home from './component/Home.js/Home';
import Register from './component/Register/Register';
import Cart from './component/Cart/Cart';

function App() {
  return (
    <Router>
      <div className="App">
        <Navig/>
        
        <Routes>
          
          <Route path="/" element={<Home/>} />
          
          <Route path="/moreest" element={<Moreest />} />
          <Route path="/register" element={<Register />} />
          
          <Route path="/donate" element={<Donate />} />
          <Route path="/cart" element={<Cart />} />
          
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        
      </div>
    </Router>
  );
}



export default App;
