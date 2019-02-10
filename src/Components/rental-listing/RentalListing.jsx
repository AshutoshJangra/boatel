import React, { Component } from "react";
import RentalList from "./RentalList";

import { connect } from "react-redux";
import * as actions from "../../actions";

class RentalListing extends Component {
  componentWillMount() {
    this.props.dispatch(actions.fetchRentals());
    
  }

  render() {
    return (
      <div className="container">
        <div className="ma4">
          <h2 className=" pl4 app-title  dark-gray">
            Your Home All Around the World
          </h2>
          <div className="flex flex-wrap">
            <RentalList rentals = {this.props.rentals} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    rentals: state.rentalReducer.data
  };
};

export default connect(mapStateToProps)(RentalListing);
