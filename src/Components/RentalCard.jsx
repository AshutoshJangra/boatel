import React from 'react' ;
import {Link} from 'react-router-dom';
import '../App.css'

const RentalCard = ({rental}) => {
    return (
        <Link to = {`/rental/${rental.id}`} >
        <div className="rental-card bg-near-white br3 ma3 mv3 ">
           <div className="card-img">
              <img className=""src={rental.image} alt=""/>
           </div>
           <div className="pa2 card-info">
               <h6 className="card-subtitle green ma2">{rental.shared ? 'Shared' : 'Whole'} {rental.category} - {rental.city}</h6>
               <h4 className="card-title f5 dark-gray ma2">{rental.title}</h4>
               <p className="card-text mid-gray f6 ma2">${[rental.dailyRate]} per Night &#183; Free Cancelation</p>
               <a href="" className="card-link orange no-underline f5 ma2">More Info</a>
           </div>
        </div>
        </Link>
    );
}
export default RentalCard;