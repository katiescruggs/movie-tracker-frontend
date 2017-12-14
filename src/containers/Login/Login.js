import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser } from '../../actions';
import * as actions from '../../actions';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      showRegister: false
    };
  }

  handleInputChange(event, prop) {
    const value = event.target.value;
    this.setState({[prop]: value});
  }

  submitLogin = async (event, url, payload) => {
    event.preventDefault();

    try {
      const signInUser = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload) 
      });

      const userInfo = await signInUser.json();

      this.props.userLoginSuccess(userInfo.data);

    } catch (error){
      console.log('Email and password combination not found');
      this.props.userLoginError(error);
    }
  }

  render() {
    if (this.props.showRegister) {
      return (
        <div>
          <input onChange={(event) => this.handleInputChange(event, 'name')} type="text" placeholder="Name" />
          <input onChange={(event) => this.handleInputChange(event, 'email')} type="email" placeholder="email" />
          <input onChange={(event) => this.handleInputChange(event, 'password')} type="password" placeholder="password" />
          <button onClick={(event) => this.submitLogin(event, '/api/users/new', {name: this.state.name, email: this.state.email, password: this.state.password})}>
            Submit
          </button>
        </div>
      );
    };
    return (
      <div>
        <input onChange={(event) => this.handleInputChange(event, 'email')} type="email" placeholder="email" />
        <input onChange={(event) => this.handleInputChange(event, 'password')} type="password" placeholder="password" />
        <button onClick={(event) => this.submitLogin(event, '/api/users', {email: this.state.email, password: this.state.password})}>
          Submit
        </button>
      </div>
      );
  }
}

const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {
    userLoginAttempt: (userInfo) => {
      dispatch(actions.userLoginAttempt(userInfo));
    },
    userLoginSuccess: (userInfo) => {
      dispatch(actions.userLoginSuccess(userInfo));
    },
    userLoginError: (userInfo) => {
      dispatch(actions.userLoginError(userInfo));
    },
    userSignupAttempt: (userInfo) => {
      dispatch(actions.userSignupAttempt(userInfo));
    },
    userSignupSuccess: (userInfo) => {
      dispatch(actions.userLoginSuccess(userInfo));
    },
    userSignupError: (userInfo) => {
      dispatch(actions.userLoginError(userInfo));
    },
    getCurrentUser: (userInfo) => {
      dispatch(actions.getCurrentUser(userInfo));
    },
    userLogout: (userInfo) => {
      dispatch(actions.userLogout(userInfo));
    },
  };
};

export default withRouter(connect(null, mapDispatchToProps)(Login));


