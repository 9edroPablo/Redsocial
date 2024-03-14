import React from "react";
import"./boton.css"
function Boton(props){
    return(
        <button className="boton">{props.boton}</button>
    );
}
export default Boton