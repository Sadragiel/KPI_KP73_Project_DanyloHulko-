import React from 'react';

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

let stl = {
  width: "100%",
  height: "600px"
}

let str = 'Fate/Grand Order[a] is an online free-to-play role-playing mobile game, based on the Fate/stay night visual novel and franchise by Type-Moon, developed by Delightworks using Unity,[2][3] and published by Aniplex, a subsidiary of Sony Music Entertainment Japan. The game is centered around turn-based combat where the player, who takes on the role of a Master, summons and commands powerful familiars known as "Servants" to battle their enemies. The story narrative is presented in a visual novel format, and each Servant has their own personal scenario which the player can explore. It was first released in Japan on July 29, 2015 on Android[4] with a subsequent release on August 12, 2015 on iOS.'
//https://www.youtube.com/watch?v=7DvRo4o6rpw
let About = (props) => {
  
  return (
    <div className="about-page">
      <h2 className="about-page__header">About us</h2>
      <article className="about-page__body">
        <img
          className="about-page__image about-page__image_float-left"
          src="/static/images/About.png"
        />
        <p className="about-page__paragraph">{str}</p>
        <div className="about-page__video">
          <iframe src="https://www.youtube.com/embed/7DvRo4o6rpw" />
        </div>
        <p className="about-page__paragraph">{str}</p>
        <p className="about-page__paragraph">{str}</p>
      </article>
      <div className="map-wrapper">
        <Map style={stl} google={props.google} zoom={14}>

          <Marker name={'Current location'} />

          <InfoWindow>
              <div>
                <h1>Some header</h1>
              </div>
          </InfoWindow>
        </Map>
      </div>
    </div>
    
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyB2AWqsBw6NLLz6j36GNkaUt2HYBH3Citw"
})(About)
