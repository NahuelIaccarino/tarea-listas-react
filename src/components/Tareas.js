import React from 'react';
import Tarea from './Tarea';

const Tareas = ({ tareasArray, eliminarTarea, actualizarTarea }) => {
	return (
		<div className="my-5">
			<h2 className="mb-2 text-primary text-center">Tareas</h2>
			<ul>
				{tareasArray.length !== 0 ? (
					tareasArray.map((item) => (
						<Tarea
							actualizarTarea={actualizarTarea}
							eliminarTarea={eliminarTarea}
							key={item.id}
							item={item}
						/>
					))
				) : (
					<li className="list-group-item text-center border">No hay tareas</li>
				)}
			</ul>
		</div>
	);
};

export default Tareas;