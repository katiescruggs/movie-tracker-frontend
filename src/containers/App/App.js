import React, { Component } from 'react';
import { Switch, NavLink, Link, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import apiKey from '../../apiKey.js';
import CardContainer from '../CardContainer/CardContainer';
import Login from '../Login/Login';
import { fetchMovies } from '../../actions';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  async componentDidMount() {
    this.props.handleFetch();
  }

  render() {
    const name = this.props.name ? `${this.props.name}'s` : '';
    console.log(name);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{`${name} MovieTracker`}</h1>
          <Link to='/login'>
            <button className='btn-log-in'>
              Log In
            </button>
          </Link>
          <Link to='/register'>
            <button className='btn-sign-up'>
              Sign Up
            </button>
          </Link> 
        </header>


          <Route exact path='/login'  render={props => <Login {...props} />}/>
          <Route exact path='/register'  render={props => <Login {...props} showRegister />}/>
          <Route exact path='/' component={CardContainer} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.user.info.name
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleFetch: () => {
      dispatch(fetchMovies());
    }
  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
