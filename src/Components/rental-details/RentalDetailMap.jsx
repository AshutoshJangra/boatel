import React, { Component } from "react";

import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { relative } from "path";

export class RentalDetailMap extends Component {
  render() {
    return (
      <div style={{ height: "50vh", width: "50vw" }}>
        <Map
          google={this.props.google}
          zoom={18}
          center={{
            lat: 40.854885,
            lng: -88.081807
          }}
          style={{ height: "50vh", width: "66vw" ,overflow:'hidden'}}
        >
          <Marker onClick={this.onMarkerClick} name={"Current location"} />

          <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.props.rental.name}</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyACyCFFhBEjX4-cOeqVoMQo3ISjK3Pnzrk"
})(RentalDetailMap);
