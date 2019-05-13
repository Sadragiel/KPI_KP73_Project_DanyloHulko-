import React from 'react';
import SingleComment from'./single_comment'
import CommentForm from './comment_form'

let str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

class Comments extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div className="comments">
          <h2 className="comments__header">Comments</h2>
          <ul className="comments__list">
            <SingleComment />
            <SingleComment />
            <SingleComment />
          </ul>
          <CommentForm />
        </div>
    );
  }

};

export default Comments;