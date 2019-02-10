import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Headers = () => {
  return (
    <div>
      <nav className="flex nav-bar justify-between bg-white ">
        <Link to="/rentals" className="logo pt2 pl5 no-underline fw4 orange" id="title">
          Boatel
        </Link>
        <div className="search pa2">
          <input
            className="input-field "
            type="text"
            placeholder="Try 'Delhi' "
          />
          <button className="w4 h2 ma1 bg-orange near-white bn" type="search">
            Search
          </button>
        </div>

        <div className="links pa2 mt2 mr3 ">
          <a className="active f5 pointer r2 dark-gray no-underline mr3 dim">Login</a>
          <a className="pr2 f5 pointer dark-gray no-underline mr3 dim">Register</a>
        </div>
      </nav>
    </div>
  );
};

export default Headers;
