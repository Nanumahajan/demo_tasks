import React, { useState } from 'react'

const Pract = () => {
    
    function initilaValue (){
        return 6;
    }
    const [count,setCount] = useState(initilaValue);


    function handleIncrement() {
        setCount(count + 1);
      }


  return (
    <>
    <h2>Count : {count}</h2>
      <input size="small" value={count}/>
      <button  type="primary" onClick={handleIncrement}>
        Increment
      </button>
    </>
  )
}

export default Pract