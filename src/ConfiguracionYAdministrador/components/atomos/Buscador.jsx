import React from "react";
import './Buscador.css'

function Buscador(props) {
    const { type, placeholder, value, onChange } = props;

    return (
        <label className="buscador-label">
            <img src="https://cdn.icon-icons.com/icons2/1189/PNG/512/1490793870-user-interface25_82355.png" alt="" className="icono-busqueda" />
            <input id="bus" type={type} placeholder={placeholder} value={value} onChange={onChange} />
        </label>
    );
}

export default Buscador;
