import React from "react";
import './Test.css'
import novosti1 from './novosti1.jpg'

function Test() {
    return(
        <div className="news">
                {/* <h1>POSLEDNJE NOVOSTI</h1> */}
                <div className="news-container">
                    <div className="image-news-c"><img src={novosti1} alt="slika" className="image-news"/></div>
                    <div className="text-news">
                        <h1>ZAVRŠNE PRIPREME ZA ORJENSKI MARATON</h1>
                        <p>Nakon prošlonedjeljnih radova na stazi "Orjensko srce", juče je odrađena i priprema planinarske trase Orjenskog maratona, preko Subre. Ekipa od 9 planinara-volontera stazu je očistila je od vegetacije, a dio i remarkirala. Da se ne bi sve svelo samo na rad, obišli smo ujedno i atrakcije: Vodenu Jamu, Simovu pećinu, Zmajevu pećinu i Vilino guvno, dok nas je na kraju u domu Za Vratlom dočekala topla čorbica 
                            od koprive, jedan od specijaliteta doma.</p>
                    </div>
                </div>
        </div>
    );
}

export default Test;