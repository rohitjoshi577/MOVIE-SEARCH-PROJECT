import React, {useEffect, useState} from 'react'
import './favoritemovies.css'
import { useDispatch, useSelector } from 'react-redux';
import { deleteFavorites } from '../../store/favorite-movieSlice';
import { toast } from 'react-toastify';


function Favoritemovies() {
  const storedFavoriteMoviesData = useSelector(store => store.favorites.value);
  const [favoriteMoviesData, setFavoriteMoviesData] = useState([]);
  const [genre, setGenre] = useState('');
  const [sorting, setSorting] = useState('');
  const [searching, setSearching] = useState('');
  
  useEffect(() => {setFavoriteMoviesData(storedFavoriteMoviesData) } , [storedFavoriteMoviesData])
  
  const dispatch = useDispatch();

  function deleteMovieFromFavorite(movie) {
    dispatch(deleteFavorites(movie))
  } 
  
  function FinalSearch() {
    let moviesData = [...storedFavoriteMoviesData];
    
    if (searching) {
      moviesData = moviesData.filter(movie => movie.Title.toLowerCase().includes(searching.toLowerCase()));
      setFavoriteMoviesData(moviesData);
    }

    else {
      setFavoriteMoviesData([...storedFavoriteMoviesData])
     }

    if (genre) {
      moviesData = moviesData.filter(movie => movie.Genre.includes(genre));
      setFavoriteMoviesData(moviesData);
  }
    if (sorting) {
     if (sorting == 'high') {moviesData= [...moviesData].sort((a,b)=> a.imdbRating- b.imdbRating ) }
      else { moviesData = [...moviesData].sort((a, b) => b.imdbRating - a.imdbRating) }
      setFavoriteMoviesData(moviesData);
    }

    



    
    toast.success('all movies filtered', {
      position: "top-right",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
   }
  

   console.log(favoriteMoviesData);
  return (
    <><h1 style={{ textAlign: "center", marginTop: "70px", fontSize: "20px" }}> FAVORITE RESULTS : {favoriteMoviesData.length} </h1>
      
        <div><input type="text" className='search-input' placeholder='search here...' onChange={(event)=>setSearching(event.target.value)} /></div>
      <div className='flex-filter'>
        <div className='select-container'>
          <select name="" id="" className='select' onChange={(e)=>setGenre(e.target.value)} >
            <option value="">SELECT GENRE (all)</option>
            <option value="Action">ACTION</option>
            <option value="Sport">SPORTS</option>
              <option value="Comedy">COMEDY</option>
              <option value="Drama">DRAMA</option>
            <option value="Crime">CRIME</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Animation">Animation</option>
            <option value="Fantasy">Fantasy</option>
          </select>
        </div>
        <div className='select-container'>
          <select name="" id="" className='select-2' onChange={(e)=>setSorting(e.target.value)}>
            <option value="">SORT RATINGS (default)</option>
              <option value="high">Ratings (low to high)</option>
              <option value="low">Ratings (high to low)</option>
          </select>
        </div>
        </div>
        <button className='submit' onClick={() => FinalSearch()}> SHOW RESULTS </button>
      

      
        

      
          
      <div className='favorite-container-moviePage'>
        
      
      {favoriteMoviesData.map(movie => 
        <div key={movie.imdbID} className='card' >
          <img src={movie.Poster} alt="" className='img-favorite' />
          <p className='title' style={{textAlign:"center"}}>{movie.Title.substring(0, 20)}...</p>
          <p className='favorite-details'>{movie.imdbRating} ⭐</p>
          <p className='favorite-details'> Release date : {movie.Released}</p>
          <p className='favorite-details'> Genres : {...movie.Genre}</p>
          <button className='red-btn' style={{ marginBottom: "20px" }} onClick={() => {
            deleteMovieFromFavorite(movie);
            console.log(movie);
          }}>Delete movie</button>
        </div>
      )}

      </div>
      </>
  )
}

export default Favoritemovies;