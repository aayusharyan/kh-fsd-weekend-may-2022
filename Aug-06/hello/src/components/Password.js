import React, { Component } from 'react'

export default class Password extends Component {
  constructor() {
    super();

    this.state = { password: "", isValid: false };
  }

  updatePassword = e => {
    this.setState({password: e.target.value});
  }

  //This is a lifecycle method.
  componentDidUpdate(previousProp, previousState) {
    if(previousState.password !== this.state.password) {
      if(this.state.password.length > 6 && (this.state.password.includes("&") || this.state.password.includes("*"))) {
        this.setState({isValid: true});
      } else {
        this.setState({isValid: false});
      }
    }
  }

  render() {
    return (
      <div>
        <h4>Password</h4>

        <input type="password" placeholder="Enter password" onKeyUp={this.updatePassword} />

        <p>Password - {(this.state.isValid == true) ? "Valid" : "Invalid"} </p>
      </div>
    )
  }
}
