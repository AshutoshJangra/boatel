import React from "react";
import '../App.css';

const Headers = () => {
  return (
    <div>
      <nav className="flex justify-between bg-near-white ">
        <div className="logo pt2 pl5  fw4 orange" id="title">
          Boatel
        </div>
        <div className="search pa2">
          <input className="input-field "type="text" placeholder="Try 'Delhi' " />
          <button className="w4 h2 ma1 bg-orange near-white bn" type="search">Search</button>
        </div>

        <div className="links pa2 mt2 mr3 " >
           <a className="active f5  r2 dark-gray no-underline mr3 dim" href="">Login</a>
           <a className="pr2 f5 dark-gray no-underline mr3 dim"href="">Register</a>
        </div>
      </nav>
    </div>
  );
};

export default Headers;
