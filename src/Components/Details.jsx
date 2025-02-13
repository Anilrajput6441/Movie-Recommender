import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar';
import { useContext } from'react';
import { movieContext } from '../../MovieContext/movieContext';


const Details = () => {
  const {favourites, setFavourites} = useContext(movieContext);  // useContext hook to get the state from the MovieContext. 
  
  // Get the movie data from the location state.
 const location  = useLocation();
 
 const{Title,Year,Poster} = location?.state?.data;
console.log(location?.state?.data)
  return (
  <>
  <Navbar/>
    <div className=' flex flex-col'>
      
      <p>details</p>
      <img src={Poster} alt="" />
      <p>{Title}</p>
      
      <p>{Year}</p>
      <button onClick={()=>{setFavourites(favourites+1)}}>❤️</button>
    </div>
    </>
  )
}

export default Details
