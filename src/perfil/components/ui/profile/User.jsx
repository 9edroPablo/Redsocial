import React from 'react';
import AboutMe from '../aboutMe/AboutMe';
import "./User.css";

const User = () => {
  return (
    <>
    <div className="card">
      <img src="/portada.jpg" alt="Imagen" className="card-img-top" />
      <img src="perfil.jpg" alt="Foto redonda" className="rounded-circle mx-auto d-block" style={{ width: '100px', height: '100px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
      <div className="card-body" style={{ paddingTop: '150px' }}>
        <h5 className="card-title">Nombre</h5>
        <p className="card-text">Estudio: </p>
        <p className="card-text">Lugar: Ciudad, País</p>
      </div>
      <p className="cardRight">Intereses: Interés 1, Interés 2, Interés 3</p><br /><br />
      <div className="card-footer">
        <a href="#" className="card-link">Facebook</a>
        <a href="#" className="card-link">Twitter</a>
        <a href="#" className="card-link">Instagram</a>
      </div>
    </div>
    <AboutMe/>
    </>
  );
}

export default User;

