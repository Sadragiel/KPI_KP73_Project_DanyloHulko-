import React from 'react';
import {CreatePeginationElement} from './pagination_elements_creator'
import { connect } from 'react-redux';

class Pagination extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div className="pagination">
            <ul>
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
const mapDispatchToProps = {};


Pagination = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pagination);



export default Pagination;