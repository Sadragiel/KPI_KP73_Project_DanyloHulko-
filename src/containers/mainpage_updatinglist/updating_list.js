import React from 'react';
import UpdatingListItem from './updating_list_item'


class UpdatingList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div className="updating-list">
          <div className="updating-list__body">
            <ul className="updating-list__list">
              <UpdatingListItem imageSrc={this.props.tmpAvaLink} date="01.01.2001" link="#" name="Тестовое имя 1" />
              <UpdatingListItem imageSrc={this.props.tmpAvaLink} date="02.02.2002" link="#" name="Тестовое имя 2" />
              <UpdatingListItem imageSrc={this.props.tmpAvaLink} date="03.03.2003" link="#" name="Тестовое имя 3" />
              <UpdatingListItem imageSrc={this.props.tmpAvaLink} date="04.04.2004" link="#" name="Тестовое имя 4" />
            </ul>
          </div>
        </div>
    );
  }

};

export default UpdatingList;
