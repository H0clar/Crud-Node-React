import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/NavbarComponent";
import FormComponent from "./components/FormComponent";
import TableComponent from "./components/TableComponent";
import Profile from "./components/Profile";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch("http://localhost:3001/api/data")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:3001/api/data/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        fetchData();
      })
      .catch((error) => console.error("Error deleting data:", error));
  };

  return (
    <Router>
      <div>
        <NavbarComponent />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/perfil" element={<Profile />} />
            {/* Ruta para el formulario */}
            <Route
              path="/formulario"
              element={
                <>
                  <FormComponent fetchData={fetchData} />
                  <TableComponent data={data} handleDelete={handleDelete} />
                </>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
