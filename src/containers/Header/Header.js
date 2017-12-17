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
    const name = this.props.name ? `${this.props.name}'s` : '';

    const favoritesButton = this.props.signedIn 
      ? <Link to="/favorites">
          <button
            className="btn-favorites"
          >
            Favorites
          </button>
        </Link>
      : null;

    const buttons = this.props.signedIn 
      ? <Link to='/'>
          <button 
            className='btn-log-in'
            onClick={this.props.handleLogout}
          >
            Log Out
          </button>
        </Link>

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
        <h1 className="App-title">{`${name} MovieTracker`}</h1>
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