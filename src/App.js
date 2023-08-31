import ContenedorTareas from './components/ContenedorTareas';
import Formulario from './components/Formulario';
import { useState } from 'react';

const initialTareas = [
  {
    id: 1,
    title: 'tarea #1',
    description: 'description #1',
    state: false,
    priority: false,
  },
  {
    id: 2,
    title: 'tarea #2',
    description: 'description #2',
    state: false,
    priority: true,
  },
  {
    id: 3,
    title: 'tarea #3',
    description: 'description #3',
    state: true,
    priority: true,
  },
]

function App() {
  const [tareas, setTarea] = useState(initialTareas);

  const agregarTarea = (tarea) => {
    setTarea([...tareas, tarea])
  }
  
  return (
    <div className="container my-2">
      <h2 classsName="text-primary">Formulario</h2>
      <Formulario agregarTarea={agregarTarea} />
      <h2 ClassName="text-primary text-center">Tareas</h2>
      <ContenedorTareas tareas={tareas} />
    </div>
  );
}

export default App;
