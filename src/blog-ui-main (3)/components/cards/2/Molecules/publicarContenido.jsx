import React from "react";
import Titulo from "../Atoms/titulo";
import foto from "../assets/foto.jpg"
import CrearPublicaciones from "../Atoms/crearPublicaciones";
import Boton from "../Atoms/boton";
import "./PublicarContenido.css"
function PublicarContenido(){
    return(
        <div className="PublicarContenido">
            <div className="container2">
            <div className="boxtext"><Titulo titulo="Agregar Contenido multimedia"/></div>
            <div className="boxPubli">
                <img className="foto" src={foto} alt="Foto de perfil" />
                <div >
                    <div className="boxCrearPublicaciones"><CrearPublicaciones/></div>
                    <div className="boxBoton"><Boton boton="Todo público"/><Boton boton="Publicar Contenido multimedia"/></div>
                </div>
            </div>
            </div>
        </div>
    );
}
export default PublicarContenido