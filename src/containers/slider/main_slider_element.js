import React from 'react';
import {Link} from 'react-router-dom';

class MainSliderElement extends React.Component {
  render() {
    return (
        <div className="main-slider__element">
            <img className="main-slider__item" src={this.props.itemSrc} 
                
            />
            <div className="main-slider__infoblock">
                <h2 className="infoblock_header">
                    {this.props.header}
                </h2>
                <hr className="infoblock_separator1" noshade="noshade"/>
                <p className="infoblock_body">
                    {this.props.body}
                </p>
                <p className="infoblock_link-div " >
                    <Link to="#" className="infoblock_link">
                        {this.props.link}
                    </Link>
                </p>
            </div>
        </div>
    );
  }

};

export default MainSliderElement;
