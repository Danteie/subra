import React, { Component } from "react";
import './PhotoAlbum.css'


class Grid extends Component {

    render(){
        return(  
          <div className="photo-album">
            <div className="grid-album-container">
              <div className="grid-album-div1"><img src="https://scontent.ftgd2-1.fna.fbcdn.net/v/t39.30808-6/283655077_2161332684023389_4686317369437950427_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=973b4a&_nc_ohc=cUdEikLoXAgAX8flo2i&_nc_ht=scontent.ftgd2-1.fna&oh=00_AT9rv10RtBNbuv_EQgvo7LgLBxZxVqMXQu2f1t4sNPbS1A&oe=62A1CCC3" alt="slika"/></div>
              <div className="grid-album-div2"><img src="https://scontent.ftgd2-1.fna.fbcdn.net/v/t39.30808-6/283750777_2161331344023523_1934253833622860447_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=973b4a&_nc_ohc=aUkFATR4RPwAX_lkrfM&_nc_ht=scontent.ftgd2-1.fna&oh=00_AT_-wBWmfqA6-cwap9QB3XuJmKehiFWCSgrUtjKxq8Iryg&oe=62A32037" alt="slika"/></div>
              <div className="grid-album-div3"><img src="https://scontent.ftgd2-1.fna.fbcdn.net/v/t39.30808-6/283654085_2161333470689977_5360780959924420650_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=973b4a&_nc_ohc=Wg94aPDtz94AX8qUVbp&_nc_ht=scontent.ftgd2-1.fna&oh=00_AT-PTuJtWEPYK3i_MIA5cqWHMkvBvd27taclPxABswtJpg&oe=62A1D36D" alt="slika"/></div>
              <div className="grid-album-div4"><img src="https://scontent.ftgd2-1.fna.fbcdn.net/v/t39.30808-6/283654085_2161333470689977_5360780959924420650_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=973b4a&_nc_ohc=Wg94aPDtz94AX8qUVbp&_nc_ht=scontent.ftgd2-1.fna&oh=00_AT-PTuJtWEPYK3i_MIA5cqWHMkvBvd27taclPxABswtJpg&oe=62A1D36D" alt="slika"/></div>
              <div className="grid-album-div5">
                <img src="https://scontent.ftgd2-1.fna.fbcdn.net/v/t39.30808-6/283735907_2161331304023527_1097664939102196132_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=973b4a&_nc_ohc=uVrtmEXduYAAX9owTq2&_nc_ht=scontent.ftgd2-1.fna&oh=00_AT9kEgsvut2XC3irPkNTLWvGjkugQBq667wQt4F-GOvBqg&oe=62A208B4" className="more-images" alt="slika"/>
                <h2>+11</h2>
              </div>
            </div> 
        </div>
        );
    }      
}

export default Grid;