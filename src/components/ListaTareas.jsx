import React, { useState } from 'react';

function ListaTareas() {
  const [tareas, setTareas] = useState([]); // Cambio de "lista" a "tareas"
  const [nuevaTarea, setNuevaTarea] = useState(""); // Cambio de "nuevaLista" a "nuevaTarea"

  const agregarTarea = () => {
    setTareas([...tareas, nuevaTarea]);
    setNuevaTarea("");
  };

  const removerTarea = (index) => {
    const tareasModificadas = tareas.filter((_, i) => i !== index);
    setTareas(tareasModificadas);
  };

  return (
    <div>
      <input
        type="text"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
      />
      <button onClick={agregarTarea}>Agregar tarea</button>
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>
            {tarea}{' '}
            <button onClick={() => removerTarea(index)}>eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaTareas;
