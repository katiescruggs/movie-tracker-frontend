import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser } from '../../actions';
import './Login.css'
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
    console.log('submit login firing')
    event.preventDefault();

    const createUser = url === '/api/users/new';

    try {
      const signInUser = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload) 
      });

      const userInfo = await signInUser.json();
      console.log(userInfo)
      if(createUser) {
        this.props.userSignupSuccess(userInfo.data);
      } else {
        this.props.userLoginSuccess(userInfo.data);
      }

    } catch (error){
      console.log('Email and password combination not found');
      if(createUser) {
        this.props.userLoginError('Log in failed'); 
      } else {
        this.props.userSignupError('Sign up failed');
      }
    }
  }

  render() {
    if (this.props.showRegister) {
      return (
        <div className='login'>
          <input className='input-field' onChange={(event) => this.handleInputChange(event, 'name')} type="text" placeholder="Name" />
          <input className='input-field'onChange={(event) => this.handleInputChange(event, 'email')} type="email" placeholder="email" />
          <input className='input-field'onChange={(event) => this.handleInputChange(event, 'password')} type="password" placeholder="password" />
          <button className='btn-submit'onClick={(event) => this.submitLogin(event, '/api/users/new', {name: this.state.name, email: this.state.email, password: this.state.password})}>
            Submit
          </button>
        </div>
      );
    };
    return (
      <div className='login'>
        <input className='input-field' onChange={(event) => this.handleInputChange(event, 'email')} type="email" placeholder="email" />
        <input className='input-field' onChange={(event) => this.handleInputChange(event, 'password')} type="password" placeholder="password" />
        <button className='btn-submit' onClick={(event) => this.submitLogin(event, '/api/users', {email: this.state.email, password: this.state.password})}>
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


