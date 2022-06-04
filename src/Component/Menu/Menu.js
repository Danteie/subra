import React from "react";
import './Menu.css';
import {Link} from 'react-router-dom'

function Menu(props) {
    return (
        <div>
            <nav className="nav-menu">
                <Link to="/news"><a href="test">Novosti</a></Link>
                <Link to="/gallery"><a href="test">Galerija</a></Link>
                <a href="test" className="contact">Kontakt</a>
            </nav>
            <h1 className="hamburger-menu">=</h1>
        </div>
    );
}

export default Menu;