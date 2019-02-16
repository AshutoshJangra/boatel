import React, { Component } from "react";
import Headers from "./Components/shared/Headers";
import RentalListing from "./Components/rental-listing/RentalListing";
import RentalDetail from "./Components/rental-details/RentalDetail";

import Login from "./Components/login/Login";
import { Register } from "./Components/register/Register";

import { ProtectedRoute } from "./Components/shared/auth/ProtectedRoute";
import { LoggedInRoute } from "./Components/shared/auth/LoggedInRoute";

import { Provider } from "react-redux";

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import * as actions from "./actions";

const store = require("./reducer/Store").init();

class App extends Component {
  componentWillMount() {
    this.checkAuthState();
  }

  checkAuthState = () => {
    store.dispatch(actions.checkAuthState());
  };

  logout = () => {
    store.dispatch(actions.logout());
  };

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App ">
            <Headers logout={this.logout}/>

            <div className="container">
              <Route exact path="/" render={() => <Redirect to="/rentals" />} />
              <Route exact path="/rentals" component={RentalListing} />
              <ProtectedRoute
                exact
                path="/rentals/:id"
                component={RentalDetail}
              />
              <Route exact path="/login" component={Login} />
              <LoggedInRoute exact path="/register" component={Register} />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
