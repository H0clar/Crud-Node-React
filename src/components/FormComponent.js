import React, { useState } from "react";

function FormComponent({ fetchData }) {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido1: "",
    apellido2: "",
    telefono: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3001/api/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(() => {
        fetchData();
        setFormData({
          nombre: "",
          apellido1: "",
          apellido2: "",
          telefono: "",
        });
      })
      .catch((error) => {
        console.error("Error saving data:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Apellido 1:</label>
        <input
          type="text"
          name="apellido1"
          value={formData.apellido1}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Apellido 2:</label>
        <input
          type="text"
          name="apellido2"
          value={formData.apellido2}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Teléfono:</label>
        <input
          type="text"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Agregar
      </button>
    </form>
  );
}

export default FormComponent;
