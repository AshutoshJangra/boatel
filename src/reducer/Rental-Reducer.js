const INIT_STATE = {
  rentals : {
    data:[]
  }
  ,
  rental : {
    data : {}
  }
};

export const rentalReducer = (state = INIT_STATE.rentals, action) => {
  switch (action.type) {
    case "FETCH_RENTALS":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export const selectedRentalReducer = (state = INIT_STATE.rental, action) => {
  debugger;
  switch (action.type) {
    case "FETCH_RENTALS_BY_ID":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

