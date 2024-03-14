import React from "react";
import Head from "../Moleculas/Head";
import CuestionarioRegistro from "../Moleculas/CuestionarioRegistro";
import './FormularioRegistro.css'



function FormularioDeRegistro(){
    return(
        <div className="Fregistro">
            <Head
        titulo="Completa tu perfil"
        subtitulo="¡Personaliza tu experiencia! Completa tu perfil para conectarte mejor con la comunidad."
        />
        <CuestionarioRegistro/>
        

        </div>
        
    )
}

export default FormularioDeRegistro;