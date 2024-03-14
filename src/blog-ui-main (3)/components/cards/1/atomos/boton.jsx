import React from "react";
import img from "../assets/evento.png"
import"./boton.css"
function Boton(props){
    return(
        <button>{props.Boton}<img src={img} /></button>
    );
}
export default Boton