import React from "react";
import img from "../assets/img.png"
import "./insertarImagen.css"
function InsertarImg(){
    return(
        <div className="InsertarImg">
            <input type="file" className="file" id="img" />
            
            <label htmlFor="img" className="contenedorInsertar" ><img src={img} alt="subir Imagen" /></label>
            

            
        </div>
    )
}
export default InsertarImg