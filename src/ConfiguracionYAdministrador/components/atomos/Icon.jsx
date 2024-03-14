import React from "react";
import './buton.css'
function Icon({text,onClick}){
    return(
        <button id="icon" onClick={onClick}>{text}</button>
    )
}
export default Icon;