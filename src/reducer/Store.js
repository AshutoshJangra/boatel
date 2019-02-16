import * as redux from "redux";
import { rentalReducer } from "./Rental-Reducer";
import { selectedRentalReducer } from "./Rental-Reducer";
import { authReducer } from "./auth-reducer";
import { reducer as formReducer } from "redux-form";
import thunk from "redux-thunk";

export const init = () => {
  const reducer = redux.combineReducers({
    rentalReducer,
    selectedRentalReducer,
    form: formReducer,
    authReducer
  });
  const store = redux.createStore(reducer, redux.applyMiddleware(thunk));
  return store;
};
