import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CloseIcon from 'react-icons/lib/fa/close';
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

    const modalTitle = this.props.showRegister ? 'Sign Up' : 'Login';

    const userInputs = this.props.showRegister 
      ? {name, email, password} 
      : {email, password};
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

    const errorMessage = this.props.errorStatus 
      ? this.props.errorMessage 
      : null;

    return (
      <div className='login'>
        <h3 className='modal-title'>{modalTitle}</h3>
        <Link to="/">
          <button className="btn-close"><CloseIcon /></button>
        </Link>
        {errorMessage}
        {nameInput}
        <input 
          className='input-field'
          type="email" 
          placeholder="Email"
          name="email"
          value={email}
          onChange={this.handleInputChange} 
        />

        <input 
          className='input-field' 
          type="password" 
          placeholder="Password"
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
    name: state.user.info.name,
    errorStatus: state.error.status,
    errorMessage: state.error.message
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
  userLogout: PropTypes.func,
  errorStatus: PropTypes.bool,
  errorMessage: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);


