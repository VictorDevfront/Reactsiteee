import './App'
import React, { useState } from "react";
import { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

function App () {

  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
    </>
  );
}
  
  function FavoriteColor() {
    const [color, setColor] = useState("red");
      
    return (
      <>
        <h1>My favorite color is {color}!</h1>
        <button
          type="button"
          onClick={() => setColor("blue")}
        >Blue</button>
        <button
          type="button"
          onClick={() => setColor("red")}
        >Red</button>
        <button
          type="button"
          onClick={() => setColor("pink")}
        >Pink</button>
        <button
          type="button"
          onClick={() => setColor("green")}
        >Green</button>
      </>
    );
  }


  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<FavoriteColor />);


export default App