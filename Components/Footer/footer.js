import React from 'react'
import './footer.css'
import logo from './../../images/banner-logo.png';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-flex'>
        <p className='footer-big-heading'>GET CONNECTED !</p>
        <div>
          <img src={logo} className='footer-logo'/>
        </div>
        
        <p className='footer-para'> @ Developed by Rohit Joshi</p>



      </div>
    </div>
  )
}

export default Footer