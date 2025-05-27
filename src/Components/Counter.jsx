import React, {useState} from 'react'
import '../index.css';

function Counter() {
    
    let [count,setCount] =useState(0);
  
const decrement=()=>{
    setCount(count-1);   
}

const increment=()=>{
    setCount(count+1);
}

const reset=()=>{
    setCount(0);
}
  return (
    <>
    {count} <br></br>
    <button type="button" className="counter-button"  onClick={decrement} >Decrement</button> &nbsp;
    <button type="button"  className="counter-button"  onClick={increment} >Increment</button> &nbsp;
    <button type="button"  className="counter-button"  onClick={reset}>Zero</button>


    </>
  )
}

export default Counter;