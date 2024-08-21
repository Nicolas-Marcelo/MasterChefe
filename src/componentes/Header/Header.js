import React from "react";
import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";
import '../Header/Header.css';

function Header() {
    return (
        <header>
            <Router>
                <div className="cabecalho">
                    <img src="" alt="imagem da logo" />
                </div>

                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/bolos">Bolos</Link></li>
                    <li><Link to="/doces">Doces</Link></li>
                    <li><Link to="/sobremesas">Sobremesas</Link></li>
                </ul>
            </Router>
        </header>
    );
}

export default Header;