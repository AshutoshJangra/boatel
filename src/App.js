import React, { Component } from 'react';
import Headers from './Components/Headers'
import RentalCard from './Components/RentalCard' ;

class App extends Component {
  render() {
    return (
      <div className="App ">
      <Headers />

      <div className="ma4">
        <h2 className=" pl4 app-title  dark-gray">Your Home All Around the World</h2>  
        <div className="flex flex-wrap">
          <RentalCard />
          <RentalCard />
          <RentalCard />
        </div>
      </div>
      </div>
    );
  }
}

export default App;
