import React from 'react';
import {Link} from 'react-router-dom'


class CommentForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div className="commemt-form">
           <h2 className="commemt-form__header">Write a comment</h2> 
            <form className="commemt-form__form">
                <div className="form-element form-element_half-width form-element_float-left">
                    <label  className="form-element__label">
                        Name
                        <span  className="form-element__label_required">*</span>
                    </label>
                    <input  className="form-element__input"
                        type="text" name="name" id="comment_author_name"
                        autoComplete="off"
                        required />
                </div>
                <div  className="form-element form-element_half-width form-element_float-right">
                    <label className="form-element__label">
                        Mail
                        <span  className="form-element__label_required">*</span>
                    </label>
                    <input className="form-element__input"
                        type="text" name="mail" id="comment_author_mail"
                        autoComplete="off"
                        required />
                </div>
                <div  className="form-element form-element_full-width">
                    <label  className="form-element__label">
                        Your comment
                    </label>
                    <textarea className="form-element__input form-element__textarea"
                        name="comment_text" id="comment_text"
                        cols="25" rows="10">
                    </textarea>
                </div>
                <div  className="form-element  form-element_float-right">
                    <input 
                        type="submit"
                        className="form-element__button"
                        name="submit" id="submit_comment" defaultValue="Submit Form"
                    />
                    <input 
                        type="reset"
                        className="form-element__button"
                        name="reset" id="reset_comment" defaultValue="Reset Form"
                    />
                </div>
            </form> 
        </div>
        
    );
  }

};

export default CommentForm;