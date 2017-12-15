import React, { Component } from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CardContainer from '../CardContainer/CardContainer';
import Login from '../Login/Login';
import { fetchMovies } from '../../actions';
import PropTypes from 'prop-types';
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

        <Route 
          exact path='/login'  
          render={props => <Login {...props} />}
        />
        <Route 
          exact path='/register'  
          render={props => <Login {...props} showRegister />}
        />
        <Route exact path='/' component={CardContainer} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.user.info.name
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleFetch: () => {
      dispatch(fetchMovies());
    }
  };
};

App.propTypes = {
  name: PropTypes.string,
  handleFetch: PropTypes.func
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
