import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import "./styles.css";

function Room()  {
  const [isLit, setLit] = useState(true);
  const brightness = isLit ? "lit" : "dark";
  const [temperature, setTemperature] = useState(22);

  useEffect(() => {
    document.title = `${temperature} ℃`;
  });
  
  return (
    <div className={`room ${isLit ? "lit" : "dark"}`}>
      the room is {isLit ? 'lit' : 'dark'}
      <br />
      { isLit && (<span>room temperature {temperature} &#8451;</span>)}
      <br />
      <button onClick = {() => setLit(!isLit)}>
        flip
      </button>
      <button onClick = {() => setLit(true)}>
        ON
      </button>
      <button onClick = {() => setLit(false)}>
        OFF
      </button>
      <button onClick = {() => setTemperature(temperature - 1)}>
        -
      </button>
      <button onClick = {() => setTemperature(temperature + 1)}>
        +
      </button>
    </div>
  );
}

ReactDOM.render(<Room />, document.querySelector('#root'));