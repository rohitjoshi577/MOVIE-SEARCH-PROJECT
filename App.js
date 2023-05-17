import React from 'react'
import Header from './Components/Header/Header'
import Slider from './Components/paragraphslider/slider';
import './App.css';
import Available from './Components/Testmonial/trust';
import Footer from './Components/Footer/footer';
import Blog from './Components/blog/blog';
import Navigation from './Components/NavigationBar/navigation';
import { Route, Routes, Outlet } from "react-router-dom";
import Favoritemovies from './Components/Favoritemovies/favoritemovies';


function App() {
  return (
    
    <>
      <Navigation />
      <Outlet />
      <Routes>
        <Route path="/" element={
          <>
          <Header />
          <Slider />
          <Blog />
          <Available /> 
          </>} />
        
        <Route path="/favorites" element={<>
          <Favoritemovies/>
        </>
         } />
      
      

      </Routes>
      
      <Footer/>  
    </>
  )
}

export default App