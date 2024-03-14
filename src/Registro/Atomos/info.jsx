import React from "react";
import '../Moleculas/Head.css'


function Info(props){
    return(
        <div className="info">
           <h1>{props.informacion}</h1>
        </div>
        
    );
    
}
export default Info;