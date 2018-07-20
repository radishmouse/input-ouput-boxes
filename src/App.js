import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// const InputBox = require('./InputBox');
import InputBox from './InputBox';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputMessage: ''
    };
  }

  render() {
    return (
      <div className="App">
        <InputBox
          handler={this._handleInput}
        />
      </div>
    );
  }

  _handleInput = (text) => {
    // now what do i do?
    console.log(text);

    // let's save the text to state
    this.setState({
      inputMessage: text
    });
  }

}

export default App;
