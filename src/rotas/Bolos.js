import React from "react";
import { Link } from 'react-router-dom';
import Home from "./Home";

function Bolos () {
    return(
        <div>
            <h1> Página dos Bolos </h1>
            <Link path='/' element={<Home />} />
        </div>
    );
}

export default Bolos;