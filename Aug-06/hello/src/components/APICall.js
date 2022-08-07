import React, { Component } from 'react'

export default class APICall extends Component {
  constructor() {
    super();

    this.state = { users: [] };
  }

  //This is a lifecycle method (built-in)
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then(response => {
      response.json().then(data => {
        this.setState({users: data});
      })
    })
  }

  render() {
    return (
      <div>
        <p>APICall</p>
        <ul>
          {this.state.users.map((single_user, idx) => {
            return <li key={idx}>{single_user.name} - {single_user.email} - ...</li>
          })}
        </ul>
      </div>
    )
  }
}
