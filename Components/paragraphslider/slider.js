import React, { useEffect, useState } from 'react';
import './slider.css';
import MoviesCard from '../renderedMovies/moviesCard';
import Detailedmovie from '../DetailedMovie/detailedmovie';
import { toast } from 'react-toastify';


function Slider() {
  const [searchQuery, setSearchQuery] = useState('iron man');
  const [movieDetail, setMovieDetail] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getAPIFIRST() {
      try {
        const data = await fetch(`https://www.omdbapi.com/?s=${searchQuery}&apikey=27a01c49`);
        const jsonData = await data.json();
        setMovies(jsonData.Search);
      }
      catch (error) { console.log(error) }
    }

    getAPIFIRST();
  }, []);

  async function getAPI() {
    try {
      toast('fetching data from server', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      const data = await fetch(`https://www.omdbapi.com/?s=${searchQuery}&apikey=27a01c49`);
      const jsonData = await data.json();
      setMovies(jsonData.Search);
      setMovieDetail('');
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='movies-section' id="movieGrid">

      <p className='feature-heading'>SEARCH MOVIE HERE </p>
      <p className='results-number'>Search results-{movies==undefined ? "no result found" : movies?.length}</p>
      <div>
        <input type="text" className='input-movie-search' id='detail-link' placeholder='search here...' onChange={(event) => setSearchQuery(event.target.value)} />
        
        <div className='button-flex'>
          <button className='search-button' onClick={() => {
            if (searchQuery) {
              getAPI();
            }
            
          }}>Search</button>
          
        </div>
        {movieDetail ? <Detailedmovie id={movieDetail} setMovieDetail={setMovieDetail } /> : null }
        

        {movies != undefined ? <MoviesCard movies={movies} setMovieDetail={setMovieDetail } /> :null }
        
      </div>
    </div>
  )
}

export default Slider