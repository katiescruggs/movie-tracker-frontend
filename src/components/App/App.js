import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../../containers/Header/Header.js';
import Routes from '../Routes/Routes.js';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Route path = "/" component={ Header } />
      <Routes />
    </div>
  );
};

export default App;
