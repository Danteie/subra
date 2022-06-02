import React from "react";
import './Logo.css'
import logo from './logo.png'

function Logo() {
    return <h1 className="logo"><img src={logo} alt="logo"/></h1>;
}

export default Logo;