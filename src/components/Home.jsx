import React from 'react'
import '../assets/estilos.css'
import SelectorOpciones from './SelectorOpciones'
import Contador from './Contador'
import Estados from './Estados'
import ListaTareas from './ListaTareas'

export default function Home() {
  return (
    <div className="box_main">
        <div className="box_contador">
            <p>Contador Simple </p> 
            <Contador/>
        </div>
        <div className="box_selector">
            <p>selector de opciones</p>
            <SelectorOpciones/>
        </div>
        <div className="box_estado">
            <p>cambiar esatado</p>
            <Estados/>
        </div>
        <div className="box_tareas">
            <p>Lista de tareas </p>
            <ListaTareas/>
        </div>
        <div className="">
            <p>HOLIS</p>
        </div>
    </div>
  )
}
