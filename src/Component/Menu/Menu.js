import React from "react";
import './Menu.css';
import {Link} from 'react-router-dom'

function Menu(props) {
    return (
        <div>
            <nav className="nav-menu">
                <Link to="/news" style={{ textDecoration: 'none' }}><p>Novosti</p></Link>
                <Link to="/gallery" style={{ textDecoration: 'none' }}><p>Galerija</p></Link>
                <Link to="/contact" style={{ textDecoration: 'none' }}><p>Kontakt</p></Link>
            </nav>
            <h1 className="hamburger-menu">=</h1>
        </div>
    );
}

export default Menu;