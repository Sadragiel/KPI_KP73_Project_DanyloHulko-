import React from 'react';
import {Link} from 'react-router-dom'
import Header from './Layout/Header'
import GalleryDiv from './../containers/gallery/gallery'
import Loading from './../containers/Loading'
import Pagination from './../containers/pagination/pagination'
import {connect } from 'react-redux'
import {getGalery} from './../actions/index'
import MyBatton from './../containers/myBatton';


let Gallery = ({getGalery}) => {
  getGalery(1);
  return (
    <div>
        <Header />
        <Loading />
        <GalleryDiv />
        <Pagination />
    </div>
  );
}


const mapDispatchToProps = {
  getGalery,
};

Gallery = connect(
  null,
  mapDispatchToProps,
)(Gallery);



export default Gallery;
