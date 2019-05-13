import React from 'react';
import {CreatePeginationElement} from './pagination_elements_creator'
import { connect } from 'react-redux';

class Pagination extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    
    return (
        <div className="pagination__wrapper">
            <ul className="pagination">
            
                {CreatePeginationElement(this.props.page, this.props.maxPage)}
            </ul>
        </div>
    );
  }

};

const mapStateToProps = (state) => (
    { 
        page: state.reducer.page,
        maxPage: state.reducer.maxPage
    }
)


Pagination = connect(
  mapStateToProps,
  null,
)(Pagination);



export default Pagination;