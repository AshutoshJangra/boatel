import React, { Component } from "react";
import Headers from "./Components/Headers";
import RentalList from "./Components/RentalList";
import { RentalDetail } from "./Components/RentalDetail";

import { BrowserRouter as Router, Route , Redirect} from "react-router-dom";

class App extends Component {
  
  render() {
    return (
      <Router>
        <div className="App ">
          <Headers />

          <div className="container">
            <Route exact path="/" render={() => <Redirect to= '/rental'/> } />
            <Route exact path="/rental" component={RentalList} />
            <Route exact path="/rental/:id" component={RentalDetail} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
