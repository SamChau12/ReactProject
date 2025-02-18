import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const addValue = () => {
    if (count >= 20) {
      alert("counter value is greater than 20");
    } else {
      // setCount(count + 1);
      setCount((prevCounter) => prevCounter + 1);
      setCount((prevCounter) => prevCounter + 1);
      setCount((prevCounter) => prevCounter + 1);
      setCount((prevCounter) => prevCounter + 1);
      setCount((prevCounter) => prevCounter + 1);
    }
  };
  const removeValue = () => {
    if (count === 0) {
      alert("counter value is less than 0");
    } else {
      setCount(count - 1);
    }
  };

  return (
    <>
      <h1>Counter</h1>
      <h2> Count Value:{count}</h2>
      <button onClick={addValue}>Add{count}</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove{count}</button>
    </>
  );
}

export default App;
