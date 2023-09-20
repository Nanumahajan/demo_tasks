import React, { useCallback,useState } from "react";
import Child from "./Child";

const Example2 = () => {
  const [count1, setCount1] = useState(0);
  
  function incrementOne() {
    setCount1(count1 + 1);
  }
 
  const Passing = useCallback(() => {
    console.log("Bhai parent component se aya hu");
  }, []);

//   function handlePassing() {
//     Passing();
//   }

  return (
    <div>
      <Child Passing={Passing} />
      <button onClick={incrementOne}>counter1 -{count1}</button>
    </div>
  );
};

export default Example2;
