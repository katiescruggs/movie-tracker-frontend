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
    const movieResponse = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`);
    const movies = await movieResponse.json();

    this.props.handleFetch(movies.results);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">MovieTracker</h1>
          <Link to='/login'>
            <button className='btn-sign-in'>
              SIGN IN
            </button>
          </Link>
        </header>


          <Route path='/login' component={Login} />
          <Route exact path='/' component={CardContainer} />
          <CardContainer />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleFetch: (movies) => {
      dispatch(fetchMovies(movies));
    }
  };
};


export default withRouter(connect(null, mapDispatchToProps)(App));
