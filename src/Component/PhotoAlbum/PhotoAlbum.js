import React, { Component } from "react";
import './PhotoAlbum.css'


class Grid extends Component {

    fullSize = (event) =>{
        const site = document.getElementById('gallery-photos');
        site.style.opacity = 0;
        
    }

    render(){
        return( 
            <div className="photo-album" id="gallery-photos">
                <img src="https://www.cronobierzo.es/wp-content/uploads/2020/01/no-image.jpg" alt="placeholder" onClick={this.fullSize}></img>
                <img src="https://www.cronobierzo.es/wp-content/uploads/2020/01/no-image.jpg" alt="placeholder"></img>
                <img src="https://www.cronobierzo.es/wp-content/uploads/2020/01/no-image.jpg" alt="placeholder"></img>
                <img className="big-pciature" src="https://www.cronobierzo.es/wp-content/uploads/2020/01/no-image.jpg" alt="placeholder"></img>
                <img className="big-pciature" src="https://www.cronobierzo.es/wp-content/uploads/2020/01/no-image.jpg" alt="placeholder"></img>
                <img src="https://www.cronobierzo.es/wp-content/uploads/2020/01/no-image.jpg" alt="placeholder"></img>
                <img src="https://www.cronobierzo.es/wp-content/uploads/2020/01/no-image.jpg" alt="placeholder"></img>
                <img src="https://www.cronobierzo.es/wp-content/uploads/2020/01/no-image.jpg" alt="placeholder"></img>
                <img src="https://www.cronobierzo.es/wp-content/uploads/2020/01/no-image.jpg" alt="placeholder"></img>
                <img src="https://www.cronobierzo.es/wp-content/uploads/2020/01/no-image.jpg" alt="placeholder"></img>
                <img className="big-pciature" src="https://www.cronobierzo.es/wp-content/uploads/2020/01/no-image.jpg" alt="placeholder"></img>
                <img src="https://www.cronobierzo.es/wp-content/uploads/2020/01/no-image.jpg" alt="placeholder"></img>
                <img src="https://www.cronobierzo.es/wp-content/uploads/2020/01/no-image.jpg" alt="placeholder"></img>
                <img src="https://www.cronobierzo.es/wp-content/uploads/2020/01/no-image.jpg" alt="placeholder"></img>
                <img src="https://www.cronobierzo.es/wp-content/uploads/2020/01/no-image.jpg" alt="placeholder"></img>
                <img src="https://www.cronobierzo.es/wp-content/uploads/2020/01/no-image.jpg" alt="placeholder"></img>
                <img src="https://www.cronobierzo.es/wp-content/uploads/2020/01/no-image.jpg" alt="placeholder"></img>
                <img className="big-pciature" src="https://www.cronobierzo.es/wp-content/uploads/2020/01/no-image.jpg" alt="placeholder"></img>
                <img src="https://www.cronobierzo.es/wp-content/uploads/2020/01/no-image.jpg" alt="placeholder"></img>
                <img src="https://www.cronobierzo.es/wp-content/uploads/2020/01/no-image.jpg" alt="placeholder"></img>
                <img src="https://www.cronobierzo.es/wp-content/uploads/2020/01/no-image.jpg" alt="placeholder"></img>
                <img src="https://www.cronobierzo.es/wp-content/uploads/2020/01/no-image.jpg" alt="placeholder"></img>
                <img src="https://www.cronobierzo.es/wp-content/uploads/2020/01/no-image.jpg" alt="placeholder"></img>
                <img src="https://www.cronobierzo.es/wp-content/uploads/2020/01/no-image.jpg" alt="placeholder"></img>
                <img src="https://www.cronobierzo.es/wp-content/uploads/2020/01/no-image.jpg" alt="placeholder"></img>
                <img src="https://www.cronobierzo.es/wp-content/uploads/2020/01/no-image.jpg" alt="placeholder"></img>
                <img src="https://www.cronobierzo.es/wp-content/uploads/2020/01/no-image.jpg" alt="placeholder"></img>
                <img src="https://www.cronobierzo.es/wp-content/uploads/2020/01/no-image.jpg" alt="placeholder"></img>
                <img src="https://www.cronobierzo.es/wp-content/uploads/2020/01/no-image.jpg" alt="placeholder"></img>
                <img src="https://www.cronobierzo.es/wp-content/uploads/2020/01/no-image.jpg" alt="placeholder"></img>
                <img src="https://www.cronobierzo.es/wp-content/uploads/2020/01/no-image.jpg" alt="placeholder"></img>
                <img src="https://www.cronobierzo.es/wp-content/uploads/2020/01/no-image.jpg" alt="placeholder"></img>
                <img src="https://www.cronobierzo.es/wp-content/uploads/2020/01/no-image.jpg" alt="placeholder"></img>
                <img src="https://www.cronobierzo.es/wp-content/uploads/2020/01/no-image.jpg" alt="placeholder"></img>
                <img src="https://www.cronobierzo.es/wp-content/uploads/2020/01/no-image.jpg" alt="placeholder"></img>
            </div>
        );
    }      
}

export default Grid;