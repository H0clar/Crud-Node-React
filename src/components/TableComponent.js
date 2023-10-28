import React from "react";

function TableComponent({ data, handleDelete }) {
  return (
    <div>
      <h2>Tabla</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido 1</th>
            <th>Apellido 2</th>
            <th>Teléfono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.nombre}</td>
              <td>{item.apellido1}</td>
              <td>{item.apellido2}</td>
              <td>{item.telefono}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(item.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableComponent;
