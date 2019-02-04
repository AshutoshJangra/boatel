import * as redux from "redux";
import { rentalReducer} from "./Rental-Reducer";
import {selectedRentalReducer} from './Rental-Reducer';


export const init = () => {
  const reducer = redux.combineReducers({ rentalReducer , selectedRentalReducer});
  const store = redux.createStore(reducer);
  return store;
};
