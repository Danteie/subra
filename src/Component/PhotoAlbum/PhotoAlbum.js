import React from 'react';
import ImageGallery from 'react-image-gallery';
import './PhotoAlbum.css'



const images = [
    {
      original: 'https://scontent.ftgd2-1.fna.fbcdn.net/v/t39.30808-6/283524101_2161332710690053_2310150044312803220_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=973b4a&_nc_ohc=HQBDYKtT2YwAX-YGKht&_nc_oc=AQnBvayLc2TSUIk3njXh6ZpnWKIkY2UOQMoOThkHl5vsuhvSTE160MiN9sZp_kxu0bo&_nc_ht=scontent.ftgd2-1.fna&oh=00_AT9YMPq29ZvLrS4-5torD_055N8INwOKC8vLn5w28QA-pg&oe=629FDFF6',
      thumbnail: 'https://scontent.ftgd2-1.fna.fbcdn.net/v/t39.30808-6/283524101_2161332710690053_2310150044312803220_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=973b4a&_nc_ohc=HQBDYKtT2YwAX-YGKht&_nc_oc=AQnBvayLc2TSUIk3njXh6ZpnWKIkY2UOQMoOThkHl5vsuhvSTE160MiN9sZp_kxu0bo&_nc_ht=scontent.ftgd2-1.fna&oh=00_AT9YMPq29ZvLrS4-5torD_055N8INwOKC8vLn5w28QA-pg&oe=629FDFF6',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
      },
      {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
      },
      {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
      },
      {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
      },

  ];


function PhotoAlbum() {
    return (
    <div className='photo-album'><ImageGallery items={images} sizes='200'/></div>
    );
}

export default PhotoAlbum;