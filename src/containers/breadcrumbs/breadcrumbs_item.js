import React from 'react';
import {Link} from 'react-router-dom'



class Breadcrumbs extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <li className="breadcrumbs__item">
            <Link className="breadcrumbs__link" to="#"> Some page</Link>
        </li>
    );
  }

};

export default Breadcrumbs;