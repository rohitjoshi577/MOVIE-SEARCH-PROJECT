import React from 'react'
import './navigation.css';
import logo from './../../images/banner-logo.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navigation() {
  const favorites = useSelector(store => store.favorites.value);
  return (
    <div className='top-flex'>

      <div> 
        <Link to='/'>
          <img src={logo} alt="" className='logo' />
        </Link>
        </div>
      <div className='favorite-container'>
      <Link to='/favorites'>
          <span className="material-icons favorite">favorite</span>
          <p className='favorite-count' >{favorites.length}</p>
      </Link>
        </div>
      </div>
  )
}

export default Navigation