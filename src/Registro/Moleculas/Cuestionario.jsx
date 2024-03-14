import React from "react";
import { Outlet ,Link } from 'react-router-dom';
import InputText from "../Atomos/inputText";
import ChatBox from "../Atomos/chatbox";
import Boton from "../Atomos/buton";
import './cuestionario.css'

function Cuestionario(){
    return (
      
        
             <div className="cuestionario">
            
            <InputText
        type="text"
        name="Nombre(s)"
        subname="Nombre(s)"
        />
           <InputText
        type="text"
        name="Apellido(s)"
        subname="Apellido(s)"
        />
           <InputText
        type="text"
        name="Correo clectronico"
        subname="algo@correo.com"
        />
        <InputText
        type="password"
        name="Contraseña"
        subname="Contraseña"
        />
        <InputText
        type="password"
        name="Confirmar contraseña"
        subname="Confirmar contraseña"
        />

        <ChatBox
        name="hola"
        info="Al registrarte, aceptas nuestros Términos de Servicio y Política de Privacidad."
        />
        <div className="boton">
        
        <Boton 
        boton="Registrarse"
       />
      
        
        </div>
       
        
        </div>
        
        
        
    );
}
export default Cuestionario;