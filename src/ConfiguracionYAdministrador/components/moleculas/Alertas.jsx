import React from "react";
import "./Square.css";
import Alertsbloq from "./Alert";

function Alerts({ showSquare, setShowSquare }) {
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
                        <Alertsbloq />
                    </div>
                </div>
            )}
        </>
    );
}

export default Alerts;
