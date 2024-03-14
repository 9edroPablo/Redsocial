import React from "react";
import InputRedSocial from "../Atomos/inputRedSocial";
import imagenes from "../Atomos/imagenes";
import "./RedesSociales.css"

function RedesSociales(){
    return(
        <div>
            <p className="text">Redes sociales</p>
            <div className="boxInputRedes">
                <img className="imgRedsocial" src={imagenes.img1} /> 
                <InputRedSocial
        name="hola"
        subname="hola"
        
        />
            </div>
            <div className="boxInputRedes">
                <img className="imgRedsocial" src={imagenes.img2} /> 
                <InputRedSocial
        name="hola"
        subname="hola"
        
        />
            </div>
            <div className="boxInputRedes">
                <img className="imgRedsocial" src={imagenes.img3} /> 
                <InputRedSocial
        name="hola"
        subname="hola"
        
        />
            </div>
           
                 
        </div>

       
    );

}

export default RedesSociales ;