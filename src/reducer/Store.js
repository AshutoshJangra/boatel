import * as redux from "redux";
import { rentalReducer} from "./Rental-Reducer";
import {selectedRentalReducer} from './Rental-Reducer';
import thunk from "redux-thunk";


export const init = () => {
  const reducer = redux.combineReducers({ rentalReducer , selectedRentalReducer});
  const store = redux.createStore(reducer , redux.applyMiddleware(thunk));
  return store;
};
