import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// const InputBox = require('./InputBox');
import InputBox from './InputBox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <InputBox />
      </div>
    );
  }

  _handleInput = (text) => {
    // now what do i do?
  }

}

export default App;
