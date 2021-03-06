import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMovies, logout } from '../../actions';
import VideoCamera from 'react-icons/lib/fa/video-camera';
import propTypes from 'prop-types';
import './Header.css';

export class Header extends Component {
  async componentDidMount() {
    this.props.handleFetch();
  }

  componentWillUpdate(nextProps) {
    if (nextProps.signedIn && !this.props.signedIn) {
      this.props.history.push('/');
    }
  }

  render() {
    const favoritesButton = this.props.signedIn 
      ? <Link to="/favorites">
        <button
          className="btn-header-favorite"
        >
          <VideoCamera className='favorite-icon'/>
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
      </div>; 

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

Header.propTypes = {
  handleFetch: propTypes.func,
  signedIn: propTypes.bool,
  history: propTypes.array,
  name: propTypes.string,
  handleLogout: propTypes.func
};