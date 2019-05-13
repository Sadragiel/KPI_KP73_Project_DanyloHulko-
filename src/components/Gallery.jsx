import React from 'react';
import {Link} from 'react-router-dom'
import Header from './Layout/Header'
import GalleryDiv from './../containers/gallery/gallery'
import Loading from './../containers/Loading'
import Pagination from './../containers/pagination/pagination'
import {connect } from 'react-redux'
import {getGalery} from './../actions/index'
import MyBatton from './../containers/myBatton';



class Gallery extends React.Component {
  componentDidMount(){
    this.props.getGalery(1);

    

  }
  render() {
    return (
      <div className="transition-container">
          <Loading />
          <GalleryDiv />
          <Pagination />
      </div>
    );
  }
};


const mapDispatchToProps = {
  getGalery,
};

Gallery = connect(
  null,
  mapDispatchToProps,
)(Gallery);



export default Gallery;
