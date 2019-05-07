import React from 'react';
import {Link} from 'react-router-dom'
import Header from './Layout/Header'
import Slider from './../containers/slider/main_slider'
import UpdatingListTabs from './../containers/mainpage_updatinglist/udating_list_tabs.js';


let padding_top = {
  paddingTop: "30px"
}

let About = () => {
  return (
    <div>
        <Header />
        <Slider style={{padding_top}} />
        <div className="row">
          <UpdatingListTabs />
        </div>
        <Link to="/">Home</Link>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis cumque odit soluta expedita voluptatem, perspiciatis excepturi non sunt, recusandae aspernatur illum dolores et debitis porro optio quo qui! Eligendi, fuga!</p>
    </div>
  );
}

export default About;
