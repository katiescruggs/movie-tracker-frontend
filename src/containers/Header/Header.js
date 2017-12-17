import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMovies, logout } from '../../actions';


class Header extends Component {

   async componentDidMount() {
     this.props.handleFetch();
   }

   componentWillUpdate(nextProps) {
    if(nextProps.signedIn && !this.props.signedIn) {
      this.props.history.push('/');
    }
   }

  render() {
    const favoritesButton = this.props.signedIn 
      ? <Link to="/favorites">
          <button
            className="btn-header-favorite"
          >
            Favorites
          </button>
        </Link>
      : null;

    const buttons = this.props.signedIn 
      ? <div className="welcome-msg"> 
          <p className="btn-log-in">{`Welcome, ${this.props.name}`}</p>
          <Link to='/'>
            <button 
              className='btn-sign-up'
              onClick={this.props.handleLogout}
            >
              Log Out
            </button>
          </Link>
        </div>

      : <div>
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
        </div> 

    return (
      <header className="App-header">
        {favoritesButton}
        <Link to="/">
          <h1 className="App-title">MovieTracker</h1>
        </Link>
        {buttons}
      </header>
    );
  }
}

export const mapStateToProps = state => {
  return {
    name: state.user.info.name,
    signedIn: state.user.signedIn
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    handleLogout: () => {
      dispatch(logout());
    },
    handleFetch: () => {
      dispatch(fetchMovies());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);