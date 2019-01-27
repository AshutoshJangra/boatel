import React from 'react' ;
import '../App.css'

const RentalCard = () => {
    return (
        <div className="rental-card  bg-near-white br3 ma3 mv3 ">
           <div className="img">
              <img className=""src="http://via.placeholder.com/350x250" alt=""/>
           </div>
           <div className="pa2">
               <h6 className="card-subtitle green ma2">WHOLE APARTMENT - DELHI</h6>
               <h4 className="card-title f5 dark-gray ma2">Some nice apartment</h4>
               <p className="card-text mid-gray f6 ma2">$240 per Night &#183; Free Cancelation</p>
               <a href="" className="card-link orange no-underline f5 ma2">More Info</a>
           </div>
        </div>
    );
}
export default RentalCard;