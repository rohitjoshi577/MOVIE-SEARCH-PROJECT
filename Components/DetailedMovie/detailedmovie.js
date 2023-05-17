import React, {useEffect, useState } from 'react'
import './detailedmovie.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useDispatch } from 'react-redux';
import { addToFavorites } from '../../store/favorite-movieSlice';
import {toast } from 'react-toastify';


function Detailedmovie(props) {
  const id = props.id;


  const [detailedMovie, setDetailedMovie] = useState(" ");

  useEffect(() => {
    if (id) { 

      async function getMovieData() {
        const data = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=27a01c49&plot=full`);
        const jsonData = await data.json();
        setDetailedMovie(jsonData);
       }

      getMovieData();

    }
   },[id])




  return (
    <>
      {detailedMovie ? <Card data={detailedMovie} setMovieDetail={props.setMovieDetail} />  : <p> Loading..</p>  }
      </>
  )
}


function Card(props) {

  const data = props.data;
  console.log(data);
  const dispatch = useDispatch();

  function AddFavorite() {
    dispatch(addToFavorites({ ...data }));
   }


  return (
    <div className='detail-movie-container'  >
      <img src={data.Poster} alt="" className='movie-img' />
      <p className='title-detail'>{data.Title}</p>
      <p className='movie-plotdetails'>{data.Plot}</p>
      <p className='movie-otherdetails'>Writers : {data.Writer}</p>
      <p className='movie-otherdetails'>  {data.imdbRating} ⭐</p>
      <p className='movie-otherdetails'>{data.Genre}</p>
      <p className='movie-otherdetails'>{data.Type}</p>
      <button className='btn' onClick={() => {
        AddFavorite();
       
      }}>Add to favorites</button>
      <a href={`https://www.youtube.com/results?search_query=${data.Title}`} target='__blank'>
        <button className='btn' onClick={() => { 
          toast.info(` searching ${data.Title} on youtube`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });

        }}>Search on Youtube</button>
      </a>
      <AnchorLink href='#movieGrid'>
        <button className='red-btn' onClick={() => {
          props.setMovieDetail('');
          toast.info(` detailed section is hidden`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
        }}>Hide detail</button>
      </AnchorLink>
    </div>
  )

 }

export default Detailedmovie




// tt0185103 >> example of id