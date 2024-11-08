import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(count + 1);
  };

  const Decrement = () => {
    if (count <= 0){
      alert("Number cannot be less than 0")
    }else {
      setCount(count - 1);
    }
    
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <div>
        <button onClick={Increment}>Increment</button>
        <span> </span>
        <button onClick={Decrement}>Decrement</button>
      </div>
    </div>
  );
};
export default Counter;
