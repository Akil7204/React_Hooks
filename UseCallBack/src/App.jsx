import React, { useCallback, useState } from 'react'
import List from './List';

const App = () => {
  const [number, setNumber] = useState(null);
  

  const getItems = useCallback(() => {
    return [number + 1, number + 2, number + 3]
  }, [number]);
 
  return (

    <div>
      <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />
      <List getItems={getItems} />
    </div>
    
  )
}

export default App