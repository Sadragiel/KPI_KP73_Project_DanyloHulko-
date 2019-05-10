import React from 'react';
import { connect } from 'react-redux';
import { getGalery } from '../actions'

let styles = {
  backgroundColor: 'HotPink ',
  width: '250px',
  height: '100px',
  borderRadius: '100px',
  display: 'block',
  margin: '50px auto',
  fontSize: '25px',
  border: '3px solid '
}

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
  }
  render() {
    return (
      <button style={!this.state.hover ? styles : { ...styles, backgroundColor: 'DarkTurquoise ' }}
        onMouseOut={() => { this.setState({ hover: false }) }}
        onMouseOver={() => { this.setState({ hover: true }) }}
        onClick={() => {this.props.getGalery(1); }}
      >Get Gallery</button>
    );
  }

};
/*
let Button=({getTemp,name})=>(
  <button onClick={()=>getTemp(name)}>Get temperature</button>
)
*/
const mapStateToProps = (state) => (
  { name: state.reducer.cityName }
)
const mapDispatchToProps = {
    getGalery
};


Button = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);

export default Button;
