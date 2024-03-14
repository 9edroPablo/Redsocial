import React from "react";
import './buton.css'

function Buton({ text }) {
    return (
        <button id="buton" >{text}</button>
    );
}

function Butones({ texts }) {
    return (
        <button id="agre" >{texts}</button>
    );
}

function Editar({textos , onClick}){
    return(
        <button id="editar" onClick={onClick}>{textos}</button>
    );
}

function Bloquear({bloq,onClicksa}) {
    return(
        <button id="bloq" onClick={onClicksa}>{bloq}</button>
    )
    
}
function Acep({acep}){
    return(
        <button id="acep" >{acep}</button>
    )
}

function Neg({neg}){
    return(
        <button id="neg" >{neg}</button>
    )
}
export  { Buton, Butones,Editar ,Bloquear,Acep,Neg };   
