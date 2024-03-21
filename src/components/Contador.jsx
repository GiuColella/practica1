import React, { useState } from 'react'

export default function Contador() {
    const [count, setcount]= useState (10);

    const incremento = () => {
        setcount (count + 1);
    };
    const decremento= () => {
        setcount (count - 1);
    };


  return (
    <div className="">

        <p>Mi numero es {count}</p>

        <button onClick={incremento}>SUMA</button>
        <button onClick={decremento}>RESTA</button>
       
    </div>
  )
}
