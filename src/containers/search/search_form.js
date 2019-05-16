import React from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { getGalery , setGaleryKey } from './../../actions/index'

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div className="search-form">
           <h2 className="search-form__header">Search</h2> 
            <form className="search-form__form">
                <div className="form-element form-element_full-width">
                    <input  className="form-element__input"
                        type="text" name="name" id="comment_author_name"
                        autoComplete="off"
                        onChange={(event) => {
                            this.props.setGaleryKey(event.target.value)
                        }}
                        required />
                </div>
                <div  className="form-element  form-element_float-right">
                    <input 
                        type="submit"
                        onClick={(event) => {
                            event.preventDefault() 
                            this.props.getGalery(1,this.props.keyWord )
                        }}
                        className="form-element__button"
                        name="submit" id="submit_comment" defaultValue="Perform"
                    />
                </div>
            </form> 
        </div>
        
    );
  }

};

const mapStateToProps = (state) => (
    { 
        keyWord: state.reducer.key
    }
)
const mapDispatchToProps = {
    getGalery,setGaleryKey
};


SearchForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchForm);


export default SearchForm;