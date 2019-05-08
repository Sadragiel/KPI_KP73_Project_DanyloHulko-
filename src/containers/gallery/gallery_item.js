import React from 'react';
import {Link} from 'react-router-dom';

class GalleryElement extends React.Component {
  render() {
    return (
        <li className="gallery__item">
            <span className="gallery__item_header">
                Item Title
            </span>
            <Link to="#" className="gallery__item_link">
                <img src={this.props.imgSrc} className="gallery__item_img" />
            </Link>
            <span className="gallery__item_footer">
                footer
            </span>
        </li>
    );
  }

};

export default GalleryElement;
