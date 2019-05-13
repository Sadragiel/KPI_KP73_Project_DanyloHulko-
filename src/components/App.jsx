import React from 'react';
import {Link} from 'react-router-dom'
import Header from './Layout/Header'
import Slider from './../containers/slider/main_slider'
import UpdatingListTabs from './../containers/mainpage_updatinglist/udating_list_tabs.js';
import {connect } from 'react-redux'

let padding_top = {
  paddingTop: "30px"
}


let App = ({ callDone, id,getByUrl }) => {
  if(id && !callDone){getByUrl(id)}
  return (
    <div className="transition-container">
        <Slider style={{padding_top}} />
          <div className="row">
            <UpdatingListTabs />
          </div>
      </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  id: ownProps.match.params[0],
  callDone: state.reducer.callDone,
});


const mapDispatchToProps = dispatch => ({
  getByUrl: (name) => { dispatch({type:'GET_TEMP',name}); },
});

App = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);



export default App;
