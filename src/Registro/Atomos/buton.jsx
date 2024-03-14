import React from "react";
import '../Moleculas/cuestionario.css'
function Boton(props){
    return(
        <button type="button" className="boton">{props.boton}</button>
    );
    
}
export default Boton;