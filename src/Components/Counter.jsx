import { useEffect, useState } from "react" 


const Counter = () => {

  const [count, setCount] = useState(0);
  const show = ()=> { alert("api called")}
  useEffect(() =>{show()},[count]);



  const handleClick = () => {
    setCount(count+1)
  }

  return (
    <div className='text-6xl'>
      <p>count:{count}</p>  {/*  to show variable in jsx we use curly brackets */}
      <button className="btn bg-black text-white text-md p-2 rounded-md " onClick={handleClick}>click me</button>
      
    </div>
  )
}

export default Counter
