import React, { useState } from 'react'

export default function SelectorOpciones() {
    const [option,setOption] = useState ("");
    const cambiarOpcion = (e)=>{
        setOption(e.target.value);
    };
  return (
    <div>
      <select value = {option} onChange={cambiarOpcion}>
        <option value="opcion 1 ">opcion 1</option>
        <option value="opcion 2">opion 2</option>
        <option value="opcion 3">opcion 3</option>
      </select>
      <p>opcion selecionada = {option}</p>
    </div>
  )
}
