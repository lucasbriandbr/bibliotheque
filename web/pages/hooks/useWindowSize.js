import { useEffect, useState } from "react";

export function useWindowHeight() {

  const [height, setHeight] = useState(0);
  
    useEffect(() => {
      if (typeof window !== 'undefined') {
        function handleResize() {
          setHeight(window.innerHeight)
        }
      
        window.addEventListener("resize", handleResize);
       
        handleResize();
      
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []);
    return height
}

export function useWindowWidth() {

  const [width, setWidth] = useState(0);
  
    useEffect(() => {
      if (typeof window !== 'undefined') {
        function handleResize() {
          setWidth(window.innerWidth)
        }
      
        window.addEventListener("resize", handleResize);
       
        handleResize();
      
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []);
    return width
}