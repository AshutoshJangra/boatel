import React, { Component } from "react";
import RentalCard from "./RentalCard";

class RentalList extends Component {

  render() {
    debugger;
    return (
      <div className="flex flex-wrap">
        {/* traverse through rental array and display cards */}
        {this.props.rentals.map(rental => {
          
          return <RentalCard key={rental._id} rental={rental} />;
        })}
      </div>
    );
  }
}

export default RentalList;
