import React from "react";
import Header from '../Header/Header';
import './Home.css' ; 
import { Fragment } from "react"; 
import About from "../About/About";
import Estab from "../Estab/Estab";
import Footer from "../Footer/Footer";
const Home =() =>{
  return (
<Fragment>
<Header/>
   <section className='numbers'> 
     <div className='container'>
        <div className='row'>
            <div className='col-md-3'>
               <h2> 287+</h2>
                <h6>restaurants </h6>
             </div>
            <div className='col-md-3'>
                <h2>587+</h2>
                  <h6>Shops</h6>
            </div>
              <div className='col-md-3'>
                   <h2>1452+</h2>
                   <h6>Active users</h6>
               </div>
          </div>
      </div>
   </section>
<About/>
<Estab/>
<Footer/>
</Fragment>
  )
}
export default Home ;
