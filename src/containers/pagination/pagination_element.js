import React from 'react';
import { connect } from 'react-redux';
import { getGalery } from './../../actions/index'


class PaginationElement extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let classname = "pagination__element";
    if(this.props.isDisabled)
        classname += ' pagination__element_disabled';
    if(this.props.content === this.props.reference)
        classname += ' pagination__element_active';
    return (
        <li className={classname}
            onClick={() => this.props.getGalery(this.props.reference)}
        >
            <span className="pagination__element-content">
                {this.props.content}
            </span>
        </li>
    );
  }

};

const mapStateToProps = (state) => (
    { 
        resultOfPagination: state.reducer.resultOfPagination,
        page: state.reducer.page,
        perPage: state.reducer.perPage,
        maxPage: state.reducer.maxPage
    }
)
const mapDispatchToProps = {
    getGalery,
};


PaginationElement = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PaginationElement);

export default PaginationElement;