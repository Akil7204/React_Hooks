import React, { useEffect, useMemo, useState } from "react";

function App() {
  const [number, setNumber] = useState(null);
  const [dark, setDark] = useState(false);


  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number])

  const theamColor = useMemo(() => {
    return {
      backgroundColor: dark? "black" : "white",
      color: dark? "white" : "black"
    }
  }, [dark])

  useEffect(() => {
    console.log("theam Changed");
  }, [theamColor])



  return (
    <>
      <input type="number" value={number} onChange={(e)=> setNumber(e.target.value)} />
      <div style={theamColor}>{doubleNumber}</div>
      <button onClick={() => setDark((curr) => !curr)}>toggle theam</button>
    </>
  );
}

export default App;

function slowFunction(number){
  for (let index = 0; index < 100000000; index++) {
    
  }
  console.log("render");
  return number * 2
}
