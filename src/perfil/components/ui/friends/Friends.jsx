import React from 'react';
import './Friends.css'; // Estilo para la tarjeta de amigos

const Friends = ({ friendCount }) => {
  return (
    <div className="friendsCard">
      <div className="friendCount">Amigos: {friendCount}</div>
      <a href="/buscar-amigos" className="searchLink">Buscar amigos</a>
    </div>
  );
};

export default Friends;
