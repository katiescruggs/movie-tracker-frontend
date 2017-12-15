import React, { Component } from 'react';
import Header from '../Header/Header.js';
import PropTypes from 'prop-types';
import Routes from '../../components/Routes/Routes.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Routes />
      </div>
    );
  }
}


//export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
export default App;
