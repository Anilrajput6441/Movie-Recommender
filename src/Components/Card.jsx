import React from 'react'

const Card = (props) => {
    
    const {data,type} = props;
   console.log(data)
  return (
    <div>
      {/* */}
      {type === "array" ?  <div className='card-Holder flex flex-wrap border-black border-[1px] m-5'>
        {data.map((movie,index) => (
          <div key={index} className='card border-black border-[1px] w-[15vw] m-2'>
            <img height={120} width={140} src={movie.Poster} alt="" />
            <p>{movie.Title}</p>
            <p>{movie.Actors}</p>
            <p>{movie.Year}</p>
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
