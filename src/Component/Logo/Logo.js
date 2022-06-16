import React from "react";
import './Logo.css'
import logo from './logo.png'
import {Link} from 'react-router-dom'

function Logo() {
    return <Link to="/" style={{ textDecoration: 'none' }}><h1 className="logo"><img src={logo} alt="logo" className="logo-image"/></h1></Link>
};
    

export default Logo;