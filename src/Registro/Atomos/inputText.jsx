import React from "react";
import '../Moleculas/cuestionario.css'

function InputText(props){
    return(
        <div>
            <p className="text">{props.name}</p>
            <input type={props.type} className={props.className?props.className:"input"} name={props.name} placeholder={props.subname}></input>
        </div>
        
    )
    
}
export default InputText
