import React from "react";
import './Text.css';

function Text({text,title}) {
    return (
        <article className="article">
            <div className="article-text">
                <h1 className="article-title">{title}</h1> 
                <p className="article-p">{text}</p>
                <a href="test">SAZNAJ VISE</a>
            </div>
        </article>
    );
}

export default Text;