import React from "react";
import"./input.css"
function Input(props){
    return(
        <div>
            <p  >{props.name}</p>
            <input className={props.type }  type={props.type} name={props.name} />
            
        </div>
    )
}
export default Input