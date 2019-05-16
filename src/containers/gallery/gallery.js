import React from 'react';
import {Link} from 'react-router-dom';
import GalleryItem from './gallery_item'
import Pagination from './../pagination/pagination'
import { connect } from 'react-redux';
import SearchForm from './../search/search_form'

class Gallery extends React.Component {
  render() {
    const items = []
    for (let i = 0; i < this.props.galleryItems.length; i++) {
      items.push(<GalleryItem key={i} 
        imgSrc={this.props.galleryItems[i].src} 
        name={this.props.galleryItems[i].name} />)
    } 
    if(items.length === 0)
      items.push(<span key={0}></span>)
    return (
        <div className="gallery">
            <figure> 
                <header className="gallery__header"> Some title </header>
                <SearchForm />
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
