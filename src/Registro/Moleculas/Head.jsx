import React from "react";
import Logo from "../Atomos/logo";
import Info from "../Atomos/info";
import './Head.css'
function Head (props) {
    return(
        <div className="head">
            <Logo/>
            <Info
            informacion={props.titulo}
            />
             <Info
            informacion={props.subtitulo}
            />
        </div>
        
    

    
        
   
    
    );
   
    
}
export default Head;