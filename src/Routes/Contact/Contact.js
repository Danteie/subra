import React from "react";
import './Contact.css'

//Home
import Logo from '../../Component/Logo/Logo'
import Menu from '../../Component/Menu/Menu'
//Body



function Contact() {
    return(
        <div className="contact-body">
          <div className='header'>
            <Logo/>
            <Menu/>
        </div>
        <div className="contact-countainer">
            <article>
                <div className="contact-text">
                    <h1>Kontakt</h1>
                    <p>Br telefona: +382 69 430 070</p>
                    <p>email: test@test.com</p>
                    <p>adresa: <a href="www.google.com">Subra</a></p>
                </div>
             </article>   
        </div>
        </div>
    );
}

export default Contact;