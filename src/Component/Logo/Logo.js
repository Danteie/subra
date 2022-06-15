import React from "react";
import './Logo.css'
import logo from './logo.png'
import {Link} from 'react-router-dom'

function Logo() {
    return <Link to="/" style={{ textDecoration: 'none' }}><p><h1 className="logo"><img src={logo} alt="logo" className="logo-image"/></h1></p></Link>
};
    

export default Logo;