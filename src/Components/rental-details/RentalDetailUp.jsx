import React from "react";

const RentalDetailUp = ({ rental }) => {
  return (
    <div className="flex rental-detail-up  ">
      <div className="pb4 pl5 pr5  pt4 prental-detail-up-img">
        <img className="rental-img" src={rental.image} alt={rental.image} />
      </div>
      <div className="pl2 pt5 pb4 rental-detail-up-dis">
        <div className=" detail-rental">
          <h2 className="f5 fw4 near-white">
            {rental.shared ? "Shared" : "Whole"} {rental.category}
          </h2>
          <h1 className=" f2 fw2   rental-title">{rental.title}</h1>
          <h2 className="f5 fw4 pt2 pb2 rental-city">{rental.city}</h2>
        </div>
        <hr className="mt2 mb2" />
        <div className="  rental-room-info">
          <span className="pa2 pl0">
            <i className="ma2 fa fa-building" />
            {rental.bedrooms} bedrooms
          </span>
          <span className="pa2">
            <i className="  fa fa-user " /> {rental.bedrooms + 4} guests
          </span>
          <span className="pa2">
            <i className=" fa fa-bed " /> {rental.bedrooms + 2} beds
          </span>
        </div>
      </div>
    </div>
  );
};

export default RentalDetailUp;
