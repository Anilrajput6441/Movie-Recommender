import {  
  createBrowserRouter,  
  RouterProvider,  
  Route  
} from 'react-router-dom';
import Card from "./Components/Card"
import Counter from "./Components/Counter"
import LoadingBar from "./Components/LoadingBar"
import Movie from "./Components/movie"
import Landing from './Components/Landing';
import Suggestion from './Components/Suggestion';
import Details from './Components/Details';
import useWindowSize from '../utils/useWindowSize';
import { movieContext } from '../MovieContext/movieContext.js'
import { useState } from 'react';


function App() {
  const {height, width} = useWindowSize();
  const [favourites,setFavourites] = useState(0);
  
  console.log(height,width)
  const router = createBrowserRouter([  
    {  
      path: '/',  
      element: <Landing/>,  
    },  
    {  
      path: '/movies',  
      element: <Movie />,  
    },  
    {  
      path: '/counter',  
      element: <Counter />,  
    },  
    {  
      path: '/loadingBar',   
      element: <LoadingBar/>,  
    },  
    {  
      path: '/suggestions',   
      element: <Suggestion/>,  
    },
    {  
      path: '/details',   
      element: <Details/>,  
    },
  ]);  
  

  
     
    
     
  
  return (
    <>
    <movieContext.Provider value={{favourites,setFavourites}}>
    <div className=' flex flex-col justify-center items-center'>  
      <RouterProvider router={router} /> 
    </div>
    </movieContext.Provider>

    </>
  )
}

export default App

