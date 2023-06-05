import React from "react";

import "./marcas.css";
import Marca1 from "./Marca1";
import Marca2 from "./Marca2";
import Marca3 from "./Marca3";
import Marca4 from "./Marca4";

export default function Marcas() {
    return (
        <div>
            <div className="color-fondo-negro">
                <Marca1 />
            </div>
            <div className="color-fondo-blanco">
                <Marca2 />
            </div>
            <div className="color-fondo-negro">
                <Marca3 />
            </div>
            <div className="color-fondo-blanco">
                <Marca4 />
            </div>
        </div>
    );
}
