import React from "react";
import { useState } from "react";
import { Button, Input} from "antd";
// import {Alert, Input} from "antd"

const Practice = () => {
  const [count, setCount] = useState(0);
  function handleIncrement() {
    setCount(count + 1);
  }
  function handleDecrement() {
    count > 0 ? setCount(count - 1) : alert("Kya kr rha hai bhai ruk ja :------------")
    
    // <Alert message="Warning Text" type="warning" />;
  }
  return (
    <div>
      <h2>Counter increment decrement </h2>
      <h2>Count : {count}</h2>
      <Input size="small" value={count}/>
      <Button  type="primary" onClick={handleIncrement}>
        Increment
      </Button>
      <Button type="primary"style={{ background: "red" }} onClick={handleDecrement}>
        Decrement
      </Button>
    </div>
  );
};

export default Practice;
