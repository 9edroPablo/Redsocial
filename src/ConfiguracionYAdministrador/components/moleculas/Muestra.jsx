import React from "react";
import "./Square.css";
import Contenedor from "./Bloquear";

function Muestra({ showSquare, setShowSquare }) {
    const handleClickInsideSquare = (e) => {
        e.stopPropagation();
    };

    const handleCloseSquare = () => {
        setShowSquare(false);
    };

    return (
        <>
            {showSquare && (
                <div id="squareContainer" onClick={handleCloseSquare}>
                    <div className="square" onClick={handleClickInsideSquare}>
                        <button className="close-button" onClick={handleCloseSquare}>
                            X
                        </button>
                        <Contenedor />
                    </div>
                </div>
            )}
        </>
    );
}

export default Muestra;
