import React, { useState } from "react";
import "./Counter.css"

const Licznik = () => {
  const [counter, setCounter] = useState(0);
  return <><div className="Counter">{counter}</div> <button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>Dodaj</button></>
}

export default Licznik;