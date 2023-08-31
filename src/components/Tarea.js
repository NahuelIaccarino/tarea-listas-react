import React from 'react';

const Tarea = ({ item, eliminarTarea, actualizarTarea }) => {
	const { title, description, id, state, priority } = item;
	return (
		<li className="list-group-item d-flex justify-content-between align-items-start mt-2 border p-2">
			<div className="ms-2 me-auto">
				<div className="fw-bold">
					{title}
					{state ? (
						<span className="bg-success text-light badge ms-5">Completado</span>
					) : (
						<span className="bg-info text-dark badge ms-5">Pendiente</span>
					)}
				</div>
				<p>{description}</p>
				<div>
					<button className="btn btn-sm btn-danger me-1" onClick={() => eliminarTarea(id)}>
						Eliminar
					</button>
					<button className="btn btn-sm btn-warning me-1" onClick={() => actualizarTarea(id)}>
						Editar
					</button>
				</div>
			</div>
			{priority ? (
				<span className="badge bg-primary rounded-pill">prioritario</span>
			) : (
				<span className="badge bg-warning rounded-pill">no prioritario</span>
			)}
		</li>
	);
};

export default Tarea;