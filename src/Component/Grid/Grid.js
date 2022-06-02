import React, { Component } from "react";
import './Grid.css';
import Text from '../Text/Text'
import image1 from '../../Assets/slika1.jpg'
import image2 from '../../Assets/slika2.jpg'
import image3 from '../../Assets/slika3.jpg'
import image4 from '../../Assets/slika4.jpg'

class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         title1:"Planinarski klub “Subra“ iz Herceg Novog",
         text1:"osnovan je 1932 godine i u to doba njegovi su članovi organizovali jednodnevne boravke na Orjenu, najčešće na lokaciji Vratlo, privučeni dobrom mogućnošću skijanja tokom čitavog zimskog perioda. Prvi ozbiljni alpinistički uspon u stijenama Orjena zabilježen je 1936 godine, a izveo ga je E. Blažević sa dvojicom planinara u stijeni Kamenski kabao u Vratlu",
         title2:"Subra obilježava 90 godina postojanja",
         text2:"Veliki jubulej, devet decenija postojanja Planinarskog kluba Subra biće obilježen narednog vikenda, 27, 28. i 29. maja, uz prigodnu izložbu, prezentacije, obilaske predjela, te 23. Orjenski maraton. Program proslave dobio je podršku Planinarskog saveza Crne Gore i Ministarstva sporta i mladih.",
         title3:"Planinarski klub “Subra“ iz Herceg Novog",
         text3:"osnovan je 1932 godine i u to doba njegovi su članovi organizovali jednodnevne boravke na Orjenu, najčešće na lokaciji Vratlo, privučeni dobrom mogućnošću skijanja tokom čitavog zimskog perioda. Prvi ozbiljni alpinistički uspon u stijenama Orjena zabilježen je 1936 godine, a izveo ga je E. Blažević sa dvojicom planinara u stijeni Kamenski kabao u Vratlu",
         title4:"Planinarski klub “Subra“ iz Herceg Novog",
         text4:"osnovan je 1932 godine i u to doba njegovi su članovi organizovali jednodnevne boravke na Orjenu, najčešće na lokaciji Vratlo, privučeni dobrom mogućnošću skijanja tokom čitavog zimskog perioda. Prvi ozbiljni alpinistički uspon u stijenama Orjena zabilježen je 1936 godine, a izveo ga je E. Blažević sa dvojicom planinara u stijeni Kamenski kabao u Vratlu",
        };
      }
    
    
    render(){
        return(  
            <div class="parent">
                <div class="div1"><Text title={this.state.title1} text={this.state.text1} /></div>
                <div class="div2"><img src={image1} alt="slika1" className="img-box"/></div>
                <div class="div3"><img src={image2} alt="slika2" className="img-box"/></div>
                <div class="div4"><Text title={this.state.title2} text={this.state.text2} /></div>
                <div class="div5"><img src={image3} alt="slika3" className="img-box"/></div>
                <div class="div6"><img src={image4} alt="slika4" className="img-box"/></div>
            </div> 
        );
    }      
}

export default Grid;