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
            {/* hamburger MENU */}
            <nav className="hamburger-menu">
            <input type="checkbox" id="navi-toggle" class="checkbox" />
                <label for="navi-toggle" class="button">
                    <span class="icon">&nbsp;</span>
                </label>
                
                <nav class="nav">
                    <ul class="list">
                    <Link to="/news" style={{ textDecoration: 'none' }} className='item'><p>Novosti</p></Link>
                    <Link to="/gallery" style={{ textDecoration: 'none' }} className='item'><p>Galerija</p></Link>
                    <Link to="/contact" style={{ textDecoration: 'none' }} className='item'><p>Kontakt</p></Link>
                    </ul>
                </nav>
            </nav>
        </div>
    );
}

export default Menu;