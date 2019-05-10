import React from 'react';
import {Link} from 'react-router-dom';
import GalleryItem from './gallery_item'
import Pagination from './../pagination/pagination'
import { connect } from 'react-redux';

class Gallery extends React.Component {
  render() {
    console.log('Gallery props', this.props)
    const items = []
    for (let i = 1; i < this.props.galleryItems.length; i++) {
      items.push(<GalleryItem key={i} imgSrc={this.props.galleryItems[i]} />)
    }
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

const mapStateToProps = (state) => (
  { 
      galleryItems: state.reducer.resultOfPagination,
  }
)

Gallery = connect(
  mapStateToProps,
  null,
)(Gallery);

export default Gallery;
