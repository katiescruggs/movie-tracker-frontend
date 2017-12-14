import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

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

    const signInUser = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      }) 
    })
    console.log(signInUser);
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

// const mapDispatchToProps = dispatch => ({
//   submitLogin: dispatch()
// })

export default withRouter(Login);