import React from "react";
import { useState, useMemo } from "react";

const Example = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  function incrementOne() {
    setCount1(count1 + 1);
  }

  function incrementTwo() {
    setCount2(count2 + 1);
  }

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return count1 % 2 === 0;
  }, [count1]);

//   function isEven (){
//       let i = 0;
//       while (i < 2000000000) i++;
//       return count1 % 2 === 0;
//   }

  return (
    <div>
      <button onClick={incrementOne}>counter1 -{count1}</button>
      <br />
      <span>{isEven ? "Even" : "Odd"}</span>
      <br />
      <button onClick={incrementTwo}>counter2 -{count2}</button>
    </div>
  );
};

export default Example;
