import React from 'react';
import {Link} from 'react-router-dom'
import Header from './Layout/Header'
import GalleryDiv from './../containers/gallery/gallery'

let Gallery = () => {
  return (
    <div>
        <Header />
        <GalleryDiv />
    </div>
  );
}

export default Gallery;
