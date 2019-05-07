import React from 'react';
import {openContent} from './updating_list_functional';

class TabHead extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div id="tabs__updating-list_default-open" className="tabs__updating-list_head"
            onClick={(event) => {
                openContent(event.target, Number(this.props.index));
            }}>
                {this.props.title}
        </div>
    );
  }

};


export default TabHead;