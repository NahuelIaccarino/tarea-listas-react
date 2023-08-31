import Tarea from './Tarea';

const ContenedorTareas = (props) => {
  return (
    <ul>
    {props.tareas.map((item) => {
        <Tarea key={item.id} item={item} />
    })}
  </ul>
  );
};

export default ContenedorTareas;