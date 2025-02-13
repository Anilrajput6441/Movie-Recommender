// https://www.omdbapi.com/?apikey=79b1935e&t=${name}
import React, { useEffect,useState ,useRef} from 'react'
import axios from 'axios'
import Card from './Card';
import Navbar from './Navbar';


const Movie = () => {
  const [isFilter,setIsFilter] = useState(false);
  const [filter,setFilter] = useState(null);
  const [input,setInput] = useState("");
  const [movies,setMovie] = useState([]);
  const inputRef = useRef(null);
  useEffect(() =>{
    
    fetchMovie(input);

 },[input])

 const fetchMovie = async(name) =>{
    
        if(name != ''){

          try{ 
            setMovie([]);
            setIsFilter(true);
            const res = await axios(`https://www.omdbapi.com/?apikey=${import.meta.env.VITE_APP_API_KEY}&t=${name}`)
            setFilter(res.data);
            
          }catch(e){ console.log(e) }
        }
        else{ // if there is no name in input
            try{ 
                const res = await axios(`https://www.omdbapi.com/?apikey=${import.meta.env.VITE_APP_API_KEY}&s=action`)
                setMovie(res.data.Search);
              }catch(e){ console.log(e) }
        }
 }

 const search = () => {
    setInput(document.querySelector('.ipt').value.trim());
    // setInput(inputRef.current.value.trim()); //both above and this are same
 }
  return (
      
    <>
    <Navbar/>
    <div className='mt-6'><input type="text" className="ipt border-2 p-2" placeholder='Enter movie name' ref={inputRef} /><button className="btn bg-amber-600 p-2 ml-1.5" onClick={search}>search</button></div>
     
    {!isFilter? (movies.length > 0 ? <Card data = {movies} type = "array" /> : "Loading..."):""}
    {isFilter ? (filter ? <Card data = {filter} type = "object"/>: "Loading...") : ""}
    </>
  )
}

export default Movie
