import React, { Component } from "react";
import "../../App.css";
import * as actions from "../../actions";
import { connect } from "react-redux";
import RentalDetailUp from "./RentalDetailUp";
import { RentalDetailInfoDown } from "./RentalDetailInfoDown";
import RentalDetailMap from "./RentalDetailMap";
import "font-awesome/css/font-awesome.min.css";

class RentalDetail extends Component {
  componentWillMount() {
    const rentalId = this.props.match.params.id;
    this.props.dispatch(actions.fetchRentalById(rentalId));
  }

  render() {
    const rental = this.props.rental;

    if (rental._id) {
      return (
        <div className="rental-detail">
          <div className="rental-detail-up ">
            <RentalDetailUp rental={rental} />
          </div>
          <div className=" rental-detail-right">
            <div className="rental-map">
              {/*<RentalDetailMap className="map"rental={rental} />*/}
            </div>
            <div className="rental-detail-info pl5 pr5">
              <RentalDetailInfoDown rental={rental} />
            </div>
          </div>
        </div>
      );
    } else {
      return <h1 className="tc f1 orange fw1">Loading...</h1>;
    }
  }
}
const mapStateToProps = state => {
  return {
    rental: state.selectedRentalReducer.data
  };
};

export default connect(mapStateToProps)(RentalDetail);
