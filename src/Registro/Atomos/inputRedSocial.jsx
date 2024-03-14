import React from "react";
import imagenes from "./imagenes";



function InputRedSocial (props){
  
    return(
        <div>
            
           
            <input type="text" className="input" name={props.name} placeholder={props.subname}></input>
        </div>
        
    );

}

export default InputRedSocial;