import React from 'react';

let str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

class Article extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div className="artice-content">
            <h2 className="artice-content__header">Some title of the article</h2>
            <img className="artice-content__image artice-content__image_float-left" 
                src="/static/images/float.png" 
                alt="Some float image"/>
            <p className="artice-content__paragraph"> {str} </p>
            <p className="artice-content__paragraph"> {str} </p>
            <p className="artice-content__paragraph"> {str} </p>
            <img className="artice-content__image artice-content__image_float-right" 
                src="/static/images/float.png" 
                alt="Some float image" />
            <p className="artice-content__paragraph"> {str} </p>
            <p className="artice-content__paragraph"> {str} </p>
            <p className="artice-content__paragraph"> {str} </p>
            <p className="artice-content__paragraph"> {str} </p>
            <div className="artice-content__image-wrapper">
              <img className="artice-content__image artice-content__image_center" 
                  src="/static/images/HeaderImage.jpg" 
                  alt="Some float image" />
            </div>
            
            <p className="artice-content__paragraph"> {str} </p>
        </div>
    );
  }

};

export default Article;