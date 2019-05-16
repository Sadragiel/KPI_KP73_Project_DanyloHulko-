import React from 'react';

import BreabcrumpsItem from './breadcrumbs_item'

let array = []

for (let i = 0; i < 6; i++) {
  array.push(<BreabcrumpsItem key={i}  />)
} 

class Breadcrumbs extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (

      <ol className="breadcrumbs">
          {array}
      </ol>
    );
  }

};

export default Breadcrumbs;