import React, { useState } from 'react'

function Estados() {
    const [isOn, setIsOn]=useState(false);
    const estado =()=>{setIsOn(!isOn)}
  return (
    <div>
      <button onClick={estado}>{isOn?"apagado":"encendido"}</button>
    </div>
  )
}

export default Estados
