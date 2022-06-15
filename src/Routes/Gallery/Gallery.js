import React from "react";
import './Gallery.css'
//Home
import Logo from '../../Component/Logo/Logo'
import Menu from '../../Component/Menu/Menu'
//PhotoAlbum
import PhotoAlbum from "../../Component/PhotoAlbum/PhotoAlbum";


function Gallery() {
    return(
      <div className='gallery'>
        <div className='header'>
            <Logo/>
            <Menu/>
        </div>
        <PhotoAlbum/>
      </div>
    );
}

export default Gallery;