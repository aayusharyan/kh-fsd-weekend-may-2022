import React, { Component } from 'react'

export default class Child extends Component {
  constructor() {
    super();

    this.state = {input: ""};
  }
  inputChanged = e => {
    this.setState({input: e.target.value});
  }

  componentDidUpdate() {
    this.props.inputChangeFn(this.state.input);
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Enter something" onKeyUp={this.inputChanged} />
      </div>
    )
  }
}
