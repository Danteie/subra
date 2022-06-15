import React from "react";
import './Title.css'
import arrow from './icon-arrow-down.svg'


function Title({text,title}) {
    return(
        <div className="title">
            <h1 className="title-text">PLANINARSKI KLUB SUBRA</h1>
            <img src={arrow} alt="arrow" className="arrow"/>
        </div>
    );
}

export default Title;