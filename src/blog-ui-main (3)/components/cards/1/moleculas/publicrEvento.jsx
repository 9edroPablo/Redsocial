import React from "react";
import InsertarImg from "../atomos/InsertarImg";
import Input from "../atomos/input";
import Descripcion from "../atomos/descripcion";
import Boton from "../atomos/boton";
import "./PublicarEvento.css"

function PublicarEvento(){
    return(
        <div className="PublicarEvento">
            <div className="containerPublicarEvento">
            <InsertarImg/>
            
           
            <Descripcion/>
            <div className="flecha">
            <Input type="date" name="acerca del evento"/>
            <Input  type="time" name="acerca del evento"/>
            </div>
            <div className="flecha">
            <Input type="date" name="acerca del evento"/>
            <Input  type="time" name="acerca del evento"/>
            </div>
            
            <Input type="text" name="acerca del evento"/>
            <Input type="text" name="acerca del evento"/>

            <div className="containerBoton"><Boton Boton="publicar evento"  /></div>

            </div>
            
           
           
            
           
        </div>
    );
}
export default PublicarEvento;