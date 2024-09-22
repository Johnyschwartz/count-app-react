import { useState } from "react"

function Com(){
   const[count,setcount]=useState(0)
   const add=()=>{
      setcount(count+1)
   }
   const dec=()=>{
      setcount(count-1)
   }
  return(
   <div>
      <h1>Count : {count}</h1>
      <button onClick={add}>Increase</button>
      <button onClick={dec}>Decrease</button>
   </div>
  )
}
export default Com