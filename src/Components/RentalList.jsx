import React, { Component } from "react";
import RentalCard from "./RentalCard";

class RentalList extends Component {
  constructor() {
    super();
    this.state = {
      rentals: [
        {
          id: 1,
          title: "Central Apartment",
          city: "New York",
          street: "Times Sqaure",
          category: "apartment",
          image: "http://via.placeholder.com/350x250",
          bedrooms: 3,
          description: "Very nice apartment",
          dailyRate: 34,
          shared: false,
          createdAt: "24/12/2017"
        },
        {
          id: 2,
          title: "Central Apartment 2",
          city: "San Francisco",
          street: "Main street",
          category: "condo",
          image: "http://via.placeholder.com/350x250",
          bedrooms: 2,
          description: "Very nice apartment",
          dailyRate: 12,
          shared: true,
          createdAt: "24/12/2017"
        },
        {
          id: 3,
          title: "Central Apartment 3",
          city: "Bratislava",
          street: "Hlavna",
          category: "condo",
          image: "http://via.placeholder.com/350x250",
          bedrooms: 2,
          description: "Very nice apartment",
          dailyRate: 334,
          shared: true,
          createdAt: "24/12/2017"
        },
        {
          id: 4,
          title: "Central Apartment 4",
          city: "Berlin",
          street: "Haupt strasse",
          category: "house",
          image: "http://via.placeholder.com/350x250",
          bedrooms: 9,
          description: "Very nice apartment",
          dailyRate: 33,
          shared: true,
          createdAt: "24/12/2017"
        }
      ]
    };
  }

  render() {
    return (
      <div className="container">
        <div className="ma4">
          <h2 className=" pl4 app-title  dark-gray">
            Your Home All Around the World
          </h2>
          <div className="flex flex-wrap">
            {/* traverse through rental array and display cards */}
            {this.state.rentals.map(rental => {
              return <RentalCard rental = {rental}/>;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default RentalList;
