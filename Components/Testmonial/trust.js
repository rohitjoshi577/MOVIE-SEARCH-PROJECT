import React from 'react'
import './trust.css';
import available from './../../images/available.png'
import apple from './../../images/apple.png';
import netflix from './../../images/netflix.png';
import hbogo from './../../images/hbogo.png';
import play from './../../images/play.png';
import {toast } from 'react-toastify';


function Available() {
  return (
    <>
      <div className='available-section'>
      <p className='available'>Available On: </p>
        <img src={available} alt="" className='imgc' />
        
        <div className='app-flex' onClick={() => { 
          toast.info('Not avaialable for now', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });

        }}>
          <div>
            <img src={play } alt="" className='available-img' />
          </div>
          <div>
            <img src={hbogo } alt="" className='available-img'/>
          </div>
          <div>
            <img src={ netflix} alt="" className='available-img'/>
          </div>
          <div>
            <img src={ apple} alt="" className='available-img'/>
          </div>
        </div>
        </div>
    </>
  )
}

export default Available