import React, { useEffect, useState } from 'react'

function List({getItems}) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(getItems());
        console.log("items is rendering");
    }, [getItems])

  return (
    <div>
        {items.map((item, index)=>{
            return <p key={index}>{item}</p>
        })}
    </div>
  )
}

export default List