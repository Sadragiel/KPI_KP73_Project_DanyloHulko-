import React from 'react';
// import {connect } from 'react-redux'
// import {getGalery} from './../actions/index'
import ArticleContent from './../containers/article/article'
import Comments from './../containers/comments/comments'

let Article = () => {
  return (
    <div className="transition-container">
        <ArticleContent/>
        <hr />
        <Comments/>
        
    </div>
  );
}


// const mapDispatchToProps = {
//   getGalery,
// };

// Gallery = connect(
//   null,
//   mapDispatchToProps,
// )(Gallery);



export default Article;
