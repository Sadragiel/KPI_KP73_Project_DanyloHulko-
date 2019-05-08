import React from 'react';
import {Link} from 'react-router-dom';
import GalleryItem from './gallery_item'

  const items = []

  for (let i = 1; i < 37; i++) {
    items.push(<GalleryItem key={i} imgSrc={`/static/images/fate_chibi/${i}.jpg`} />)
  }
class Gallery extends React.Component {
  render() {
    return (
        <div className="gallery">
            <figure> 
                <header className="gallery__header"> Some title </header>
                <ul className="gallery_body">
                    {items}
                </ul>
            </figure>
        </div>
    );
  }

};

export default Gallery;
