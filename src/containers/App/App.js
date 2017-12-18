import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header/Header.js';
import Routes from '../../components/Routes/Routes.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path = "/" component={ Header } />
        <Routes />
      </div>
    );
  }
}

export default App;
