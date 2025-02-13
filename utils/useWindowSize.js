import { useState, useEffect } from "react";

function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    
    // Cleanup function to remove event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array ensures effect runs only once

  return size;
}

export default useWindowSize;
