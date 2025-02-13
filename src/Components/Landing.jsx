import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Landing = () => {
  return (
    
    <div className=' h-[100vh] w-[100vw] flex  flex-col '>
      <Navbar/>
      <p>Landing Page</p>
     <Link to = "/movies"><button className='mt-5 bg-black text-white cursor-pointer p-2'>See movies</button></Link> 
    </div>
  )
}

export default Landing
