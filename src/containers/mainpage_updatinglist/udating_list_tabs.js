import React from 'react';
import UpdatingList from './updating_list'
import {displayDefault} from './updating_list_functional';
import TabHead from './udating_list_tabs_head';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    displayDefault();
  }

  render() {
    return (
        <div className="tabs__updating-list">

            <TabHead index="0" title="Some title 1" />
            <TabHead index="1" title="Some title 2" />
            <TabHead index="2" title="Some title 3" />
            
            <div className="tabs__updating-list_body">
              <UpdatingList tmpAvaLink="/static/images/test_ava1.jpg" />
              <UpdatingList tmpAvaLink="/static/images/test_ava2.jpg" />
              <UpdatingList tmpAvaLink="/static/images/test_ava3.jpg" />
            </div>
        </div>
    );
  }

};

export default Tabs;
