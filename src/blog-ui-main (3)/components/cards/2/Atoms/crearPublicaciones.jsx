import React from "react";
import "./CrearPublicacione.css"
function CrearPublicaciones(){
    return(
        <div className="CrearPublicacione">
            <input className="textCrearPublicacione" type="text" />
        <input className="inputCrearPublicacione" type="file" accept="image/*" id="imageInput"></input>
        </div>
        
    );
}
export default CrearPublicaciones