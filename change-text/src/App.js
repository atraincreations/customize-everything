import React, {Component} from 'react';
import Search from './search.js';
import Firm from './Firm.js';
import './App.css';

class App extends Component {

  render(){
    return (
      <div className="App">
        <div className="Nav">
          <Search />
        </div>
        <Firm />
      </div>
      
    )
  }
}

export default App;
