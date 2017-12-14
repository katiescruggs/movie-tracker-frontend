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

  submitLogin = async (payload) => {
    if(this.props.showRegister) {
      this.props.userSignupAttempt(payload);
    } else {
      this.props.userLoginAttempt(payload);
    }
  }

  render() {
    const {name, email, password} = this.state;


    if (this.props.showRegister) {
      return (
        <div className='login'>
          <input className='input-field' onChange={(event) => this.handleInputChange(event, 'name')} type="text" placeholder="Name" />
          <input className='input-field'onChange={(event) => this.handleInputChange(event, 'email')} type="email" placeholder="email" />
          <input className='input-field'onChange={(event) => this.handleInputChange(event, 'password')} type="password" placeholder="password" />
          <button className='btn-submit'onClick={(event) => this.submitLogin({name, email, password})}>
            Submit
          </button>
        </div>
      );
    };
    return (
      <div className='login'>
        <input className='input-field' onChange={(event) => this.handleInputChange(event, 'email')} type="email" placeholder="email" />
        <input className='input-field' onChange={(event) => this.handleInputChange(event, 'password')} type="password" placeholder="password" />
        <button className='btn-submit' onClick={(event) => this.submitLogin({email, password})}>
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
    userSignupAttempt: (userInfo) => {
      dispatch(actions.userSignupAttempt(userInfo));
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


