import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { movieContext } from '../../MovieContext/movieContext';

const Card = (props) => {
  const { favourites, setFavourites } = useContext(movieContext);  // useContext hook to get the state from the MovieContext.
  const navigate = useNavigate();  // useNavigate hook to navigate to another route.
  const handleNavigate=(movie)=>{navigate("/details",{state:{data:movie,user:"anil"}})}
    const {data,type} = props;
   console.log(data)
  return (
    <div>
      {/* */}
      {type === "array" ?  <div className='card-Holder flex flex-wrap border-black border-[1px] m-5'>
        {data.map((movie,index) => (
          <div key={index} className='card border-black border-[1px] w-[15vw] m-2'>
            <img height={120} width={140} src={movie.Poster} alt=""  onClick={()=>{handleNavigate(movie)}}/>
            <p>{movie.Title}</p>
            <p>{movie.Actors}</p>
            <p>{movie.Year}</p>
            <button onClick={()=>{setFavourites(favourites+1)}}>❤️</button>
          </div>
        ))}
      </div> :  <div className='card h-[56vmin] w-[25vw] border-black border-[1px] m-5'>
        <img height={120} width={140} src={data.Poster} alt="" />
        <p>{data.Title}</p>
        <p>{data.Actors}</p>
        <p>{data.Year}</p>
       
        </div>}
    </div>
  )
}

export default Card
