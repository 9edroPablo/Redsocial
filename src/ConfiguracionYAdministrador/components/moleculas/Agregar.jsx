import React, { useState } from "react";
import Heading from "../atomos/textos";
import { Butones } from "../atomos/buton";
import Buscador from "../atomos/Buscador";
import './Agregar.css'
import Muestra from "./Muestra";

function Contenedor() {

    const [showSquare, setShowSquare] = useState(false);

    const handleClick = () => {
        setShowSquare(!showSquare);
    };

    const handleCloseSquare = () => {
        setShowSquare(false);
    };

    return (
        <>
        <div id="ops">
            <Heading titulos="Lista de usuarios Administradores" id="titulo" />
            <div id="buss">
                <Buscador placeholder="Buscar usuarios" />
                <Butones texts="Agregar" />
            </div>
            <div id="textos">
                <div id="con-text">
                    <Heading text="John Doe" />
                    <img src="https://cdn.icon-icons.com/icons2/2719/PNG/512/minus_circle_icon_175076.png" alt="Minus Circle Icon" className="imagen-pequena" onClick={handleClick} />
                </div>
                <div id="con-text">
                    <Heading text="John Doe" />
                    <img src="https://cdn.icon-icons.com/icons2/2719/PNG/512/minus_circle_icon_175076.png" alt="Minus Circle Icon" className="imagen-pequena" onClick={handleClick} />
                </div>
                <div id="con-text">
                    <Heading text="John Doe" />
                    <img src="https://cdn.icon-icons.com/icons2/2719/PNG/512/minus_circle_icon_175076.png" alt="Minus Circle Icon" className="imagen-pequena" onClick={handleClick} />
                </div>
            </div>
        </div>
         <Muestra showSquare={showSquare} setShowSquare={setShowSquare} handleCloseSquare={handleCloseSquare} />
         </>
    );
}

export default Contenedor;
