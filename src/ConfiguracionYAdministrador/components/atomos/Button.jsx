import React from "react";
import './buton.css'
function buton({text,onClick}){
    return(
        <button id="editar" onClick={onClick}>{text}</button>
        
    )
}
export default buton;