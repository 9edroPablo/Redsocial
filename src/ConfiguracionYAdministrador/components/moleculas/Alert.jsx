import React from "react";
import {Acep,Neg} from "../atomos/buton";
import Heading from "../atomos/textos";
import './Alert.css'

function Alertsbloq() {
    return(
        <>
        <div id="conte">
            <Heading textos="Bloquear Usuario Reportado" />
            <Heading text="¿Estás seguro de que deseas bloquear a este usuario reportado? Al bloquearlo, no podrá ver feed, ningún perfil ni contactara ningún usuario en nuestra comunidad estudiantil." />
            <div id="botond">
            <Acep acep="Bloquear usuario" />
            <Neg neg="Cancelar" /> 
            </div>
        </div>
        </>
    )
    
}

export default Alertsbloq;