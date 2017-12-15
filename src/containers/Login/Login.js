import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
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
  }

  render() {
    const {name, email, password} = this.state;

    if (this.props.showRegister) {
      return (
        <div className='login'>
          <input 
            className='input-field' 
            type="text" 
            placeholder="Name"
            name="name"
            value={name}
            onChange={this.handleInputChange} 
          />

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
            onClick={() => this.submitLogin({name, email, password})}
          >
            Submit
          </button>
        </div>
      );
    }

    return (
      <div className='login'>
        <input 
          className='input-field' 
          type="email"
          name="email"
          placeholder="email"
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
          onClick={() => this.submitLogin({email, password})}
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));


