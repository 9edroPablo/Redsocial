import React from "react";
import '../Moleculas/cuestionario.css'

function ChatBox(props){
    return(
        <div className="checkbox">
            <div><input type="checkbox" className="chatbox" name={props.name} ></input></div>
            <div className="infoCB"><p>{props.info}</p></div>
            
            
            
        </div>
        
    )
    
}
export default ChatBox