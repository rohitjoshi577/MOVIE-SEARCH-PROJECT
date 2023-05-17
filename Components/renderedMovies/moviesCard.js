import React from 'react'
import './moviesCard.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import {toast } from 'react-toastify';

function MoviesCard(props) {
  
  return (
    <>
      
    <div className="movie-grid" >
      {props.movies.map(movie => <div className='card' key={movie.imdbID} >
        <img src={movie.Poster} alt="" className='movie-pic' />
        <p className='title'>{movie.Title}</p>
        <div className='about-flex'>
        <p>{movie.Year}</p>
        <p>{movie.Type}</p>
          
        </div>
        <div className='button-container'>
          <AnchorLink href='#detail-link'>
            <button className='btn' onClick={() => {
              props.setMovieDetail(movie.imdbID);
              toast.info('scrolling to detailed section', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            }}>Details</button>
          </AnchorLink>
        </div>

      </div>) }
      </div>
      </>
  )
}

export default MoviesCard