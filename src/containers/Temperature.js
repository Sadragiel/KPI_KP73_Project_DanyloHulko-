import React from 'react';
import { connect } from 'react-redux'

let Temperature = ({ temp, city, cucold, name = null }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ color: 'olive' }}>{temp ? `In ${name ? name : city}: ${temp} degrees Celsius` : null}</h1>
      <img src={cucold} alt="Andrew" />
    </div>
  );
}
const mapStateToProps = (state) => ({
  temp: state.reducer.temp,
  city: state.reducer.cityName,
  cucold: state.reducer.cucold
})

Temperature = connect(
  mapStateToProps,
  null
)(Temperature)

export default Temperature;


