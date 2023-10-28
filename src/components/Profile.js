import React from "react";
import imagenPerfil from "./imagenperfil.png";

function Profile() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        <h2>Perfil</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla
          vitae odio quis iaculis. Sed eget turpis at sem euismod dictum. Nam auctor
          viverra arcu, a cursus massa varius in. Duis id justo eu turpis dictum
          scelerisque. In hac habitasse platea dictumst. Aenean ut interdum tellus.
          Nullam convallis orci odio, nec feugiat nulla vestibulum a. Aliquam
          fermentum, eros eu interdum fermentum, ex quam scelerisque dui, at luctus
          quam tortor id eros.
        </p>
        {/* Agrega más contenido de perfil aquí si es necesario */}
      </div>
      <div style={{ flex: 1 }}>
        <img
          src={imagenPerfil}
          alt="Imagen de perfil"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
}

export default Profile;
