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

  submitLogin = async (event) => {
    event.preventDefault();

    try {
      const signInUser = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password
        }) 
      });

      const userInfo = await signInUser.json();

      this.props.userLoginSuccess(userInfo.data);

    } catch (error){
      console.log('Email and password combination not found');
      this.props.userLoginError(error);
    }
  }

  submitNewUser = async () => {

    try {
      const createNewUser = await fetch('/api/users/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          password: this.state.password
        })
      });
      const newUser = await createNewUser.json();
      // console.log(newUser)
    } catch (error) {
      // console.log(error)
    }
  }

  render() {
    if (this.props.showRegister) {
      return (
        <div>
          <input onChange={(event) => this.handleInputChange(event, 'name')} type="text" placeholder="Name" />
          <input onChange={(event) => this.handleInputChange(event, 'email')} type="email" placeholder="email" />
          <input onChange={(event) => this.handleInputChange(event, 'password')} type="password" placeholder="password" />
          <button onClick={this.submitNewUser}>
            Submit
          </button>
        </div>
      );
    };
    return (
      <div>
        <input onChange={(event) => this.handleInputChange(event, 'email')} type="email" placeholder="email" />
        <input onChange={(event) => this.handleInputChange(event, 'password')} type="password" placeholder="password" />
        <button onClick={this.submitLogin}>
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


