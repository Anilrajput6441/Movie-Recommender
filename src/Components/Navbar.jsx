import React from 'react'
import { useContext } from 'react'
import { movieContext } from '../../MovieContext/movieContext'

const Navbar = () => {
  const { favourites, setFavourites } = useContext(movieContext)
  return (
    <div className='h-[10vh] w-[100vw]  flex '>
      <div className='flex justify-items-start items-center'>
        <img src="public/film.png" alt="" className='w-[50px] h-[50px] mt-2 ml-2 cursor-pointer' />
        <p className='w-[30vw]  flex p-6 pl-[1vw] text-2xl font-extrabold cursor-pointer' >The Theater</p>
      </div>
      <ul className='w-[70vw] flex justify-evenly p-6 '>
        <li className='cursor-pointer'>Action</li>
        <li className='cursor-pointer'>Horror</li>
        <li className='cursor-pointer'>Romantic</li>
        <li className='cursor-pointer'>Thriller</li>
        <li>{favourites}</li>
      </ul>
    </div>
  )
}

export default Navbar
