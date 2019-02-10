import axios from "axios";

//Actions funstions
export const fetchRentalsSuccess = (rentals) => {
  return {
    type: "FETCH_RENTALS_SUCCESS",
    payload: rentals
  };
};

export const fetchRentals = () => {
  return dispatch =>  {
    axios.get('/api/v1/rentals')
    .then(res => res.data)
    .then(rentals => dispatch(fetchRentalsSuccess(rentals)) 
    );
  }
}

export const fetchRentalByIdInit = () => {
  return{
    type:"FETCH_RENTAL_BY_ID_INIT"
  }
}


export const fetchRentalByIdSuccess = (rental) => {
  return {
    type: "FETCH_RENTAL_BY_ID_SUCCESS",
    payload: rental
  };
};

export const fetchRentalById = (rentalId) => {
    return function(dispatch){
     dispatch(fetchRentalByIdInit());

    axios.get(`/api/v1/rentals/${rentalId}`)
    .then(res => res.data)
    .then(rental => dispatch(fetchRentalByIdSuccess(rental))
    );     
  };
};


