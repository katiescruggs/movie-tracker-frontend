import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMovies } from '../../actions';


class Header extends Component {

   async componentDidMount() {
     this.props.handleFetch();
   }

  render() {
    const name = this.props.name ? `${this.props.name}'s` : '';

    return (
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);