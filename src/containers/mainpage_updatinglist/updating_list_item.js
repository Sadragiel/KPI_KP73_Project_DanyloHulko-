import React from 'react';
import {Link} from 'react-router-dom'

/* props
    -link
    -date
    -imageSrc
    -name
*/

class UpdatingListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
       
            <li className="updating-list__item">
                <Link to={this.props.link} >
                  <span className="updating-list__item_date">
                      {this.props.date}
                  </span>
                  <img className="updating-list__item_preview" src={this.props.imageSrc} alt="articlePreview" />
                  <span className="updating-list__item_name">
                      {this.props.name}
                  </span>
                </Link>
            </li>
        
    );
  }

};


export default UpdatingListItem;