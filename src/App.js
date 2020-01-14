import React, { Component } from 'react';
import './App.css';
import Films from './Films';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>Star Wars App</h1>
        <Films />
      </div>
    );
  }
}

export default App;
