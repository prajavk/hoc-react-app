import React from "react";
import SeasonDisplay from "./SeasonDisplay";

// Use chrome sensors to turn on geo location
/* stateless
const GeoLocationApp = props => {
  window.navigator.geolocation.getCurrentPosition(
    position => console.log(position),
    err => console.log(err)
  );
  return <div> Latitude: </div>;
};
*/

class GeoLocationApp extends React.Component {
  // equivalent to default constructor
  state = { lat: null, errorMsg: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
        this.setState({
          lat: position.coords.latitude
        });
      },
      err => {
        console.log(err);
        this.setState({
          errorMsg: err.message
        });
      }
    );
  }
  render() {
    if (this.state.errorMsg && !this.state.lat) {
      return <div>Error: {this.state.errorMsg}</div>;
    }
    if (!this.state.errorMsg && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <div>Loading!</div>;
  }
}
export default GeoLocationApp;
