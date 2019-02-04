import React, { Component } from "react";

import * as actions from "../../actions";
import { connect } from "react-redux";

class RentalDetail extends Component {
  componentWillMount() {
    
    const rentalId = this.props.match.params.id;
    this.props.dispatch(actions.fetchRentalsById(rentalId));
    debugger;
  }

  render() {
    const rental = this.props.rental;
    return (
      <div>
        <h1>{rental.title}</h1>
      </div>
    );
  }
}
const mapStateToProps = state => {
  debugger;
  return {
    rental : state.selectedRentalReducer.data
  };
};

export default connect(mapStateToProps)(RentalDetail);
