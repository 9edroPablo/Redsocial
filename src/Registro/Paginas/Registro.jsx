import React from "react";
import Head from "../Moleculas/Head";
import Cuestionario from "../Moleculas/Cuestionario";
import './Registro.css'

function Registro(){
    return(
        <div className="registro">
            <Head
        titulo="Únete a nuestra comunidad estudiantil"
        subtitulo="Bienvenido a nuestra red social estudiantil. Regístrate ahora para conectarte con compañeros, acceder a recursos educativos y participar en eventos emocionantes."
        />
        <Cuestionario
        
        />
        </div>
        

    )
    
    
}
export default Registro;