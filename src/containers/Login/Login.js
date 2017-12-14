import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser } from '../../actions';


class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
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

      console.log(userInfo.data);
      this.props.setCurrentUser(userInfo.data);

    } catch (error){
        console.log('Email and password combination not found');
    }
  }

  render() {
    return (
      <div>
        <input onChange={(e) => this.handleInputChange(e, 'email')} type="email" placeholder="email" />
        <input onChange={(e) => this.handleInputChange(e, 'password')} type="password" placeholder="password" />
        <button onClick={this.submitLogin}>
          Submit
        </button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: (userInfo) => {
      dispatch(setCurrentUser(userInfo));
    }  
  }
}

export default withRouter(connect(null, mapDispatchToProps)(Login));


