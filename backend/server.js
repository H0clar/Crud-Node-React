const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
const port = 3001;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dth",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Conectado a la base de datos MySQL");
});

app.use(cors());
app.use(express.json());

// Obtener todos los registros
app.get("/api/data", (req, res) => {
  const sql = "SELECT * FROM tabla";
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// Crear un nuevo registro con id autoincrementable
app.post("/api/data", (req, res) => {
  const sql = "INSERT INTO tabla SET ?";
  const dataObject = {
    nombre: req.body.nombre,
    apellido1: req.body.apellido1,
    apellido2: req.body.apellido2,
    telefono: req.body.telefono,
  };
  db.query(sql, dataObject, (err, result) => {
    if (err) throw err;
    console.log("Registro creado:", result);
    res.send(result);
  });
});

// Eliminar un registro por su ID
app.delete("/api/data/:id", (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM tabla WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) throw err;
    console.log("Registro eliminado:", result);
    res.send(result);
  });
});

app.listen(port, () => {
  console.log(`Servidor backend en http://localhost:${port}`);
});
