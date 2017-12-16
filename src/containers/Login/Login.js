import React, { Component } from 'react';
import { browserHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Login.css';
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

  handleInputChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  submitLogin = async (userInputs) => {
    if (this.props.showRegister) {
      this.props.userSignupAttempt(userInputs);
    } else {
      this.props.userLoginAttempt(userInputs);
    }
    this.setState({name: '', email: '', password: ''});
    this.props.history.push('/');
  }


  render() {
    const {name, email, password} = this.state;

    const userInputs = this.props.showRegister ? {name, email, password} : {email, password};
    const nameInput = this.props.showRegister 
      ? <input 
              className='input-field' 
              type="text" 
              placeholder="Name"
              name="name"
              value={name}
              onChange={this.handleInputChange} 
            />
      : null;

      //const errorMessage = 

      return (
        <div className='login'>
          {nameInput}

          <input 
            className='input-field'
            type="email" 
            placeholder="email"
            name="email"
            value={email}
            onChange={this.handleInputChange} 
          />

          <input 
            className='input-field' 
            type="password" 
            placeholder="password"
            name="password"
            value={password}
            onChange={this.handleInputChange} 
          />
          <button 
            className='btn-submit'
            onClick={() => this.submitLogin(userInputs)}
          >
            Submit
          </button>
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
    }
  };
};

Login.propTypes = {
  name: PropTypes.string,
  showRegister: PropTypes.bool,
  userLoginAttempt: PropTypes.func,
  userSignupAttempt: PropTypes.func,
  getCurrentUser: PropTypes.func,
  userLogout: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);


