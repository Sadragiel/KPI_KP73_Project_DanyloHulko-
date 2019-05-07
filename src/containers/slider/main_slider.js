import React from 'react';

import MainSliderElement from './main_slider_element'

import {plusDivs, showDivs, } from './main_slider_functional'


class Slider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            plusDivs, showDivs,
            coroutine: () => {
                this.state.TimeoutCoroutine = setTimeout( () => {
                    this.state.plusDivs(1);
                    this.state.coroutine()
                }, 5000);
            }
        }
    }

    componentDidMount(){
        this.state.plusDivs(0);
        this.state.coroutine();
    }
    
    render() {
        return (
            <div className="main-slider"> 
                <MainSliderElement 
                    itemSrc="/static/images/Main1.jpg"
                    header="Nobunaga"
                    body="Nobunaga body" 
                    link="Read more"  
                    
                />
                <MainSliderElement 
                    itemSrc="/static/images/Main2.jpg"
                    header="Gacha"
                    body="Gacha body" 
                    link="Read more"  
                />
                <MainSliderElement 
                    itemSrc="/static/images/Main3.jpg"
                    header="Cuhulin"
                    body="Cuhulin body" 
                    link="Read more"  
                />
                <button className="main-slider__btn btn_prev" 
                    onClick={() => {
                        clearTimeout(this.state.TimeoutCoroutine);
                        this.state.plusDivs(-1)
                        this.state.coroutine();
                    }}
                    
                >
                    &#10094;
                </button>
                <button className="main-slider__btn btn_next" 
                    onClick={() => {
                        clearTimeout(this.state.TimeoutCoroutine);
                        this.state.plusDivs(1)
                        this.state.coroutine();
                    }}
                >
                    &#10095;
                </button>
            </div>
        );
    }
 
}

export default Slider;
