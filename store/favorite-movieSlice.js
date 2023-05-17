import { createSlice } from '@reduxjs/toolkit';
import {toast } from 'react-toastify';




const initialState = {
  value: localStorage.getItem('lastFavorite')
  ? JSON.parse(localStorage.getItem('lastFavorite'))
  : [] ,
}

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const filteredMovies = state.value.filter((movie) => movie.imdbID === action.payload.imdbID)
      if (filteredMovies.length ==0) {
        state.value = [...state.value, action.payload];
        window.localStorage.setItem("lastFavorite", JSON.stringify(state.value));
        toast.success(`${action.payload.Title}  added to favorite`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
       
        
      }
      else {
        toast.warn(`${action.payload.Title} is already a favorite movie`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        
      }
      

    },
    deleteFavorites: (state, action) => {
      state.value = state.value.filter(movie => movie.imdbID !== action.payload.imdbID);
      window.localStorage.setItem("lastFavorite", JSON.stringify(state.value));
      toast.error(`${action.payload.Title} is removed from favorites`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });

    }
  }
})

export const { addToFavorites ,deleteFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;