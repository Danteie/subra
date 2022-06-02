import React from "react";
import './Footer.css'
import logo from '../Logo/logo.png'

function Footer() {
    return(
        <div className="footer">
            <h2 className="footer-title"><img src={logo} alt="logo"/></h2>
            <menu className="footer-menu">
                <a href="test">Novosti</a>
                <a href="test">Galerija</a>
                <a href="test">Kontakt</a>
            </menu>          
        </div>
    );
}

export default Footer;