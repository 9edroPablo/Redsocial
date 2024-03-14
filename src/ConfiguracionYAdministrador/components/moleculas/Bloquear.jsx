import React, { useState } from "react";
import Buscador from "../atomos/Buscador";
import { Bloquear } from "../atomos/buton";
import Heading from "../atomos/textos";
import Alerts from "./Alertas";
import './Bloquear.css';

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
                </div>
                <div id="textos">
                    <div id="con-text">
                        <Heading text="John Doe" />
                        <div id="img-con">
                            <img src="https://cdn.icon-icons.com/icons2/2719/PNG/512/minus_circle_icon_175076.png" alt="Minus Circle Icon" className="imagen-pequena" />
                            <Bloquear bloq="Bloquear" onClicksa={handleClick}></Bloquear>
                        </div>
                    </div>
                    <div id="con-text">
                        <Heading text="John Doe" />
                        <div id="img-con">
                            <img src="https://cdn.icon-icons.com/icons2/2719/PNG/512/minus_circle_icon_175076.png" alt="Minus Circle Icon" className="imagen-pequena" />
                            <Bloquear bloq="Bloquear" onClicksa={handleClick}></Bloquear>
                        </div>
                    </div>
                </div>
            </div>
            <Alerts showSquare={showSquare} setShowSquare={setShowSquare} handleCloseSquare={handleCloseSquare} />
        </>
    );
}

export default Contenedor;
