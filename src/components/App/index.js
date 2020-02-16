import React, { Component } from 'react';
import logo from '../../holidu.png';
import './index.css';
import Results from '../../components/Results';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="App-intro">
          <Results/>
        </div>
      </div>
    );
  }
}

export default App;
