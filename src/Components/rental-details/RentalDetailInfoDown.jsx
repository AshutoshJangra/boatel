import React from 'react';

export const RentalDetailInfoDown = ({rental}) => {

  return (
    <div>
      <p className="pt1 pb1 rental-description">{rental.description}</p>

      <hr />
      <div className="rental-assets">
        <h3 className="title">Assets</h3>
        <div className="flex ">
          <div className="flex flex-column pr5 mr1">
            <span className="pa2 mr2">
              <i className="fa fa-asterisk" /> Cooling
            </span>
            <span className="pa2 ">
              <i className="fa fa-thermometer" /> Heating
            </span>
            <span className="pa2 mr2">
              <i className="fa fa-location-arrow" /> Iron
            </span>
          </div>
          <div className="flex flex-column pl5">
            <span className="pa2 mr2">
              <i className="fa fa-desktop" /> Working area
            </span>
            <span className="pa2 mr2">
              <i className="fa fa-cube" /> Washing machine
            </span>
            <span className="pa2 mr2">
              <i className="fa fa-cube" /> Dishwasher
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};


