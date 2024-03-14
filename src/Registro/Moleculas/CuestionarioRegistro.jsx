import React from "react";
import Head from "../Moleculas/Head";
import InputText from "../Atomos/inputText";
import Boton from "../Atomos/buton";
import "./CuestionarioRegistro.css"
import RedesSociales from "./redesSociales";
import imagenes from "../Atomos/imagenes";


function CuestionarioRegistro(){
    return(
        <div className="BoxCuestionarioRegistro">
            <InputText
        type="text"
        name="Carrera"
        subname="Ing en Software"/>

            <InputText
        type="text"
        name="ID Estudiante"
        subname="223214"/>
        
        <InputText
        type="text"
        name="Telefono"
        subname="5584784142"/>

        <p className="text">Intereses</p >
        <div >
        <Boton 
        boton="Materias"
        />
        <Boton 
        boton="Deportes"
        />
        <Boton 
        boton="Comida"
        />
        <Boton 
        boton="Hobbies"
        />
        <Boton 
        boton="Peliculas/Series"
        />
        </div>
        <RedesSociales/>
        
        <InputText 
        className ="inputGrande"
        type="text"
        name="Acerca de mi"
        subname="Comparte algo sobre ti"/>

        <div className="subirimagen">

        <img className="imgsubir" src={imagenes.img4} />
        <InputText
        type="text"
        name="Selecciona El Archivo"
        subname="Selecciona El Archivo"/>

        </div>
       

        
        <div className="inputfinal">
            <div className="fin">

            <InputText
        type="text"
        name="Telefono"
        subname="5584784142"/>
            </div>
            <div className="fin">

            <InputText
        type="text"
        name="Telefono"
        subname="5584784142"/>

            </div>     

        </div>
        <div className="inputfinal">
            <div className="fin">

            <InputText
        type="text"
        name="Telefono"
        subname="5584784142"/>
            </div>
            <div className="fin">

            <InputText
        type="text"
        name="Telefono"
        subname="5584784142"/>

            </div>     

        </div>
        <div className="inputfinal">
            <div className="fin">

            <InputText
        type="text"
        name="Telefono"
        subname="5584784142"/>
            </div>
            <div className="fin">

            <InputText
        type="text"
        name="Telefono"
        subname="5584784142"/>

            </div>     

        </div>
        

        </div>
         
    )
}

export default CuestionarioRegistro;