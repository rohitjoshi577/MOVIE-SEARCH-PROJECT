import { configureStore } from '@reduxjs/toolkit'
import favoriteReducer from './favorite-movieSlice'

export const store = configureStore({
  reducer: {
    favorites: favoriteReducer,
  },
})