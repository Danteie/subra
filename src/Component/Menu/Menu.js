import React from "react";
import './Menu.css';

function Menu(props) {
    return (
        <div>
            <nav className="nav-menu">
                <a href="test">Novosti</a>
                <a href="test">Galierija</a>
                <a href="test" className="contact">Kontakt</a>
            </nav>
            <h1 className="hamburger-menu">=</h1>
        </div>
    );
}

export default Menu;