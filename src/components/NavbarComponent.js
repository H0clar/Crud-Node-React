import React from "react";
import { Link } from "react-router-dom";

function NavbarComponent() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#0d6efd" }}>
      <Link className="navbar-brand" to="/" style={{ color: "white", fontWeight: "bold", fontSize: "24px" }}>
        Mi Proyecto
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/" style={{ color: "white", fontWeight: "bold", fontSize: "20px" }}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/perfil" style={{ color: "white", fontWeight: "bold", fontSize: "20px" }}>
              Perfil
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/formulario" style={{ color: "white", fontWeight: "bold", fontSize: "20px" }}>
              Formulario
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavbarComponent;
