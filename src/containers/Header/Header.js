import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMovies, userLogout } from '../../actions';


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

    const buttons = this.props.signedIn 
      ? <button 
          className='btn-log-in'
          onClick={this.props.handleLogout}
        >
          Log Out
        </button>

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
        <h1 className="App-title">{`${name} MovieTracker`}</h1>
        {buttons}
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.user.info.name,
    signedIn: state.user.signedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleLogout: () => {
      dispatch(userLogout());
    },
    handleFetch: () => {
      dispatch(fetchMovies());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);