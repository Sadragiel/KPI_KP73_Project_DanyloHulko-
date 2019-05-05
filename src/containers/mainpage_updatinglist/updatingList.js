import React from 'react';
import { connect } from 'react-redux';
import { getTemp, getCucold } from '../actions'

let styles = {
  backgroundColor: 'HotPink ',
  width: '250px',
  height: '100px',
  borderRadius: '100px',
  display: 'block',
  margin: '50px auto',
  fontSize: '25px',
  border: '3px solid '
}

class UpdatingList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div>
            <div className="head">
              
            </div>
            <div className="body">
            
            </div>
        </div>
    );
  }

};

export default UpdatingList;
