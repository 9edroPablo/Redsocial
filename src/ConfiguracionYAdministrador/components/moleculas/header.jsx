import React from "react";
import {Buton} from "../atomos/buton";
import './header.css';
import Icon from "../atomos/Icon";

function Header() {
    const handleClick = () => {
        console.log('Botón clickeado');
    };

    return(
        <div>
            <header id='cont'>
                <div id="logo-container">
                    <h1 id='logo'>CampusLink</h1>
                    <Buton text="inicio" onClick={handleClick} className="atras-button" />
                </div>
                <div id='bot'>
                     <Buton text="Mi perfil" onClick={handleClick} className="boton-button" />
                     <span style={{margin: '0 5px'}}></span>
                     <Icon text="⚙" onClick={handleClick} className="icon"></Icon>
                    </div>

            </header>
        </div>
    )
}

export default Header;
