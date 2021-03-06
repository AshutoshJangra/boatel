import axios from "axios";
import authService from '../services/auth-service';
import axiosService from '../services/axios-service';

//Actions funstions

// RENTALS ATIONS ---------------------------

const axiosInstance = axiosService.getInstance();

export const fetchRentalsSuccess = (rentals) => {
  return {
    type: "FETCH_RENTALS_SUCCESS",
    payload: rentals
  };
};

export const fetchRentals = () => {
  return dispatch =>  {
    axiosInstance.get('rentals')
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


// AUTH ATIONS ---------------------------

const loginSuccess = () => {
  return {
    type: "LOGIN_SUCCESS"
  }
}

const loginFailure = (errors) => {
  return {
    type: "LOGIN_FAILURE",
    errors
  }
}

export const register = (userData) => {
  return axios.post('/api/v1/users/register', {...userData}).then(
    res => res.data,
    err => Promise.reject(err.response.data.errors)
  )
}

export const checkAuthState = () => {
  return dispatch => {
    if (authService.isAuthenticated()) {
      dispatch(loginSuccess());
    }
  }
}

export const login = (userData) => {
  return dispatch => {
    return axios.post('/api/v1/users/auth', {...userData})
      .then(res => res.data)
      .then(token => {
        authService.saveToken(token);
        dispatch(loginSuccess());
      })
      .catch(({response}) => {
        dispatch(loginFailure(response.data.errors));
      })
  }
}

export const logout = () => {
  authService.invalidateUser();

  return {
    type: "LOGOUT"
  }
}
