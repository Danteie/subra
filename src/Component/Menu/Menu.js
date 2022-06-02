import React from "react";
import './Menu.css';

function Menu(props) {
    return (
        <nav>
            <a href="test">Novosti</a>
            <a href="test">Galierija</a>
            <a href="test" className="contact">Kontakt</a>
        </nav>
    );
}

export default Menu;