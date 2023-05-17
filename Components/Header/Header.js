import React from 'react';
import './Header.css';
import logo from './../../images/banner-logo.png';
import award1 from './../../images/award1.png';
import award2 from './../../images/award2.png';


function Header() {
  
  
  return (
  
    <div className='hero'>
      

      <div >
        <img src={logo} alt="" className='logo-big' />
       
          <div> 
            
            <p className='web-desc'>Movie search App</p>
      <div className='bottom-flex'>
        <img src={award1} alt="" />
        <img src={award2} alt="" />
            </div>
        </div>
        
      </div>
    </div>
    
    
      
  )
}

export default Header;