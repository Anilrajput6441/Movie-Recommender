import React, { useEffect , useState} from 'react'

const LoadingBar = () => {
    const [count, setCount] = useState(0)
    useEffect(() =>{ 
       const intervalId=setInterval(()=>
            {count<10?setCount(count+1):setCount(0)}
        ,1000)
        // Cleanup function to clear the interval  
        return () => {  
            clearInterval(intervalId);  
        };},[count])
  return (
    <div>
     {count}
    </div>
  )
}

export default LoadingBar
