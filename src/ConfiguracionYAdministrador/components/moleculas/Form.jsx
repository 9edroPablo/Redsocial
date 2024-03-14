import React, { useState } from "react"; 
import './Form.css';
import Heading from "../atomos/textos";
import { Editar } from "../atomos/buton";
import Titulo from "../atomos/Titulo";
import Square from "./Square";

function Form() {
    const [showSquare, setShowSquare] = useState(false);

    const handleClick = () => {
        setShowSquare(!showSquare);
    };

    const handleCloseSquare = () => {
        setShowSquare(false);
    };

    return(
        <>
            <div id="formulario">
                <div id="contenido">
                    <div id="form">
                        <Titulo/>
                        <div className="conf">
                            <Heading titulos="Administración de Usuarios"></Heading>
                        </div>
                        <div className="conf">
                            <div id="botones">
                                <Heading text="Administradores"></Heading>
                                <Editar textos="Editar" onClick={handleClick}></Editar>
                            </div>
                            <Heading text="4 Administradores"></Heading>
                            <div id="botones">
                                <Heading text="Directores"></Heading>
                                <Editar textos="Editar" onClick={handleClick}></Editar>
                            </div>
                            <Heading text="2 Directores"></Heading>
                        </div>
                        <div id="sinsub"> 
                            <div id="botones">
                                <Heading text="Usuarios Reportados"></Heading>
                                <Editar textos="Editar" onClick={handleClick}/>
                            </div>
                            <Heading text="0 usuarios Reportados"></Heading>
                            <div id="botones">
                                <Heading text="Bloquear usuarios"></Heading>
                                <Editar textos="Editar" onClick={handleClick} />
                            </div>
                            <Heading text="2 Usuarios Bloqueados"></Heading>
                            <div id="botones">
                            <Heading text="Usuarios Eliminados"></Heading>
                            <Editar textos="Editar" onClick={handleClick} />
                            </div>
                            <Heading text="2 Usuarios Eliminados" className="opcions"></Heading>
                        </div>
                        <div className="conf">
                            <Heading  titulos="Administracion de Usuarios" className="Titul"></Heading>
                        </div>
                        <div className="conf">
                            <div id="botones">
                                <Heading text="Administradores"></Heading>
                                <Editar textos="Editar" onClick={handleClick} />
                            </div>
                            <Heading text="4 Adminisitradores"></Heading>
                            <div id="botones">
                                <Heading text="Directores"></Heading>
                                <Editar textos="Editar" onClick={handleClick} />
                            </div>
                            <Heading text="2 Directores"></Heading>
                        </div>
                        <div id="sinsub">
                            <div id="botones">
                                <Heading text="Usuarios Reportados"></Heading>
                                <Editar textos="Editar" onClick={handleClick} />
                            </div>
                            <Heading text="0 usuarios reportados"></Heading>
                            <div id="botones">
                                <Heading text="Bloquear Usuarios"></Heading>
                                <Editar textos="Editar" onClick={handleClick} />
                            </div>
                            <Heading text="2 Usuarios bloqueados"></Heading>
                            <div id="botones">
                                <Heading text="Usuarios Eliminados"></Heading>
                                <Editar textos="Editar" onClick={handleClick} />
                            </div>
                            <Heading text="2 Usuarios eliminados"></Heading>
                        </div>
                    </div>
                </div>
            </div>
            <Square showSquare={showSquare} setShowSquare={setShowSquare} handleCloseSquare={handleCloseSquare} />
            
        </>
    );
}

export default Form;
