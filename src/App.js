import React, { Component } from "react";
import Headers from "./Components/Headers";
import RentalListing from "./Components/rental-listing/RentalListing";
import RentalDetail from "./Components/rental-details/RentalDetail";

import { Provider } from "react-redux";

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

const store = require("./reducer/Store").init();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App ">
            <Headers />

            <div className="container">
              <Route exact path="/" render={() => <Redirect to="/rentals" />} />
              <Route exact path="/rentals" component={RentalListing} />
              <Route exact path="/rentals/:id" component={RentalDetail} />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
